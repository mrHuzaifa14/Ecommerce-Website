import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

export function ProductCard({ product, onViewDetails }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.title}</h3>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating.rate}</span>
          <span className="ml-2 text-sm text-gray-500">({product.rating.count} reviews)</span>
        </div>
        <p className="mt-2 text-xl font-bold text-gray-900">${product.price}</p>
        <button
          onClick={() => onViewDetails(product)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          View Details
        </button>
      </div>
    </div>
  );
}