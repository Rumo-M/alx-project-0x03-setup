// interface/index.ts

// From components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action: () => void;
}

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// If you had a Layout-specific interface (optional)
export interface LayoutProps {
  children: React.ReactNode;
}
