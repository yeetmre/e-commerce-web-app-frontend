'use client';

import { useState } from 'react';
import { Sliders, Grid, List } from 'lucide-react';

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  return (
    <div className="flex gap-6">
      {/* Filters Sidebar */}
      <div className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {['All', 'Electronics', 'Fashion', 'Home'].map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-20 p-1 border rounded"
                />
                <span>to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-20 p-1 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Other Filters */}
          <div>
            <h3 className="font-semibold mb-4">Other Filters</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>In Stock</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>On Sale</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        {/* Toolbar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            >
              <List size={20} />
            </button>
            <span className="text-gray-600">Showing 24 products</span>
          </div>
          <select className="border rounded p-2">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Products */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-6' : 'space-y-4'}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg shadow-sm overflow-hidden
                ${viewMode === 'list' ? 'flex' : ''}`}
            >
              <div className={`bg-gray-200 ${viewMode === 'grid' ? 'h-48' : 'h-40 w-40'}`}>
                {/* Product image will come here */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600 mb-2">$99.99</p>
                <p className="text-sm text-gray-500 mb-4">
                  Short product description goes here...
                </p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Previous</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">2</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">3</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}