import type { ReactNode } from "react";
import { Artwork } from "@/components/ui/artwork";
import "./page-banner.css";

type PageBannerProps = {
  file: string;
  sizes: string;
  headingId: string;
  children: ReactNode;
};

export function PageBanner({ file, sizes, headingId, children }: PageBannerProps) {
  return (
    <section className="page-banner" aria-labelledby={headingId}>
      <Artwork file={file} alt="" fill sizes={sizes} loading="eager" fetchPriority="high" />
      <h1 id={headingId}>{children}</h1>
    </section>
  );
}
