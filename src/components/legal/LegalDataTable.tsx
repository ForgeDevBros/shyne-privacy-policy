import React from 'react';
import type { DataTable } from '../../types/legal';

interface LegalDataTableProps {
  table: DataTable;
}

export const LegalDataTable: React.FC<LegalDataTableProps> = ({ table }) => {
  // Helper to find the value in a row by trying to match the header text
  // to the object keys (e.g. "Data Type" might be "dataType" in the row object)
  const getVal = (row: any, header: string) => {
    // Exact match
    if (row[header] !== undefined) return row[header];
    
    // Specific fix for "Specific Data" -> "data" mapping in first table
    if (header === 'Specific Data' && row['data'] !== undefined) return row['data'];

    // Try camelCase (e.g. "Data Type" -> "dataType")
    const camelKey = header
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
      .replace(/[^a-zA-Z0-9]/g, '');
    if (row[camelKey] !== undefined) return row[camelKey];

    // Try lowercase no spaces
    const simpleKey = header.toLowerCase().replace(/\s+/g, '');
    if (row[simpleKey] !== undefined) return row[simpleKey];

    return undefined;
  };

  return (
    <div className="mx-6 my-6 overflow-hidden rounded-3xl border border-border-light shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-border-light">
              {table.headers.map((header, idx) => (
                <th key={idx} className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className={`border-b border-border-light/50 last:border-0 ${row.isNew ? 'bg-green-50/30' : ''}`}>
                {table.headers.map((header, colIdx) => {
                  const val = getVal(row, header);
                  return (
                    <td key={colIdx} className="px-4 py-4">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"/>
                            </svg>
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-stone-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 6 6 18M6 6l12 12"/>
                            </svg>
                          </div>
                        )
                      ) : (
                        <span className="text-xs text-text-secondary leading-relaxed">
                          {val || '-'}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
