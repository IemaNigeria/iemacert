/**
 * Reliable ISO Certification Handbook file downloader and viewer for web and iframe sandboxes.
 */

export const HANDBOOK_PDF_PATH = '/pdf/Certificate-Handbook.pdf';
export const HANDBOOK_PDF_FALLBACK_PATH = '/IEMA-Certification-Handbook-Complete-1.pdf';

/**
 * Downloads the static Certificate-Handbook.pdf using a Blob fetch mechanism
 * which reliably bypasses iframe cross-origin anchor download restrictions.
 */
export async function downloadIsoHandbookPdf(filename: string = 'Certificate-Handbook.pdf'): Promise<boolean> {
  try {
    let response = await fetch(HANDBOOK_PDF_PATH);
    if (!response.ok) {
      response = await fetch(HANDBOOK_PDF_FALLBACK_PATH);
    }
    
    if (!response.ok) {
      throw new Error(`Failed to fetch handbook PDF: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 2000);

    return true;
  } catch (error) {
    console.error('Blob download encountered an issue, falling back to direct navigation:', error);
    
    // Fallback: direct window open or anchor trigger
    try {
      const fallbackLink = document.createElement('a');
      fallbackLink.href = HANDBOOK_PDF_PATH;
      fallbackLink.target = '_blank';
      fallbackLink.rel = 'noopener noreferrer';
      fallbackLink.download = filename;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      setTimeout(() => {
        document.body.removeChild(fallbackLink);
      }, 1000);
      return true;
    } catch (fallbackError) {
      console.error('All download methods failed:', fallbackError);
      window.open(HANDBOOK_PDF_PATH, '_blank');
      return false;
    }
  }
}

/**
 * Opens the ISO Certification Handbook in a new tab or window.
 */
export function openIsoHandbookInNewTab(): void {
  window.open(HANDBOOK_PDF_PATH, '_blank', 'noopener,noreferrer');
}
