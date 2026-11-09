// Google Analytics 4 (GA4) and Conversion Tracking Utilities for iemacert.com

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type ConversionAction = 
  | 'quote_form_submit'
  | 'whatsapp_click'
  | 'phone_call_click'
  | 'email_click'
  | 'certificate_verify'
  | 'checklist_download'
  | 'brochure_download'
  | 'search_performed'
  | 'navigation_click'
  | 'feedback_submission';

export const trackPageView = (pageName: string, path?: string) => {
  try {
    const cleanPath = path || `/${pageName}/`;
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: cleanPath
      });
    }
  } catch {
    // Graceful fallback if analytics is blocked by ad-blocker
  }
};

export const trackConversionEvent = (
  action: ConversionAction, 
  details?: Record<string, any>
) => {
  try {
    const payload = {
      event_category: 'Engagement & Conversions',
      event_label: details?.label || action,
      value: details?.value || 1,
      ...details,
      timestamp: new Date().toISOString()
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', action, payload);
      // Map to standard GA4 generate_lead event for high-intent conversion actions
      if (['quote_form_submit', 'whatsapp_click', 'phone_call_click', 'checklist_download'].includes(action)) {
        window.gtag('event', 'generate_lead', {
          currency: 'NGN',
          value: details?.estimatedValue || 250000,
          lead_type: action,
          standard: details?.standard || 'ISO Certification'
        });
      }
    }

    // Push into dataLayer for Google Tag Manager (GTM)
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: action,
        ...payload
      });
    }
  } catch {
    // Fail silently
  }
};
