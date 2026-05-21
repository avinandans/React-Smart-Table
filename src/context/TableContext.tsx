import { generateData } from "../utils/generateData";
import { useCallback, useState, createContext } from "react";
import type { Employee } from "../utils/generateData";
import type { ReactNode } from "react";

export interface TableContextType {
  data: Employee[];
  setData: (data: Employee[]) => void;
  updateRow: (id: number, updatedRow: Partial<Employee>) => void;
}
interface TableProviderProps {
  children: ReactNode;
}

export const TableContext = createContext<TableContextType | null>(null);

export const TableProvider = ({ children }: TableProviderProps) => {
  const [data, setData] = useState<Employee[]>(generateData(10000));

  const updateRow = useCallback((id: number, updatedRow: Partial<Employee>) => {
    setData((prev) => {
      return prev.map((row) => {
        return row.id === id ? { ...row, ...updatedRow } : row;
      });
    });
  }, []);

  return (
    <TableContext.Provider
      value={{
        data,
        setData,
        updateRow,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
