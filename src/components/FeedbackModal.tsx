import React, { useState } from 'react';
import { 
  X, Send, ShieldCheck, AlertCircle, Scale, MessageSquareHeart, 
  CheckCircle2, Copy, Check, Mail, Phone, Building2, User, 
  ExternalLink, FileText, Star, Lock
} from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubmissionType = 'complaint' | 'appeal' | 'feedback';

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [submissionType, setSubmissionType] = useState<SubmissionType>('complaint');
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+234 ');
  const [relationship, setRelationship] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number>(5);

  // Status state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedRefId, setGeneratedRefId] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'A valid email address is required';
    if (!relationship || relationship === 'select') errs.relationship = 'Please select your relationship with IEMA';
    if (!message.trim() || message.trim().length < 15) {
      errs.message = 'Please provide detailed information (at least 15 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate reference number
    const refCode = `IEMA-CAF-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedRefId(refCode);

    const typeLabel = submissionType === 'complaint' 
      ? 'Complaint' 
      : submissionType === 'appeal' 
      ? 'Appeal' 
      : 'Feedback';

    const subject = encodeURIComponent(`[${typeLabel.toUpperCase()}] Ref ${refCode} - ${fullName} (${organisation || 'Individual'})`);
    
    const bodyLines = [
      `=======================================================`,
      `IEMA STANDARDS LIMITED — COMPLAINTS, APPEALS & FEEDBACK`,
      `=======================================================`,
      `Reference Number: ${refCode}`,
      `Submission Type: ${typeLabel}`,
      `Date & Time: ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })} (WAT)`,
      ``,
      `--- SENDER CONTACT DETAILS ---`,
      `Full Name: ${fullName}`,
      `Organisation: ${organisation || 'N/A'}`,
      `Email Address: ${email}`,
      `Phone Number: ${phone}`,
      `Relationship with IEMA: ${relationship}`,
      referenceNo ? `Certificate / Audit Reference No: ${referenceNo}` : ``,
      submissionType === 'feedback' ? `Service Rating: ${rating} / 5 Stars` : ``,
      ``,
      `--- SUBMISSION DETAILS ---`,
      message,
      ``,
      `=======================================================`,
      `Handling Commitment: Handled impartially in accordance with`,
      `ISO/IEC 17021-1, ISO/IEC 17025, and ISO/IEC 17065 procedures.`,
      `IEMA Standards Limited · Lekki, Lagos, Nigeria · iema.iemacert.com`,
      `Recipient: info@iemacert.com`,
      `=======================================================`
    ].filter(Boolean).join('\n');

    const mailtoUrl = `mailto:info@iemacert.com?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;

    // Trigger user mail client
    window.location.href = mailtoUrl;

    trackConversionEvent('feedback_submission', {
      type: submissionType,
      relationship,
      hasOrganisation: !!organisation
    });

    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = `IEMA Reference: ${generatedRefId}\nType: ${submissionType}\nSubmitted by: ${fullName} (${email})\nOrganisation: ${organisation || 'N/A'}\nMessage:\n${message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setOrganisation('');
    setEmail('');
    setPhone('+234 ');
    setRelationship('');
    setReferenceNo('');
    setMessage('');
    setErrors({});
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#0B1E38] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700/80 my-6 overflow-hidden text-slate-900 dark:text-slate-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#070F2B] via-[#0D1D4A] to-[#070F2B] text-white p-6 sm:p-7 relative border-b border-slate-800 shrink-0">
          <button
            onClick={resetForm}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1.5 pr-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-0.5 rounded-full text-[11px] font-bold border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>IEMA Standards Limited</span>
            </div>
            <h2 id="feedback-modal-title" className="text-xl sm:text-2xl font-black text-white font-serif">
              Complaints, Appeals and Feedback
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Use this form to raise a complaint, appeal a certification, inspection or testing decision, or share feedback on our services. Every submission is logged, acknowledged and handled impartially.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1 space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* SECTION 1: What would you like to submit? */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-extrabold text-slate-900 dark:text-white">
                    1. What would you like to submit?
                  </label>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Choose one option</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Complaint */}
                  <label 
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      submissionType === 'complaint'
                        ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20 ring-2 ring-red-500/20'
                        : 'border-slate-200 dark:border-slate-700/80 bg-slate-50/60 dark:bg-[#071329] hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            submissionType === 'complaint' ? 'bg-red-500 text-white' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                          }`}>
                            <AlertCircle className="w-4 h-4" />
                          </div>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white">Complaint</span>
                        </div>
                        <input
                          type="radio"
                          name="submissionType"
                          checked={submissionType === 'complaint'}
                          onChange={() => setSubmissionType('complaint')}
                          className="text-red-600 focus:ring-red-500"
                        />
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                        You are dissatisfied with IEMA's service or personnel, or with an organisation certified by IEMA.
                      </p>
                    </div>
                  </label>

                  {/* Appeal */}
                  <label 
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      submissionType === 'appeal'
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-700/80 bg-slate-50/60 dark:bg-[#071329] hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            submissionType === 'appeal' ? 'bg-blue-500 text-white' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          }`}>
                            <Scale className="w-4 h-4" />
                          </div>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white">Appeal</span>
                        </div>
                        <input
                          type="radio"
                          name="submissionType"
                          checked={submissionType === 'appeal'}
                          onChange={() => setSubmissionType('appeal')}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                        You want IEMA to reconsider a decision about your certification, inspection or test result.
                      </p>
                    </div>
                  </label>

                  {/* Feedback */}
                  <label 
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      submissionType === 'feedback'
                        ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 dark:border-slate-700/80 bg-slate-50/60 dark:bg-[#071329] hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            submissionType === 'feedback' ? 'bg-emerald-500 text-white' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                          }`}>
                            <MessageSquareHeart className="w-4 h-4" />
                          </div>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white">Feedback</span>
                        </div>
                        <input
                          type="radio"
                          name="submissionType"
                          checked={submissionType === 'feedback'}
                          onChange={() => setSubmissionType('feedback')}
                          className="text-emerald-600 focus:ring-emerald-500"
                        />
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                        You would like to rate our service or suggest an improvement.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* SECTION 2: Your details */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="space-y-0.5">
                  <label className="text-sm font-extrabold text-slate-900 dark:text-white">
                    2. Your details
                  </label>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    We use these details only to handle your submission and respond to you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Engr. Chukwuma Adeleke"
                        className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#071329] border ${
                          errors.fullName ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                        } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        required
                      />
                    </div>
                    {errors.fullName && <p className="text-[10px] text-red-500 font-semibold">{errors.fullName}</p>}
                  </div>

                  {/* Organisation */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      Organisation <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                        placeholder="e.g. Apex Marine Services Ltd"
                        className="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#071329] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Email address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#071329] border ${
                          errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                        } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        required
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-500 font-semibold">{errors.email}</p>}
                  </div>

                  {/* Phone number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      Phone number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#071329] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Your relationship with IEMA */}
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      Your relationship with IEMA <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#071329] border ${
                        errors.relationship ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      required
                    >
                      <option value="">Select one</option>
                      <option value="Certified Client / Certificate Holder">Certified Client / Certificate Holder</option>
                      <option value="Audit or Certification Applicant">Audit or Certification Applicant</option>
                      <option value="Customer of a Certified Organisation">Customer of an Organisation Certified by IEMA</option>
                      <option value="Laboratory Testing / Calibration Client">Laboratory Testing / Calibration Client</option>
                      <option value="Inspection / Asset Integrity Client">Inspection / Asset Integrity Client</option>
                      <option value="Training Course Participant">Training Course Participant / Lead Auditor Student</option>
                      <option value="Supplier / Subcontractor">Supplier / Subcontractor</option>
                      <option value="Regulatory Authority / Industry Body">Regulatory Authority / Industry Body (EGAC, NCDMB, SON, etc.)</option>
                      <option value="General Public / Other Stakeholder">General Public / Other Stakeholder</option>
                    </select>
                    {errors.relationship && <p className="text-[10px] text-red-500 font-semibold">{errors.relationship}</p>}
                  </div>
                </div>
              </div>

              {/* SECTION 3: Details of your submission */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-extrabold text-slate-900 dark:text-white">
                    3. Details of your {submissionType}
                  </label>
                  {submissionType === 'feedback' && (
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mr-1">Rating:</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-0.5 hover:scale-110 transition-transform"
                          title={`${star} star${star > 1 ? 's' : ''}`}
                        >
                          <Star className={`w-4 h-4 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Certificate, Inspection or Audit Reference No. <span className="text-slate-400 text-[10px] font-normal">(If applicable)</span>
                  </label>
                  <input
                    type="text"
                    value={referenceNo}
                    onChange={(e) => setReferenceNo(e.target.value)}
                    placeholder="e.g. IEMA-QMS-2024-0891 or Audit Booking Ref"
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#071329] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Detailed Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      submissionType === 'complaint'
                        ? 'Please detail the nature of your complaint, including dates, individuals involved, evidence or specific incidents...'
                        : submissionType === 'appeal'
                        ? 'Please describe the decision you are appealing (e.g. audit finding, non-conformance classification, suspension), rationale and supporting facts...'
                        : 'Please share your thoughts on our audit quality, customer service, report delivery or areas we can improve...'
                    }
                    className={`w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#071329] border ${
                      errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none`}
                    required
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-semibold">{errors.message}</p>}
                </div>

                {/* Impartiality Guarantee Note */}
                <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/60 flex items-start gap-2.5 text-[11px] text-amber-900 dark:text-amber-300 leading-relaxed">
                  <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Impartiality &amp; Confidentiality Guarantee:</strong> In accordance with ISO/IEC 17021-1, ISO/IEC 17025, and ISO/IEC 17065, all submissions are reviewed by an independent Complaints &amp; Appeals Committee free from conflict of interest.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
                  Submissions are dispatched directly to <span className="font-bold text-slate-800 dark:text-slate-200">info@iemacert.com</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-1 sm:flex-initial"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 flex-1 sm:flex-initial hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit to info@iemacert.com</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="py-6 px-2 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border-2 border-emerald-500/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5 max-w-md mx-auto">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                  Submission Generated &amp; Dispatched
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
                  Thank You, {fullName.split(' ')[0] || 'Client'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Your {submissionType} has been formatted and opened in your email client addressed to <strong>info@iemacert.com</strong>.
                </p>
              </div>

              {/* Reference ID card */}
              <div className="max-w-md mx-auto p-4 bg-slate-50 dark:bg-[#071329] rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Official Tracking Reference
                </div>
                <div className="flex items-center justify-center gap-2 font-mono text-base font-black text-amber-600 dark:text-amber-400">
                  <span>{generatedRefId}</span>
                  <button
                    onClick={handleCopySummary}
                    className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-600 dark:text-slate-300 transition-colors"
                    title="Copy Reference"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Please keep this reference for all communications with our Quality Directorate.
                </div>
              </div>

              {/* Next Steps Guide */}
              <div className="max-w-md mx-auto text-left p-4 bg-blue-50/70 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-900/60 space-y-2 text-xs text-blue-950 dark:text-blue-200">
                <div className="font-bold flex items-center gap-1.5 text-blue-800 dark:text-blue-300">
                  <FileText className="w-4 h-4" />
                  <span>Next Steps under ISO/IEC Conformity Standards</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                  <li>Formal written acknowledgement issued within <strong>2 business days</strong>.</li>
                  <li>Independent initial investigation completed within <strong>10 business days</strong>.</li>
                  <li>Impartial report and resolution communicated directly from the Quality Directorate.</li>
                </ul>
              </div>

              {/* Close Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:info@iemacert.com?subject=${encodeURIComponent(`[${submissionType.toUpperCase()}] Ref ${generatedRefId} - ${fullName}`)}&body=${encodeURIComponent(`Reference: ${generatedRefId}\nName: ${fullName}\nEmail: ${email}\n\n${message}`)}`}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email App Again</span>
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Strip */}
        <div className="p-3.5 bg-slate-100 dark:bg-[#071126] border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
          <span>IEMA Standards Limited · Lekki, Lagos, Nigeria · </span>
          <a 
            href="https://iema.iemacert.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-600 dark:text-amber-400 hover:underline font-semibold"
          >
            iema.iemacert.com
          </a>
        </div>
      </div>
    </div>
  );
};
