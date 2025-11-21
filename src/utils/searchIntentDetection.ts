/**
 * Search Intent Detection Utility
 * Determines if a search query is conversational and should trigger Compass
 */

/**
 * Detects if a search query is conversational and would benefit from Compass
 * @param query - The search query string
 * @returns true if the query appears conversational, false for simple product searches
 */
export function isConversationalQuery(query: string): boolean {
  if (!query || query.trim().length === 0) {
    return false;
  }

  const trimmedQuery = query.trim().toLowerCase();
  const wordCount = trimmedQuery.split(/\s+/).length;

  // Heuristic 1: Question words at the start
  const questionStarters = [
    'what',
    'where',
    'how',
    'why',
    'which',
    'can you',
    'could you',
    'would you',
    'do you have',
  ];
  const startsWithQuestion = questionStarters.some(starter =>
    trimmedQuery.startsWith(starter)
  );

  // Heuristic 2: Helper phrases indicating intent
  const helperPhrases = [
    'i need',
    'i want',
    'i\'m looking for',
    'looking for',
    'help me find',
    'help me',
    'find me',
    'show me',
    'i\'m restocking',
    'restocking',
    'curate',
    'assortment',
  ];
  const containsHelperPhrase = helperPhrases.some(phrase =>
    trimmedQuery.includes(phrase)
  );

  // Heuristic 3: Multi-product intent (conjunctions)
  const multiProductIndicators = [' and ', ' with ', ' or ', ' plus '];
  const hasMultiProductIntent = multiProductIndicators.some(indicator =>
    trimmedQuery.includes(indicator)
  );

  // Heuristic 4: Category combinations
  const categories = [
    'snack',
    'beverage',
    'drink',
    'soap',
    'bath',
    'candle',
    'decor',
    'gift',
    'amenity',
    'amenities',
    'item',
    'product',
    'goods',
  ];
  const categoryMatches = categories.filter(cat =>
    trimmedQuery.includes(cat)
  ).length;
  const hasMultipleCategories = categoryMatches >= 2;

  // Heuristic 5: Context indicators (places, occasions, use cases)
  const contextIndicators = [
    'hotel',
    'room',
    'guest',
    'shop',
    'store',
    'boutique',
    'cafe',
    'restaurant',
    'office',
    'event',
    'party',
    'wedding',
    'gift basket',
    'welcome',
    'tray',
  ];
  const hasContext = contextIndicators.some(indicator =>
    trimmedQuery.includes(indicator)
  );

  // Heuristic 6: Attribute descriptors (style, origin, quality)
  const attributeDescriptors = [
    'premium',
    'luxury',
    'local',
    'artisan',
    'organic',
    'sustainable',
    'eco-friendly',
    'handmade',
    'brooklyn',
    'nyc',
    'new york',
  ];
  const hasAttributes = attributeDescriptors.some(attr =>
    trimmedQuery.includes(attr)
  );

  // Decision logic: Query is conversational if:
  // 1. Starts with a question word, OR
  // 2. Contains helper phrase, OR
  // 3. Has 3+ words AND (has context OR has attributes OR has multi-product intent), OR
  // 4. Has multiple categories mentioned, OR
  // 5. Has multi-product intent AND has context

  if (startsWithQuestion) return true;
  if (containsHelperPhrase) return true;
  if (wordCount >= 3 && (hasContext || hasAttributes || hasMultiProductIntent))
    return true;
  if (hasMultipleCategories) return true;
  if (hasMultiProductIntent && hasContext) return true;

  return false;
}

/**
 * Extracts potential categories from a conversational query
 * @param query - The search query string
 * @returns Array of detected category names
 */
export function extractCategories(query: string): string[] {
  const trimmedQuery = query.trim().toLowerCase();
  const detectedCategories: string[] = [];

  const categoryMap: { [key: string]: string[] } = {
    Snacks: ['snack', 'snacks', 'chips', 'nuts', 'cookies', 'popcorn', 'candy'],
    Beverages: [
      'beverage',
      'beverages',
      'drink',
      'drinks',
      'coffee',
      'tea',
      'juice',
      'soda',
      'water',
    ],
    'Bath Products': [
      'soap',
      'soaps',
      'bath',
      'shampoo',
      'conditioner',
      'lotion',
      'body wash',
    ],
    Amenities: [
      'amenity',
      'amenities',
      'toiletries',
      'towel',
      'towels',
      'slipper',
      'slippers',
    ],
    Stationery: [
      'stationery',
      'pen',
      'pens',
      'pencil',
      'notepad',
      'notebook',
      'paper',
    ],
    Candles: ['candle', 'candles'],
    Decor: ['decor', 'decoration', 'decorations', 'pillow', 'cushion', 'art'],
  };

  for (const [category, keywords] of Object.entries(categoryMap)) {
    const hasMatch = keywords.some(keyword => trimmedQuery.includes(keyword));
    if (hasMatch) {
      detectedCategories.push(category);
    }
  }

  return detectedCategories;
}
