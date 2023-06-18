import React from 'react';

import DataTable from '@/components/helper/DataTable';

const data = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 28 },
  { id: 3, name: 'Charlie', age: 34 },
  { id: 4, name: 'David', age: 24 },
];

export default function UserList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Responsive DataTable</h1>
      <DataTable data={data} />
    </div>
  );
}
