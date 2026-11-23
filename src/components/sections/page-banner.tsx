import type { ReactNode } from "react";
import { Artwork } from "@/components/ui/artwork";
import "./page-banner.css";

type PageBannerProps = {
  file: string;
  headingId: string;
  children: ReactNode;
};

export function PageBanner({ file, headingId, children }: PageBannerProps) {
  return (
    <section className="page-banner" aria-labelledby={headingId}>
      <Artwork file={file} alt="" fill preload />
      <h1 id={headingId}>{children}</h1>
    </section>
  );
}
