import React from 'react';
import { Product } from '../types';
import { getWhatsAppEnquiryUrl } from '../data/constants';
import { MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetail }) => {
  const isOutOfStock = !product.inStock || product.statusText === 'Out of Stock';
  const hasDealerPrice = product.dealerPrice !== null && product.dealerPrice !== undefined;
  const hasMrp = product.mrp !== null && product.mrp !== undefined;

  const whatsappUrl = getWhatsAppEnquiryUrl(product.name, product.quantity);

  return (
    <div className={`group bg-[#FDFCF9] rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
      isOutOfStock ? 'border-[#E0DCCF] opacity-75' : 'border-[#E0DCCF] hover:border-[#40916C]'
    }`}>
      {/* Top Image Container */}
      <div className="relative w-full h-48 sm:h-52 bg-[#F3F0E6] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide bg-[#FDFCF9]/95 text-[#1B4332] backdrop-blur-md shadow-xs border border-[#E0DCCF]">
            {product.category}
          </span>
        </div>

        {/* Out of stock badge or Stock indicator */}
        {isOutOfStock ? (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-extrabold tracking-wide bg-rose-600 text-white shadow-sm uppercase">
              <AlertCircle className="w-3 h-3" />
              Out of Stock
            </span>
          </div>
        ) : (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#1B4332]/90 text-[#F3F0E6] backdrop-blur-xs">
              <Sparkles className="w-2.5 h-2.5 text-[#40916C]" />
              Available
            </span>
          </div>
        )}

        {/* Quantity Overlay Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#1B4332]/85 text-[#F3F0E6] backdrop-blur-xs">
            Qty: {product.quantity}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Product Name */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1B4332] leading-snug group-hover:text-[#40916C] transition-colors">
            {product.name}
          </h3>

          {/* Description snippet */}
          {product.description && (
            <p className="text-xs text-[#5C635C] mt-1 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Price Section */}
        <div className="pt-3 border-t border-[#E0DCCF]">
          {hasDealerPrice || hasMrp ? (
            <div className="flex items-baseline justify-between bg-[#F3F0E6] p-2.5 rounded-xl border border-[#E0DCCF]">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8F8A]">
                  Dealer Price
                </span>
                <span className="text-base sm:text-lg font-extrabold text-[#1B4332]">
                  {hasDealerPrice ? `₹${product.dealerPrice}` : 'On enquiry'}
                </span>
              </div>

              {hasMrp && (
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8F8A]">
                    MRP
                  </span>
                  <span className="text-sm font-semibold text-[#8A8F8A] line-through">
                    ₹{product.mrp}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[#F3F0E6] border border-[#E0DCCF] rounded-xl p-2.5 text-center">
              <span className="text-xs font-semibold text-[#1B4332]">
                Price available on enquiry
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div>
          {isOutOfStock ? (
            <button
              disabled
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-rose-500 bg-[#F3F0E6] border border-[#E0DCCF] cursor-not-allowed text-center flex items-center justify-center gap-1.5 uppercase"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Currently Unavailable</span>
            </button>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1B4332] hover:bg-[#143828] active:scale-[0.98] shadow-xs transition-all duration-200 flex items-center justify-center gap-2"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire Now</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
