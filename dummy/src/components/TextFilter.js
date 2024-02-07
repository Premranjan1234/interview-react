import React from 'react';

// Custom text filter component
const TextFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <input
    className="py-2 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={`Filter ${column.Header}`}
    />
  );
};

export default TextFilter;
