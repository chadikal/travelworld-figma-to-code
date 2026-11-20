import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Newsletter } from "@/components/sections/newsletter";
import { TourCatalog } from "@/components/sections/tour-catalog";
import { Artwork } from "@/components/ui/artwork";
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
        <section className="tours-banner" aria-labelledby="tours-heading">
          <Artwork file="57c61.png" alt="" fill preload />
          <h1 id="tours-heading"><span>All</span> Tours</h1>
        </section>
        <TourCatalog />
        <Newsletter />
      </main>
      <SiteFooter currentPage="tours" />
    </>
  );
}
