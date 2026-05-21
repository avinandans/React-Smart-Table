import { generateData } from "../utils/generateData";
import { useMemo } from "react";

export function useMockData() {
  const data = useMemo(() => {
    return generateData(10000);
  }, []);

  return data;
}
