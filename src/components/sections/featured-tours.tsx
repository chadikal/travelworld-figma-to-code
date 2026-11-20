"use client";

import { useHomeTourSearch } from "@/components/forms/home-tour-search";
import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";
import { featuredTours } from "@/data/home";
import { SectionHeading } from "./section-heading";

export function FeaturedTours() {
  const { filters, setFilters } = useHomeTourSearch();
  const visibleTours = filters ? featuredTours.filter((tour) => (
    `${tour.name} ${tour.region}`.toLowerCase().includes(filters.location) &&
    (!filters.distance || tour.distanceKm <= filters.distance) &&
    (!filters.people || tour.capacity >= filters.people)
  )) : featuredTours;

  return (
    <section id="featured-tours" className="home-section" aria-labelledby="featured-heading">
      <Container>
        <SectionHeading id="featured-heading" label="Explore" title="Our featured tours" tabIndex={-1} />
        <div className="search-feedback" aria-live="polite">
          {filters && (
            <div className="search-feedback-row">
              <p>{visibleTours.length ? `${visibleTours.length} demo ${visibleTours.length === 1 ? "tour" : "tours"} found.` : "No demo tours match your search."} Distances and capacity use sample data.</p>
              <button type="button" onClick={() => {
                setFilters(null);
                document.getElementById("featured-heading")?.focus({ preventScroll: true });
              }}>Show all tours</button>
            </div>
          )}
        </div>
        {visibleTours.length > 0 && (
          <ul className={filters ? "tour-results" : "tour-mosaic"}>
            {visibleTours.map((tour) => (
              <li key={tour.slot} className="tour-tile" data-slot={tour.slot}>
                <Artwork file={tour.file} alt="" fill />
                <div className="tour-caption">
                  <span>{tour.name}</span>
                  <span>{tour.region}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
