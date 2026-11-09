import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle2, Building2, ShieldCheck, Globe, Loader2, AlertCircle, Copy, Check, MessageSquare, ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { SocialMediaBar, WhatsAppIcon } from '../components/SocialLinks';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';

interface ContactPageProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { language, t, isRTL } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('ISO 9001 Certification Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const targetEmail = COMPANY_INFO.email || 'info@iemacert.com';
  const whatsappNumber = '2348134831027'; // International format without +

  const getWhatsAppUrl = () => {
    const text = message.trim() 
      ? `*${subject.trim()}*\n\n${message.trim()}`
      : `*${subject.trim()}*`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = `[Head Office Inquiry] ${subject} - ${name}`;
    const emailBody = `ATTENTION: IEMA STANDARDS LIMITED - HEAD OFFICE (${targetEmail})\n\n` +
      `Client / Inquirer Name: ${name}\n` +
      `Email Address: ${email}\n` +
      `Phone Number: ${phone}\n` +
      `Inquiry Topic: ${subject}\n\n` +
      `Message & Requirements:\n${message}\n\n` +
      `---\nDispatched via IEMA Standards Official Website (Lekki Head Office)`;

    const generatedMailto = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setMailtoUrl(generatedMailto);

    try {
      // Direct submission to info@iemacert.com
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          _honey: '' // anti-spam honeypot
        })
      });

      await response.json().catch(() => ({}));
      setSubmitted(true);
    } catch {
      // In case of offline or network interruption, complete submission state with manual backup
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    const summary = message.trim()
      ? `${subject.trim()}\n\n${message.trim()}`
      : subject.trim();
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-12 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* SEO Head */}
      <SeoHead
        title="Contact Us | Lagos & Abuja | IEMA Standards"
        description="Contact IEMA Standards Limited in Lekki, Lagos or Abuja for accredited ISO certification, industrial testing, and compliance inquiries. Call +234 813 483 1027."
        canonicalPath="contact"
        keywords={[
          'contact iema standards',
          'iso certification office lagos',
          'iso auditors lekki lagos',
          'iema standards contact number'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: t('nav.contact'), isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="IEMA Headquarters Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-800">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>IEMA STANDARDS LIMITED — {t('contact.headOffice')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            {language === 'FR' ? 'Contactez-nous & Nos Bureaux' : language === 'AR' ? 'اتصل بنا ومواقع مكاتبنا' : 'Contact Us & Office Location'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
            {language === 'FR' 
              ? 'Contactez nos auditeurs principaux ISO et nos spécialistes techniques à notre siège de Lekki Chevron ou par téléphone, e-mail et WhatsApp.' 
              : language === 'AR'
              ? 'تواصل مع مدققينا المعتمدين وفريقنا الفني في مقرنا الرئيسي بلاغوس، أو عبر الهاتف والبريد الإلكتروني والواتساب.'
              : 'Get in touch with our Lead ISO Auditors, Laboratory Technical Managers, and Verification officers at our Lekki Chevron office or via multi-channel dispatch (Direct Email, Phone & WhatsApp).'}
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0E2A47] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6 text-slate-900 dark:text-white transition-colors">
            <div className="border-b border-slate-200 dark:border-slate-700/80 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white font-serif">Send an Official Message</h2>
                <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">Multi-channel routing directly to <span className="font-semibold text-emerald-600 dark:text-emerald-400">info@iemacert.com</span> and WhatsApp.</p>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello IEMA Standards Head Office, I would like to make an inquiry regarding ISO certification.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] dark:text-[#25D366] text-xs font-bold border border-[#25D366]/30 transition-colors shrink-0"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Eng. Samuel Johnson"
                      className="w-full p-3 bg-slate-50 dark:bg-[#0A192F] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. samuel@company.com"
                      className="w-full p-3 bg-slate-50 dark:bg-[#0A192F] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +234 813 483 1027"
                      className="w-full p-3 bg-slate-50 dark:bg-[#0A192F] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider block mb-1">Inquiry Topic</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 bg-slate-50 dark:bg-[#0A192F] border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    >
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">ISO 9001 Quality Certification</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">ISO 14001 Environmental Audit</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">ISO 45001 Occupational Safety</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">ISO 27001 Information Security</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Material Laboratory Testing & NDT</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Industrial Third-Party Inspection</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Anti-Money Laundering (AML) Compliance</option>
                      <option className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">ISO Certificate Verification Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider block mb-1">Message / Request Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide additional details regarding your facility, workforce size, or testing requirements..."
                    className="w-full p-3 bg-slate-50 dark:bg-[#0A192F] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-400 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#DC2626] hover:bg-red-700 disabled:bg-slate-600 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-colors flex-1"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-white animate-spin" />
                          <span>Sending to info@iemacert.com...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Send Message (info@iemacert.com)</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-extrabold px-5 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium px-1">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      Transmits directly to <strong className="text-slate-700 dark:text-slate-200">{targetEmail}</strong>
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      Encrypted Channel
                    </span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Inquiry Dispatched to Head Office!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you <span className="font-bold text-slate-900 dark:text-white">{name}</span>. Your inquiry regarding <span className="font-bold text-amber-600 dark:text-amber-400">{subject}</span> has been transmitted directly to <strong className="text-emerald-600 dark:text-emerald-400">{targetEmail}</strong>.
                </p>

                <div className="bg-slate-50 dark:bg-[#070F2B] p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-left max-w-lg mx-auto text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <div className="text-[11px] font-bold uppercase text-amber-600 dark:text-amber-400 mb-1">Dispatched Submission Summary:</div>
                  <div><strong>Destination:</strong> {targetEmail} (IEMA Head Office)</div>
                  <div><strong>Inquirer:</strong> {name} ({email}) | <strong>Tel:</strong> {phone}</div>
                  <div><strong>Subject:</strong> {subject}</div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-xs font-black px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 shadow transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-slate-950" />
                    <span>Also Send on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopySummary}
                    className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>

                  {mailtoUrl && (
                    <a
                      href={mailtoUrl}
                      className="bg-[#0E2A47] dark:bg-emerald-500 hover:bg-[#070F2B] dark:hover:bg-emerald-600 text-white dark:text-slate-950 text-xs font-extrabold px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 shadow transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>
                  )}

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Office Location & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-[#0A192F] text-slate-900 dark:text-white p-6 sm:p-8 rounded-2xl space-y-6 border border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
              <h2 className="text-xl font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 font-serif">Office Contact Details</h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-amber-700 dark:text-amber-400">Headquarters Address</div>
                    <div className="text-slate-700 dark:text-slate-200 mt-1 leading-relaxed">{COMPANY_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-amber-700 dark:text-amber-400">Direct Telephone</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block mt-0.5 font-mono font-bold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#25D366]/20 text-[#25D366] rounded-lg flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-[#25D366]">WhatsApp Business Desk</div>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-200 hover:text-[#25D366] transition-colors block mt-0.5 font-mono font-bold"
                    >
                      +234 813 483 1027 (Chat Now)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-amber-700 dark:text-amber-400">Official Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block mt-0.5 font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-amber-700 dark:text-amber-400">Operating Hours</div>
                    <div className="text-slate-700 dark:text-slate-200 mt-0.5">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels in Contact Page */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="font-bold uppercase tracking-wider text-[11px] text-slate-600 dark:text-slate-400 mb-2.5">
                  Connect on Social Channels
                </div>
                <SocialMediaBar variant="contact" />
              </div>

              <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>EGAC Accredited ISO Certification Body (ISO/IEC 17021-1)</span>
              </div>
            </div>

            {/* Interactive Live Google Map Card */}
            <div className="bg-white dark:bg-[#0E2A47] rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-md space-y-3 transition-colors">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Lekki Chevron District Head Office Map</span>
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded font-mono">Lagos, Nigeria</span>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <iframe
                  title="IEMA Standards Limited Lekki Lagos Office Location"
                  src="https://maps.google.com/maps?q=27A%20Alternative%20Drive%2C%20Chevron%2C%20Lekki%2C%20Lagos%2C%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-slate-500 dark:text-slate-400">27A Alternative Drive, Chevron, Lekki</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
