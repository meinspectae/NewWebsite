interface SimpleTableProps {
  columns: string[];
  rows: string[][];
}

export function SimpleTable({ columns, rows }: SimpleTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-dark/10">
      <table className="w-full min-w-[480px] border-collapse text-left">
        <thead>
          <tr className="bg-off-white">
            {columns.map((col) => (
              <th
                key={col}
                className="border-b border-dark/10 px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wide text-dark/50"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-dark/8 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[13.5px] leading-relaxed text-grey">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
