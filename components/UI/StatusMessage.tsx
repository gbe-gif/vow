import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

interface StatusMessageProps {
  title?: string;
  content: React.ReactNode;
  type?: 'system' | 'message' | 'alert';
  ascii?: string;
  subtext?: string;
  className?: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ 
  title = "상태창", 
  content, 
  type = 'system', 
  ascii, 
  subtext,
  className = ""
}) => {
  return (
    <div className={`glass-panel rounded-lg p-4 border-l-4 border-constellation-accent shadow-[0_0_15px_rgba(59,130,246,0.15)] max-w-2xl w-full my-4 ${className}`}>
      <div className="flex items-center gap-2 mb-2 text-constellation-accent font-bold font-mono text-sm tracking-widest">
        <Sparkles size={16} className="animate-pulse" />
        <span>⚡{title}⚡</span>
      </div>
      
      <div className="text-white font-medium leading-relaxed">
        {content}
      </div>

      {subtext && (
        <div className="mt-1 text-gray-400 text-sm pl-4 border-l border-gray-700">
          ↳ {subtext}
        </div>
      )}

      {ascii && (
        <div className="mt-4 p-3 bg-black/40 rounded border border-white/5 text-constellation-accent ascii-art text-xs sm:text-sm overflow-x-auto">
          {ascii}
        </div>
      )}
    </div>
  );
};