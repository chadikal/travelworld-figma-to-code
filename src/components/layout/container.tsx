import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[calc(100%-2rem)] max-w-[var(--content-width)] sm:w-[calc(100%-4rem)]">
      {children}
    </div>
  );
}
