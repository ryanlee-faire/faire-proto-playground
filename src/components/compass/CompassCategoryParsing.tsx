import React from 'react';

interface CompassCategoryParsingProps {
  categories: string[];
  isLoading?: boolean;
}

export default function CompassCategoryParsing({ categories, isLoading = false }: CompassCategoryParsingProps) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 text-sm text-[#757575] mb-3">
        {isLoading && (
          <div className="flex gap-1 mr-1">
            <span className="w-1.5 h-1.5 bg-[#757575] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-[#757575] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-[#757575] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        )}
        <span>Searching across:</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <div
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isLoading
                  ? 'bg-[#f5f5f5] text-[#757575] border border-[#dfe0e1]'
                  : 'bg-[#333333] text-white'
              }`}
              style={{
                animation: isLoading ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
              }}
            >
              {category}
            </div>
            {index < categories.length - 1 && (
              <span className="text-[#757575]">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
