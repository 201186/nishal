"use client";

import { useContext } from "react";
import { StandardContext } from "@/providers/StandardProvider";

export function useStandard() {
  const context = useContext(StandardContext);

  if (!context) {
    throw new Error(
      "useStandard must be used inside StandardProvider"
    );
  }

  return context;
}