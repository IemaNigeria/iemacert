import struct
import zlib
import math

def generate_nnpc_png():
    width = 500
    height = 500
    pixels = bytearray(width * height * 4)

    # Initialize with clean crisp background (white or subtle transparency, let's do clean white/transparent)
    # Background: pure white with alpha 255
    for i in range(width * height):
        pixels[i * 4 + 0] = 255
        pixels[i * 4 + 1] = 255
        pixels[i * 4 + 2] = 255
        pixels[i * 4 + 3] = 0 # Transparent

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

    def fill_polygon(poly, r, g, b):
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

    # 1. Yellow Left Wing
    # [85,190], [122,152], [122,280], [85,318]
    poly_yellow = [(85, 190), (122, 152), (122, 280), (85, 318)]
    fill_polygon(poly_yellow, 230, 195, 0) # #E6C300

    # 2. Deep Olive/Forest Green Upper Polygon
    # [122,152], [245,190], [245,315], [122,280]
    poly_dark_green = [(122, 152), (245, 190), (245, 315), (122, 280)]
    fill_polygon(poly_dark_green, 27, 102, 61) # #1B663D

    # 3. Bright Vibrant Green Front Lower Triangle
    # [122,280], [245,190], [245,315]
    poly_bright_green = [(122, 280), (245, 190), (245, 315)]
    fill_polygon(poly_bright_green, 0, 154, 68) # #009A44

    # 4. Bold Red Base Wedge
    # [85,318], [208,354], [208,304], [122,280]
    poly_red = [(85, 318), (208, 354), (208, 304), (122, 280)]
    fill_polygon(poly_red, 227, 6, 19) # #E30613

    # Draw NNPC letters with geometry
    # Color #555555 (85, 85, 85)
    # Box for NNPC word: top_y = 278, bot_y = 318 (height = 40)
    # N1: x from 258 to 286
    # N2: x from 293 to 321
    # P:  x from 328 to 354
    # C:  x from 360 to 390
    
    # Letter N1
    fill_polygon([(258, 278), (265, 278), (265, 318), (258, 318)], 85, 85, 85)
    fill_polygon([(279, 278), (286, 278), (286, 318), (279, 318)], 85, 85, 85)
    fill_polygon([(258, 278), (267, 278), (286, 318), (277, 318)], 85, 85, 85)

    # Letter N2
    fill_polygon([(293, 278), (300, 278), (300, 318), (293, 318)], 85, 85, 85)
    fill_polygon([(314, 278), (321, 278), (321, 318), (314, 318)], 85, 85, 85)
    fill_polygon([(293, 278), (302, 278), (321, 318), (312, 318)], 85, 85, 85)

    # Letter P
    fill_polygon([(328, 278), (335, 278), (335, 318), (328, 318)], 85, 85, 85)
    fill_polygon([(335, 278), (350, 278), (354, 282), (354, 297), (350, 301), (335, 301)], 85, 85, 85)
    # Cutout inside P loop
    min_x, max_x, min_y, max_y = 335, 347, 285, 294
    for y in range(min_y, max_y + 1):
        for x in range(min_x, max_x + 1):
            idx = (y * width + x) * 4
            pixels[idx+0] = 255
            pixels[idx+1] = 255
            pixels[idx+2] = 255
            pixels[idx+3] = 0

    # Letter C
    poly_c_outer = [
        (370, 278), (388, 278), (388, 285), (370, 285), 
        (366, 289), (366, 307), (370, 311), 
        (388, 311), (388, 318), (370, 318),
        (360, 308), (360, 288)
    ]
    fill_polygon(poly_c_outer, 85, 85, 85)

    # Encode PNG
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

    with open('public/NNPC.png', 'wb') as f:
        f.write(png)
    print('Generated public/NNPC.png')

generate_nnpc_png()
