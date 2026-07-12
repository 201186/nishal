// ==========================================
// Game Types
// ==========================================

export type GameType =
  | "mcq"
  | "match"
  | "memory"
  | "drag-drop"
  | "puzzle"
  | "sorting"
  | "flashcard";

// ==========================================
// Game
// ==========================================

export interface Game {
  id: string;
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  type: GameType;
  isFeatured?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

// ==========================================
// Subject
// ==========================================

export interface Subject {
  id: string;
  title: string;
  slug: string;
  icon?: string;
  games: Game[];
}

// ==========================================
// Standard
// ==========================================

export interface Standard {
  id: string;
  title: string;
  slug: string;
  subjects: Subject[];
}