import { HomeTourSearch } from "@/components/forms/home-tour-search";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FeaturedTours } from "@/components/sections/featured-tours";
import { Hero } from "@/components/sections/hero";
import { Experience, Gallery, Services } from "@/components/sections/home-stories";
import { Newsletter } from "@/components/sections/newsletter";
import { Reviews } from "@/components/sections/reviews";
import "./home.css";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HomeTourSearch>
          <Hero />
          <Services />
          <FeaturedTours />
        </HomeTourSearch>
        <Experience />
        <Gallery />
        <Reviews />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
