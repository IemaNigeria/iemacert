import React, { useState } from 'react';
import { 
  GraduationCap, Award, CheckCircle2, Clock, Calendar, 
  ArrowRight, Search, Filter, BookOpen, Users, Check, 
  Sparkles, ShieldCheck, ChevronDown, ChevronUp, MapPin, 
  Video, DollarSign, Download, HelpCircle, ExternalLink
} from 'lucide-react';
import { TRAINING_COURSES } from '../data/mockData';
import { TrainingCourse } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface TrainingPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(TRAINING_COURSES[0]?.id || null);

  const categories = [
    'All',
    'Lead Auditor',
    'Internal Auditor',
    'Awareness & Implementation',
    'Technical & Safety'
  ];

  const filteredCourses = TRAINING_COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.targetAudience.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleCourseExpand = (id: string) => {
    setExpandedCourseId(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-12 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* SEO Head */}
      <SeoHead
        title="ISO Lead Auditor Training | IEMA Standards"
        description="Accredited ISO Lead Auditor & Internal Auditor training courses in Lagos, Abuja & online. Gain internationally recognized CQI/IRCA aligned certification."
        canonicalPath="training"
        keywords={[
          'iso lead auditor training nigeria',
          'iso 9001 lead auditor course lagos',
          'iso 45001 lead auditor certification abuja',
          'iso 14001 internal auditor course',
          'iso 27001 lead implementer training nigeria'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Training Courses', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600" 
            alt="ISO Lead Auditor Training" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>EGAC Accredited & IRCA/Exemplar Global Aligned Training Programs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            ISO Lead Auditor & Professional Technical Training
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
            Advance your professional career and empower your workforce with internationally recognized ISO Lead Auditor certifications, internal auditor masterclasses, and hands-on lifting safety workshops delivered by practicing senior lead auditors in Lagos and via live virtual classrooms worldwide.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-amber-400 text-lg">5,200+</div>
              <div className="text-slate-400">Graduates Certified</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-emerald-400 text-lg">98.4%</div>
              <div className="text-slate-400">Exam Pass Rate</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-blue-400 text-lg">IRCA & EGAC</div>
              <div className="text-slate-400">Accredited Curricula</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="font-extrabold text-purple-400 text-lg">Monthly</div>
              <div className="text-slate-400">Open Enrollments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search & Filter Toolbar */}
        <div className="bg-white dark:bg-[#0B1E38] p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 text-slate-900 dark:text-white transition-colors">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ISO 9001, Lead Auditor, Safety..."
                className="w-full bg-slate-50 dark:bg-[#070F2B] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white pl-10 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:border-amber-400 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'bg-slate-100 dark:bg-[#070F2B] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-6">
          {filteredCourses.length === 0 ? (
            <div className="bg-white dark:bg-[#0B1E38] p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <HelpCircle className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-serif">No courses match your filter criteria</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Try changing your search term or select "All" categories.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="bg-amber-500 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredCourses.map((course) => {
              const isExpanded = expandedCourseId === course.id;

              return (
                <div 
                  key={course.id}
                  className={`bg-white dark:bg-[#0B1E38] rounded-2xl border transition-all overflow-hidden ${
                    isExpanded ? 'border-amber-500 shadow-xl' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                  }`}
                >
                  {/* Summary Bar */}
                  <div 
                    onClick={() => toggleCourseExpand(course.id)}
                    className="p-6 sm:p-7 cursor-pointer flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-black bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 px-2.5 py-0.5 rounded border border-amber-300 dark:border-amber-500/40">
                          {course.code}
                        </span>
                        <span className="text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                          {course.category}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {course.duration}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
                        {course.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                        {course.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
                      <a
                        href="https://crmops.iemacert.com/request-quote.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#DC2626] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow"
                      >
                        <span>Enroll Now</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </a>

                      <button
                        onClick={() => toggleCourseExpand(course.id)}
                        className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 transition-colors"
                        aria-label="Toggle Syllabus"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-600 dark:text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detailed Syllabus & Information */}
                  {isExpanded && (
                    <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070F2B] p-6 sm:p-8 space-y-8 animate-fadeIn text-slate-900 dark:text-white">
                      
                      {/* Comprehensive Course Overview */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-widest flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <span>Course Overview & Learning Objectives</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed bg-white dark:bg-[#0B1E38] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                          {course.fullOverview}
                        </p>
                      </div>

                      {/* 2-Column Grid: Learning Outcomes & Target Audience */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Learning Outcomes */}
                        <div className="bg-white dark:bg-[#0B1E38] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                          <h4 className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Key Learning Outcomes</span>
                          </h4>
                          <ul className="space-y-2">
                            {course.learningOutcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Target Audience & Prerequisites */}
                        <div className="space-y-4">
                          <div className="bg-white dark:bg-[#0B1E38] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                            <h4 className="text-xs font-extrabold text-blue-700 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              <span>Who Should Attend?</span>
                            </h4>
                            <ul className="space-y-1.5">
                              {course.targetAudience.map((aud, idx) => (
                                <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                  <span>{aud}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-white dark:bg-[#0B1E38] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                            <h5 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Entry Prerequisites:</h5>
                            <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                              {course.prerequisites.map((p, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>

                      {/* Course Modules Breakdown */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-widest flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <span>Detailed Modular Syllabus</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {course.modules.map((m) => (
                            <div key={m.moduleNumber} className="bg-white dark:bg-[#0B1E38] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                                  {m.moduleNumber}
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white text-xs leading-snug">{m.title}</span>
                              </div>
                              <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400 pl-8">
                                {m.topics.map((t, tIdx) => (
                                  <li key={tIdx}>– {t}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Delivery Mode & Schedules & Fees */}
                      <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-xs font-bold text-slate-900 dark:text-white">Awarded Credential:</span>
                            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                              {course.cert}
                            </span>
                          </div>

                          <div className="text-xs text-slate-700 dark:text-slate-300">
                            <span className="font-bold text-slate-500 dark:text-slate-400">Delivery Modes: </span>
                            {course.mode}
                          </div>

                          {/* Intake Schedule Tags */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {course.schedule.map((sch, schIdx) => (
                              <div key={schIdx} className="bg-slate-50 dark:bg-[#070F2B] p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                                <div>
                                  <div className="font-bold text-slate-900 dark:text-white">{sch.intake}</div>
                                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{sch.format} • {sch.feeNGN} / {sch.feeUSD}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
                          <button
                            onClick={() => onNavigate('contact', { subject: `Inquiry for ${course.title}` })}
                            className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors border border-slate-300 dark:border-slate-700 text-center"
                          >
                            Inquire for Cohort Dates
                          </button>
                          <a
                            href="https://crmops.iemacert.com/request-quote.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#DC2626] hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-xs font-extrabold transition-all shadow-md text-center flex items-center justify-center gap-2"
                          >
                            <span>Enroll in Course</span>
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Corporate In-House Custom Training Callout */}
        <div className="p-8 sm:p-10 bg-slate-100 dark:bg-gradient-to-r dark:from-[#0B1E38] dark:via-[#0E2A47] dark:to-[#0B1E38] rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-slate-900 dark:text-white transition-colors">
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest">Enterprise & Workforce Upskilling</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">Custom In-House Corporate Training</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              We deliver bespoke on-site ISO internal auditor academies, QHSE awareness workshops, and lifting technical training programs tailored directly to your organization’s operational procedures and plant facilities across Nigeria and West Africa.
            </p>
          </div>
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded-xl font-black text-xs shrink-0 transition-all shadow-lg flex items-center gap-2"
          >
            <span>Request In-House Training Proposal</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>
        </div>

      </section>

    </div>
  );
};
