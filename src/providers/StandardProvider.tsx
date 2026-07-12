"use client";

import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  Standard,
  StandardContextType,
} from "@/types/standard";

export const StandardContext =
  createContext<StandardContextType | null>(null);

interface StandardProviderProps {
  children: ReactNode;
}

export default function StandardProvider({
  children,
}: StandardProviderProps) {
  const [selectedStandard, setSelectedStandardState] =
    useState<Standard | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("selectedStandard");

    if (saved) {
      setSelectedStandardState(Number(saved) as Standard);
    }
  }, []);

  const setSelectedStandard = (standard: Standard) => {
    setSelectedStandardState(standard);
    localStorage.setItem("selectedStandard", standard.toString());
  };

  return (
    <StandardContext.Provider
      value={{
        selectedStandard,
        setSelectedStandard,
      }}
    >
      {children}
    </StandardContext.Provider>
  );
}