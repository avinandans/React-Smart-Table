import { TableContext } from "../context/TableContext";
import { generateData } from "../utils/generateData";
import { useContext, useMemo } from "react";

export function useMockData() {
  const data = useMemo(() => {
    return generateData(10000);
  }, []);

  return data;
}

export function useTableContext() {
  const context = useContext(TableContext);

  if (context == null) {
    throw new Error("useTableContext must be used within TableProvider");
  }

  return context;
}
