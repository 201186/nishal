import {
  BookOpen,
  ClipboardCheck,
  FileText,
  Download,
  Newspaper,
  Trophy,
} from "lucide-react";

export const quickAccessItems = [
  {
    title: "Notes",
    description: "Chapter-wise Notes",
    href: "/notes",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "MCQ Tests",
    description: "Practice Questions",
    href: "/mcq-tests",
    icon: ClipboardCheck,
    color: "green",
  },
  {
    title: "Previous Papers",
    description: "Exam Papers",
    href: "/previous-papers",
    icon: FileText,
    color: "orange",
  },
  {
    title: "PDF Materials",
    description: "Study PDFs",
    href: "/pdf",
    icon: Download,
    color: "red",
  },
  {
    title: "Current Affairs",
    description: "Daily Updates",
    href: "/current-affairs",
    icon: Newspaper,
    color: "purple",
  },
  {
    title: "Scholarships",
    description: "Latest Opportunities",
    href: "/scholarships",
    icon: Trophy,
    color: "yellow",
  },
];