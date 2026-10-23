import React, { useEffect, useState } from 'react';

interface BackendStatusIndicatorProps {
  healthEndpoint?: string;
  hasHealthEndpoint?: boolean;
}

export const BackendStatusIndicator: React.FC<BackendStatusIndicatorProps> = ({
  healthEndpoint,
  hasHealthEndpoint = false,
}) => {
  const [status, setStatus] = useState<'idle' | 'checking' | 'online' | 'unavailable'>('idle');

  useEffect(() => {
    if (!hasHealthEndpoint || !healthEndpoint) {
      return;
    }

    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 6000); // 6s timeout

    setStatus('checking');

    fetch(healthEndpoint, {
      method: 'GET',
      signal: controller.signal,
      headers: { Accept: 'application/json, text/plain, */*' },
    })
      .then((res) => {
        if (!isMounted) return;
        if (res.ok) {
          setStatus('online');
        } else {
          setStatus('unavailable');
        }
      })
      .catch(() => {
        if (isMounted) {
          setStatus('unavailable');
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
      });

    return () => {
      isMounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [healthEndpoint, hasHealthEndpoint]);

  // If no public health check endpoint is exposed in the backend source code
  if (!hasHealthEndpoint) {
    return (
      <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">Deployment Status:</span>
        <span 
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/60 text-slate-300 border border-slate-700/60 select-none"
          title="Deployment configured in cloud container environment. Source audit verified no public unauthenticated health endpoint is exposed."
        >
          <span className="w-2 h-2 rounded-full bg-slate-400" />
          <span>Deployment Configured</span>
        </span>
      </div>
    );
  }

  // Live status check display
  return (
    <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-400">Live Status:</span>
      {status === 'checking' && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40 select-none">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Checking Status…</span>
        </span>
      )}
      {status === 'online' && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 select-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Backend Online</span>
        </span>
      )}
      {status === 'unavailable' && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 select-none">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Backend Unavailable</span>
        </span>
      )}
    </div>
  );
};
