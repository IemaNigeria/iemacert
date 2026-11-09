import struct
import zlib

def generate_ibstac_png():
    width = 500
    height = 500
    pixels = bytearray(width * height * 4)

    # Initialize transparent background
    for i in range(width * height):
        pixels[i * 4 + 0] = 255
        pixels[i * 4 + 1] = 255
        pixels[i * 4 + 2] = 255
        pixels[i * 4 + 3] = 0

    def set_pixel(x, y, r, g, b, a=255):
        if 0 <= x < width and 0 <= y < height:
            idx = (y * width + x) * 4
            src_a = a / 255.0
            dst_a = pixels[idx + 3] / 255.0
            out_a = src_a + dst_a * (1.0 - src_a)
            if out_a > 0:
                pixels[idx + 0] = int((r * src_a + pixels[idx + 0] * dst_a * (1.0 - src_a)) / out_a)
                pixels[idx + 1] = int((g * src_a + pixels[idx + 1] * dst_a * (1.0 - src_a)) / out_a)
                pixels[idx + 2] = int((b * src_a + pixels[idx + 2] * dst_a * (1.0 - src_a)) / out_a)
                pixels[idx + 3] = int(out_a * 255)

    def point_in_polygon(x, y, poly):
        n = len(poly)
        inside = False
        p1x, p1y = poly[0]
        for i in range(n + 1):
            p2x, p2y = poly[i % n]
            if y > min(p1y, p2y):
                if y <= max(p1y, p2y):
                    if x <= max(p1x, p2x):
                        if p1y != p2y:
                            xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x
                        if p1x == p2x or x <= xinters:
                            inside = not inside
            p1x, p1y = p2x, p2y
        return inside

    def fill_polygon(poly, r=0, g=0, b=0):
        min_x = max(0, int(min(p[0] for p in poly)) - 1)
        max_x = min(width - 1, int(max(p[0] for p in poly)) + 1)
        min_y = max(0, int(min(p[1] for p in poly)) - 1)
        max_y = min(height - 1, int(max(p[1] for p in poly)) + 1)

        # Anti-aliasing with 4x4 sub-sampling
        for y in range(min_y, max_y + 1):
            for x in range(min_x, max_x + 1):
                coverage = 0
                for sy in [0.2, 0.4, 0.6, 0.8]:
                    for sx in [0.2, 0.4, 0.6, 0.8]:
                        if point_in_polygon(x + sx, y + sy, poly):
                            coverage += 1
                if coverage > 0:
                    alpha = int((coverage / 16.0) * 255)
                    set_pixel(x, y, r, g, b, alpha)

    def fill_rect(x1, y1, x2, y2, r=0, g=0, b=0):
        fill_polygon([(x1, y1), (x2, y1), (x2, y2), (x1, y2)], r, g, b)

    # Coordinates for IBSTAC
    # Center block: y around 210 to 270 (height ~60)
    # The A is elevated higher (peak reaches y ~ 205)
    #
    # Baseline for I, B, S, T, C bottom = 270. Top = 222 (height = 48)
    # Underline bar: y = 278 to 282, from x = 105 to 395 (with gap under A apex)
    
    # 1. Letter 'I':
    fill_rect(108, 222, 122, 270)

    # 2. Letter 'B':
    # Vertical spine
    fill_rect(132, 222, 144, 270)
    # Top bar, mid bar, bot bar
    fill_rect(144, 222, 172, 232)
    fill_rect(144, 241, 170, 250)
    fill_rect(144, 260, 172, 270)
    # Right curves for top and bottom loops
    fill_rect(166, 224, 176, 248)
    fill_rect(167, 244, 178, 268)

    # 3. Letter 'S':
    fill_rect(188, 222, 228, 232) # top
    fill_rect(188, 222, 198, 246) # top left
    fill_rect(188, 241, 228, 251) # middle
    fill_rect(218, 246, 228, 270) # bot right
    fill_rect(188, 260, 228, 270) # bot

    # 4. Letter 'T':
    fill_rect(238, 222, 276, 232) # top bar
    fill_rect(252, 232, 262, 270) # stem

    # 5. Distinctive Chevron Peak / Triangle 'A' (Stands prominent):
    # Left leg of A: from (265, 270) to (305, 208)
    # Right leg of A: from (305, 208) to (345, 270)
    # Outer triangle: (262, 270), (305, 206), (348, 270)
    # Inner triangle cutout: (279, 270), (305, 228), (331, 270)
    poly_a_outer = [(260, 270), (305, 206), (350, 270), (335, 270), (305, 226), (275, 270)]
    fill_polygon(poly_a_outer, 0, 0, 0)

    # 6. Letter 'C':
    fill_rect(358, 222, 392, 232) # top bar
    fill_rect(354, 226, 365, 266) # left spine
    fill_rect(358, 260, 392, 270) # bottom bar

    # 7. Underline Bar:
    # Left segment: x=108 to 260
    fill_rect(108, 278, 262, 281)
    # Right segment: x=348 to 392
    fill_rect(348, 278, 392, 281)

    # Subtitle text: "International Bureau for Standard Accreditation"
    # Render crisp representation line below underline (y=290 to 298)
    # Simple crisp clean micro lettering baseline
    words = "International Bureau for Standard Accreditation"
    # Render clean dark subline
    # Draw subtitle text cleanly:
    # Subtitle line thickness:
    fill_rect(108, 289, 392, 291)
    # Render tick markers along the line simulating clean small caps font
    for x in range(108, 392, 4):
        if (x // 4) % 3 != 0:
            fill_rect(x, 287, x+2, 294)

    # Pack into PNG
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)
        raw_data.extend(pixels[y * width * 4 : (y + 1) * width * 4])

    png = bytearray(b'\x89PNG\r\n\x1a\n')
    def chunk(tag, data):
        c = bytearray(tag) + data
        crc = zlib.crc32(c) & 0xffffffff
        return struct.pack('>I', len(data)) + c + struct.pack('>I', crc)

    png.extend(chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)))
    png.extend(chunk(b'IDAT', zlib.compress(bytes(raw_data), 9)))
    png.extend(chunk(b'IEND', b''))

    with open('public/IBSTAC.png', 'wb') as f:
        f.write(png)
    print('Generated public/IBSTAC.png successfully')

generate_ibstac_png()
