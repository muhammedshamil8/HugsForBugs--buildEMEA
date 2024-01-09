import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
  const loading = false;
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
    { id: 6, name: 'Category 6' },
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
    { id: 6, name: 'Category 6' },
  ];

  return (
    <div className="bg-blue-300/20 h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          <div className="text-center p-2">
            Loading...
          </div>
        ) : (
          categories.map((category) => (
            <div key={category.id} className="bg-white/10 bg-opacity-70 border rounded p-8 transition duration-300 transform hover:-translate-y-3 backdrop-blur-sm">
              <div className="text-xl font-bold mb-2">{category.name}</div>
              <div className="flex justify-between">
                <div className="text-gray-500">ID: {category.id}</div>
                <Link
                  className="btn-edit bg-blue-500 text-white py-1 px-2 rounded hover:scale-95 transition duration-300"
                  to={`/category/${category.id}`}
                >
                  View
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Category;
