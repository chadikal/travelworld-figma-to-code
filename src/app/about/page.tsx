import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Newsletter } from "@/components/sections/newsletter";
import { PageBanner } from "@/components/sections/page-banner";
import { Services } from "@/components/sections/services";
import { Artwork } from "@/components/ui/artwork";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about TravelWorld and its mission to create memorable travel experiences.",
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader currentPage="about" />
      <main id="main-content" className="about-page" tabIndex={-1}>
        <PageBanner file="4a700.png" headingId="about-heading">About <span>Us</span></PageBanner>
        <Container>
          <div className="about-story">
            <div className="about-copy">
              <section aria-labelledby="about-intro-heading">
                <h2 id="about-intro-heading">Who <span>We Are?</span></h2>
                <p>We’re all about creating unforgettable experiences for our guests. Our journey began with a simple passion for exploring the beauty of the World.</p>
              </section>
              <section aria-labelledby="about-mission-heading">
                <h2 id="about-mission-heading">Our <span>Mission</span></h2>
                <p>We believe that travel is not just about visiting new places, but about immersing yourself in new cultures, connecting with nature, and making memories that last a lifetime.</p>
              </section>
            </div>
            <Artwork
              file="4ae15.jpg"
              alt="Outrigger boat in a turquoise lagoon between limestone cliffs"
              width={544}
              height={385}
              className="about-story-image"
            />
          </div>
        </Container>
        <Services />
        <Newsletter />
      </main>
      <SiteFooter currentPage="about" />
    </>
  );
}
