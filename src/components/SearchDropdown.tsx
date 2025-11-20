import React, { useImperativeHandle, forwardRef } from 'react';
import { useCompass } from '../contexts/CompassContext';
import { isConversationalQuery } from '../utils/searchIntentDetection';

interface SearchDropdownProps {
  searchQuery: string;
  onClose: () => void;
}

export interface SearchDropdownHandle {
  selectHighlighted: () => void;
}

const SearchDropdown = forwardRef<SearchDropdownHandle, SearchDropdownProps>(
  ({ searchQuery, onClose }, ref) => {
    const { openPanel } = useCompass();
    const isCompassQuery = isConversationalQuery(searchQuery);

    const handleCompassSearch = () => {
      // Open compass panel with 'search' entry point and pass the query
      openPanel('search', searchQuery);

      // Close the search dropdown
      onClose();
    };

    // Expose method to parent for Enter key handling
    useImperativeHandle(ref, () => ({
      selectHighlighted: () => {
        if (isCompassQuery) {
          handleCompassSearch();
        }
      },
    }));

  // Hotel operator focused suggestions
  const getAutocompleteSuggestions = (query: string) => {
    // Don't show autocomplete when empty - we show example phrases instead
    if (!query.trim()) {
      return [];
    }

    // Return contextual suggestions based on what they've fully typed
    const lowerQuery = query.toLowerCase();

    // Check for complete words using word boundaries
    if (lowerQuery.includes('assortment')) {
      return [
        'Assortment of local NYC snacks for hotels',
        'Assortment of premium bath products',
        'Assortment of artisanal chocolates and treats',
        'Assortment of NYC branded items',
      ];
    }

    if (lowerQuery.includes('hotel')) {
      return [
        'Hotel welcome tray items',
        'Hotel amenities - local NYC brands',
        'Hotel gift baskets - premium options',
        'Hotel bath products - artisanal',
      ];
    }

    if (lowerQuery.includes('nyc') || lowerQuery.includes('new york') || lowerQuery.includes('local')) {
      return [
        'NYC local artisan products',
        'New York themed gift items',
        'Local Brooklyn snacks and treats',
        'NYC handmade bath products',
      ];
    }

    if (lowerQuery.includes('welcome') || lowerQuery.includes('tray') || lowerQuery.includes('gift')) {
      return [
        'Welcome tray assortment for premium hotels',
        'Gift basket items under 2 lbs',
        'Tray-sized artisanal products',
        'Welcome amenity packages',
      ];
    }

    // While typing, show no suggestions until they complete a meaningful word
    return [];
  };

  const autocompleteSuggestions = getAutocompleteSuggestions(searchQuery);

  const examplePhrases = [
    'Home decor with no import duties',
    'Mother\'s Day gifts under $100',
    'I need candles under $20',
    'Artisanal chocolates made in the USA',
  ];

  const recentSearches = [
    'rakka chocolate',
    'games',
    'dried oranges',
    'cocktail shaker',
    'marg glass',
    'cocktail drink',
    'game night',
    'dinner set',
    'utensils',
    'glassware',
  ];

  const trendingSearches = [
    'Energy drink',
    'Perfume and colognes',
    'Liquidation pallets',
    'Hen on nest',
    'Advent calendar',
    'Uv dtf wraps',
    'Wax warmer',
  ];

    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-[#dfe0e1] z-50">
        <div className="py-2">
        {/* Try searching with real phrases - show when empty */}
        {!searchQuery.trim() && (
          <div className="mb-3">
            <h3 className="text-sm font-medium text-[#333333] px-4 py-2">
              Try searching with real phrases
            </h3>
            <div>
              {examplePhrases.map((phrase, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Could populate the search or trigger Compass
                  }}
                  className="flex items-center gap-3 w-full text-left px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#757575] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  <span className="text-sm text-[#333333]">{phrase}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* When typing - show autocomplete suggestions OR generic search option */}
        {searchQuery.trim() && (
          <div>
            {/* Autocomplete Suggestions - show when matches found */}
            {autocompleteSuggestions.length > 0 && (
              <>
                {autocompleteSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      // Could trigger a regular search or update the input
                    }}
                    className="flex items-center gap-3 w-full text-left px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#757575] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <span className="text-sm text-[#333333]">{suggestion}</span>
                  </button>
                ))}
              </>
            )}

            {/* Generic search option - only show when NOT a compass query */}
            {!isCompassQuery && (
              <button
                onClick={() => {
                  // Could trigger a regular search
                }}
                className="flex items-center gap-3 w-full text-left px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors"
              >
                <svg className="w-4 h-4 text-[#757575] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className="text-sm text-[#333333]">Search for "{searchQuery}"</span>
              </button>
            )}

            {/* Compass option - show at bottom when conversational query */}
            {isCompassQuery && (
              <button
                onClick={handleCompassSearch}
                className="flex items-center gap-3 w-full text-left px-4 py-2.5 bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors group"
              >
                <div className="relative w-4 h-4 flex-shrink-0">
                  {/* Compass circle (non-rotating) */}
                  <svg
                    className="absolute inset-0 w-4 h-4 text-[#4A5FFF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                  </svg>

                  {/* Compass needle (rotating) */}
                  <svg
                    className="absolute inset-0 w-4 h-4 text-[#4A5FFF] animate-spin-slow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    style={{ animationDuration: '8s' }}
                  >
                    <path d="M16 8L12 12L8 16L12 12L16 8Z" fill="currentColor" strokeWidth="1" />
                  </svg>

                  {/* Shimmer overlay on icon */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </div>
                </div>

                <span className="text-sm text-[#333333] flex-1">Ask Compass about: "{searchQuery}"</span>
                <span className="text-xs text-[#757575] font-medium px-2 py-1 bg-white rounded border border-[#dfe0e1]">ENTER</span>
              </button>
            )}
          </div>
        )}

        {/* Recent Searches - only show when search is empty */}
        {!searchQuery.trim() && recentSearches.length > 0 && (
          <div className="mb-3">
            <h3 className="text-sm font-medium text-[#333333] px-4 py-2">
              Recent searches
            </h3>
            <div className="flex flex-wrap gap-2 px-4">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#f5f5f5] rounded-full text-xs text-[#333333] hover:bg-[#e5e5e5] transition-colors"
                >
                  <span>{search}</span>
                  <svg className="w-3 h-3 text-[#757575]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Trending Searches */}
        {!searchQuery.trim() && (
          <div className="mb-3">
            <h3 className="text-sm font-medium text-[#333333] px-4 py-2">
              Trending searches
            </h3>
            <div className="flex flex-wrap gap-2 px-4">
              {trendingSearches.map((trend, index) => (
                <button
                  key={index}
                  className="px-3 py-1.5 bg-[#f5f5f5] rounded-full text-xs text-[#333333] hover:bg-[#e5e5e5] transition-colors"
                >
                  {trend}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});


SearchDropdown.displayName = 'SearchDropdown';

export default SearchDropdown;
