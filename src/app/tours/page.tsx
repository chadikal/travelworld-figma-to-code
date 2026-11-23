import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Newsletter } from "@/components/sections/newsletter";
import { PageBanner } from "@/components/sections/page-banner";
import { TourCatalog } from "@/components/sections/tour-catalog";
import "./tours.css";

export const metadata: Metadata = {
  title: "Tours",
  description: "Browse TravelWorld destinations and filter the demo tour collection.",
};

export default function ToursPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader currentPage="tours" />
      <main id="main-content" tabIndex={-1}>
        <PageBanner file="57c61.webp" sizes="max(100vw, 375px)" headingId="tours-heading"><span>All</span> Tours</PageBanner>
        <TourCatalog />
        <Newsletter />
      </main>
      <SiteFooter currentPage="tours" />
    </>
  );
}
