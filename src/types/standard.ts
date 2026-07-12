export type Standard = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface StandardContextType {
  selectedStandard: Standard | null;
  setSelectedStandard: (standard: Standard) => void;
}