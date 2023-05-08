import type { FC } from 'react';
import React from 'react';

interface Data {
  [key: string]: any;
}

interface DataTableProps {
  data: Data[];
}

const DataTable: FC<DataTableProps> = ({ data }) => {
  const headers = data[0] && Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200 whitespace-nowrap bg-white">
        <thead className="bg-gray-50">
          <tr>
            {headers?.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id || row[headers?.[0] ?? '']}>
              {headers?.map((header) => (
                <td
                  key={`${row.id || row[headers?.[0] ?? '']}-${header}`}
                  className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
