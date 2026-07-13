export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "MCQ Tests",
    href: "/mcq-tests",
  },
  {
    label: "Learning",
    href: "/learning",
  },
  {
    label: "Games",
    href: "/games",
  },
];