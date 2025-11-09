import { ReactNode } from "react";
import { Header } from "./Header";
// import { Footer } from "./Footer";

type GeneralLayoutProps = {
  children: ReactNode;
  showSidebar?: boolean;
};

export function GeneralLayout({ children, showSidebar = false }: GeneralLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex flex-1">
        {showSidebar && (
          <aside className="w-64 border-r border-border bg-background/90 p-4">
            {/* Sidebar content, e.g., dashboard nav */}
          </aside>
        )}
        <main className="flex-1 p-6">{children}</main>
      </div>

    </div>
  );
}
