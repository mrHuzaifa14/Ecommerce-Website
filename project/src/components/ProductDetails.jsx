import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';

export function ProductDetails({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-lg">{product.rating.rate}</span>
                <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
              </div>
              
              <p className="mt-4 text-3xl font-bold text-gray-900">${product.price}</p>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Description</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Category</h3>
                <span className="mt-2 inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {product.category}
                </span>
              </div>
              
              <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}