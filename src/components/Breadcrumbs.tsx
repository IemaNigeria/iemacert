import React, { useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  page?: string;
  params?: Record<string, string>;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (page: string, params?: Record<string, string>) => void;
  className?: string;
  rightContent?: React.ReactNode;
}

const PRIMARY_DOMAIN = 'https://www.iemacert.com';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  onNavigate,
  className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
  rightContent
}) => {
  // Inject BreadcrumbList schema into head
  useEffect(() => {
    const scriptId = 'breadcrumbs-json-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const breadcrumbList = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${PRIMARY_DOMAIN}/`
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.page ? `${PRIMARY_DOMAIN}/${item.page}/` : window.location.href
      }))
    ];

    const schemaObj = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbList
    };

    script.textContent = JSON.stringify(schemaObj, null, 2);

    return () => {
      // Keep script or update on change
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className={`${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <li className="flex items-center">
            <button
              onClick={() => onNavigate?.('home')}
              className="flex items-center gap-1 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium p-1 -m-1"
              title="Go to Homepage"
            >
              <Home className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </button>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1 || item.isCurrent;
            return (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
                {isLast ? (
                  <span 
                    className="font-bold text-slate-900 dark:text-white truncate max-w-[220px] sm:max-w-xs"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : item.page ? (
                  <button
                    onClick={() => onNavigate?.(item.page!, item.params)}
                    className="hover:text-amber-600 dark:hover:text-amber-400 hover:underline transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-slate-600 dark:text-slate-300 truncate">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {rightContent && (
          <div className="flex items-center gap-3 text-xs">
            {rightContent}
          </div>
        )}
      </div>
    </nav>
  );
};
