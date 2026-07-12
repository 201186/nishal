import {
  BookOpen,
  Brain,
  FileText,
  FileArchive,
} from "lucide-react";

export const dashboardItems = [
  {
    title: "Notes",
    description: "Chapter-wise Notes",
    slug: "notes",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "MCQ Tests",
    description: "Practice Unlimited MCQs",
    slug: "mcq",
    icon: Brain,
    color: "purple",
  },
  {
    title: "Previous Papers",
    description: "Old Question Papers",
    slug: "papers",
    icon: FileText,
    color: "orange",
  },
  {
    title: "PDF Materials",
    description: "Download PDF Study Material",
    slug: "pdf",
    icon: FileArchive,
    color: "green",
  },
] as const;