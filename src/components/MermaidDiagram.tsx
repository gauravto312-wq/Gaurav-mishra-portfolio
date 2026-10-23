import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, caption }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [renderError, setRenderError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'loose',
        fontFamily: 'Inter, system-ui, sans-serif',
        themeVariables: {
          darkMode: true,
          background: '#0E131F',
          primaryColor: '#1E293B',
          primaryTextColor: '#F3F4F6',
          primaryBorderColor: 'rgba(255, 255, 255, 0.15)',
          lineColor: '#10B981',
          secondaryColor: '#161D2D',
          tertiaryColor: '#0F172A',
        },
      });

      const uniqueId = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
      mermaid.render(uniqueId, chart)
        .then((result) => {
          if (isMounted) {
            setSvgContent(result.svg);
            setRenderError(false);
          }
        })
        .catch((err) => {
          console.error('Mermaid render error:', err);
          if (isMounted) {
            setRenderError(true);
          }
        });
    } catch (e) {
      console.error('Mermaid init error:', e);
      if (isMounted) {
        setRenderError(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-[#0E131F] p-4 sm:p-6 overflow-hidden">
      {renderError ? (
        <div className="p-4 text-xs font-mono text-slate-400 bg-black/30 rounded border border-white/5 overflow-x-auto whitespace-pre">
          {chart}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="w-full overflow-x-auto flex justify-center py-2 [&>svg]:max-w-full [&>svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
      {caption && (
        <p className="mt-3 text-center text-xs text-slate-400 font-mono tracking-tight border-t border-white/5 pt-2">
          {caption}
        </p>
      )}
    </div>
  );
};
