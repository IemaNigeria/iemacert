import React, { useState } from 'react';
import { Download, Check } from 'lucide-react';
import { DOWNLOADABLE_RESOURCES } from '../data/mockData';
import { DownloadableResource } from '../types';
import { downloadIsoHandbookPdf } from '../utils/handbookDownloader';
import { SeoHead } from '../components/SeoHead';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lastDownloadedId, setLastDownloadedId] = useState<string | null>(null);

  const categories = ['All', 'Handbook', 'Standard Guidelines', 'Impartiality & Ethics', 'Catalogues', 'Checklists'];

  const filteredDocs = selectedCategory === 'All' 
    ? DOWNLOADABLE_RESOURCES 
    : DOWNLOADABLE_RESOURCES.filter(doc => doc.category === selectedCategory);

  const handleDownload = async (doc: DownloadableResource) => {
    if (doc.category === 'Handbook' || doc.id.includes('handbook')) {
      await downloadIsoHandbookPdf('Certificate-Handbook.pdf');
    } else {
      const content = `=====================================================
IEMA STANDARDS LIMITED
DOCUMENT: ${doc.title.toUpperCase()}
CATEGORY: ${doc.category} | FORMAT: ${doc.fileFormat}
ACCREDITATION: EGAC (CAB 12203) / IAF MLA Signatory
SOURCE: https://iemacert.com/
=====================================================

DESCRIPTION:
${doc.description}

OFFICIAL NOTICE:
This document is issued by IEMA Standards Limited as an official reference standard.
For complete audit protocols and compliance certifications, contact:
Email: info@iemacert.com | cert@iemacert.com
Website: https://iemacert.com
=====================================================`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${doc.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    setLastDownloadedId(doc.id);
    setTimeout(() => {
      setLastDownloadedId(null);
    }, 4000);
  };

  return (
    <div className="space-y-12 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* SEO Head */}
      <SeoHead
        title="Download ISO Handbooks & Guides | IEMA Standards"
        description="Download official ISO certification handbooks, audit checklists, standard transition guidelines, and policy templates from IEMA Standards Limited."
        canonicalPath="resources"
        keywords={[
          'download iso handbook pdf',
          'iso audit checklist template',
          'iso 9001 guidelines download',
          'iso certification resources nigeria'
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600" 
            alt="Handbooks & Technical Resources" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-800">
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Official Knowledge Repository</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Resources, Handbooks & Guidelines
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
            Download official ISO certification guidelines, impartiality policy declarations, material testing catalogues, and self-assessment gap analysis checklists.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#DC2626] text-white shadow-sm' 
                    : 'bg-white dark:bg-[#0E2A47] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#12365B] border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => {
            const isJustDownloaded = lastDownloadedId === doc.id;
            return (
              <div key={doc.id} className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 text-slate-900 dark:text-white">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold px-2 py-0.5 rounded">{doc.fileFormat} • {doc.fileSize}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{doc.category}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug font-serif">{doc.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{doc.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Updated: {doc.updatedDate}</span>
                  <button
                    onClick={() => handleDownload(doc)}
                    className={`${
                      isJustDownloaded 
                        ? 'bg-emerald-600 hover:bg-emerald-700' 
                        : 'bg-[#DC2626] hover:bg-red-700'
                    } text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 shadow cursor-pointer active:scale-95`}
                  >
                    {isJustDownloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-white" />
                        <span>Download</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
};
