import React from 'react';
import { CATEGORIES } from '../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CategoriesOverviewProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const CategoriesOverview: React.FC<CategoriesOverviewProps> = ({ onSelectCategory }) => {
  // Take top 8 popular categories for visual showcase
  const showcaseCategories = CATEGORIES.filter((c) => c.id !== 'all').slice(0, 8);

  const handleCategoryClick = (id: string) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    }
    const elem = document.getElementById('catalogue');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FDFCF9] border-b border-[#E0DCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F0E6] text-[#1B4332] border border-[#E0DCCF] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#40916C]" />
              <span>Explore Variety</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B4332] tracking-tight">
              Featured Food Categories
            </h2>
            <p className="text-sm text-[#5C635C] mt-1">
              Select any category to view our curated organic products
            </p>
          </div>

          <a
            href="#catalogue"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#40916C] hover:text-[#1B4332] transition-colors self-start md:self-auto"
          >
            <span>View All 15 Categories</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {showcaseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group relative rounded-2xl overflow-hidden text-left border border-[#E0DCCF] shadow-xs hover:shadow-md transition-all duration-300 bg-[#F3F0E6] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
            >
              {/* Image background */}
              <div className="h-32 sm:h-36 w-full relative overflow-hidden bg-[#F3F0E6]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/40 to-transparent" />
                
                {/* Category title overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-sm sm:text-base leading-tight drop-shadow-sm">
                    {category.name}
                  </h3>
                  <span className="text-[11px] text-[#E0DCCF] font-medium mt-0.5 inline-block">
                    3 Products • Enquire
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
