import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { BUSINESS_INFO, getWhatsAppEnquiryUrl } from '../data/constants';
import { ProductCard } from './ProductCard';
import { Search, X, Filter, Info, MessageCircle, RefreshCw } from 'lucide-react';

export const ProductCatalogue: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || product.categoryId === selectedCategory;

      // Search match: name, category, or quantity
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.quantity.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <section id="catalogue" className="py-16 sm:py-24 bg-[#F9F7F2] relative border-b border-[#E0DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Catalogue Preview</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4332] tracking-tight">
            Our Organic Foods
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5C635C]">
            Explore our selected organic and natural food products.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#E0DCCF] mb-8 space-y-4">
          
          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8A8F8A]">
              <Search className="w-5 h-5 text-[#1B4332]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search organic products by name, category, or quantity (e.g. Honey, Rice, 1kg)..."
              className="w-full pl-11 pr-10 py-3.5 bg-[#F9F7F2] border border-[#E0DCCF] rounded-full text-[#2D332D] placeholder-[#8A8F8A] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#40916C] focus:bg-white transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8A8F8A] hover:text-[#2D332D]"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filter Horizontal Scrollbar / Grid */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C635C] flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#1B4332]" />
                Filter by Category:
              </span>
              <span className="text-xs text-[#8A8F8A] font-medium">
                Showing {filteredProducts.length} of {PRODUCTS.length} items
              </span>
            </div>

            {/* Scrollable pill container */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-2 px-2 scroll-smooth">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#1B4332] text-white shadow-sm scale-[1.02]'
                        : 'bg-[#F3F0E6] hover:bg-[#E0DCCF] text-[#5C635C] hover:text-[#1B4332] border border-[#E0DCCF]'
                    }`}
                  >
                    {cat.shortName}
                    {cat.id !== 'all' && (
                      <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-[#143828] text-white' : 'bg-[#E0DCCF] text-[#5C635C]'
                      }`}>
                        3
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Category Header Title when filtered */}
        {selectedCategory !== 'all' && activeCategoryObj && (
          <div className="mb-6 flex items-center justify-between bg-[#FDFCF9] border border-[#E0DCCF] p-4 rounded-xl">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1B4332]">
                {activeCategoryObj.name}
              </h3>
              <p className="text-xs text-[#5C635C] mt-0.5">
                Showing selected items from our {activeCategoryObj.name} collection
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-semibold text-[#40916C] hover:text-[#1B4332] underline cursor-pointer"
            >
              View All Categories
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-[#FDFCF9] rounded-3xl p-10 sm:p-14 text-center border border-[#E0DCCF] max-w-md mx-auto shadow-xs">
            <div className="w-14 h-14 bg-[#F3F0E6] text-[#8A8F8A] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1B4332]">
              No products found
            </h3>
            <p className="text-sm text-[#5C635C] mt-2">
              We couldn't find any products matching "{searchQuery}". Try a different keyword or reset filters.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2.5 rounded-xl bg-[#F3F0E6] hover:bg-[#E0DCCF] text-[#1B4332] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#E0DCCF]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Price Disclaimer Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#FDFCF9] border-l-4 border-[#40916C] border-y border-r border-[#E0DCCF] flex items-start gap-3 max-w-3xl mx-auto text-[#2D332D]">
          <Info className="w-5 h-5 text-[#40916C] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed text-[#5C635C]">
            <span className="font-bold text-[#1B4332]">Important Notice: </span>
            {BUSINESS_INFO.disclaimer}
          </div>
        </div>

      </div>
    </section>
  );
};
