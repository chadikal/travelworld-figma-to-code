"use client";

import { useRef, useState } from "react";
import { TourSearchForm } from "@/components/forms/tour-search-form";
import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";
import { additionalTours, catalogTours, type CatalogTour } from "@/data/tours";
import { matchesTour, type TourFilters } from "@/lib/tour-filters";

const searchFormId = "catalog-search-form";
const allTours = [...catalogTours, ...additionalTours];

function CatalogCard({ tour }: { tour: CatalogTour }) {
  return (
    <li className="catalog-card" data-size={tour.size} data-caption={tour.captionSpacing}>
      <Artwork file={tour.file} alt="" fill className={tour.imageFit === "fill" ? "catalog-image-fill" : undefined} />
      <div className="catalog-caption">
        <h3>{tour.name}</h3>
        <p>{tour.region}</p>
      </div>
    </li>
  );
}

export function TourCatalog() {
  const [filters, setFilters] = useState<TourFilters | null>(null);
  const [expanded, setExpanded] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const visibleTours = filters ? allTours.filter((tour) => matchesTour(tour, filters)) : expanded ? allTours : catalogTours;

  function search(nextFilters: TourFilters | null) {
    setFilters(nextFilters);
    heading.current?.focus({ preventScroll: true });
    heading.current?.scrollIntoView({ block: "start" });
  }

  return (
    <>
      <div className="catalog-search">
        <Container>
          <div className="catalog-search-row">
            <TourSearchForm id={searchFormId} label="Search demo tours" onSearch={search} />
            <Artwork file="83bc8.svg" alt="" width={588} height={133} className="catalog-plane" />
          </div>
        </Container>
      </div>
      <section className="catalog-section" aria-labelledby="catalog-heading">
        <Container>
          <h2 ref={heading} id="catalog-heading" tabIndex={-1}>Our Featured <span>Tours</span></h2>
          <div aria-live="polite">
            {filters && (
              <div className="search-feedback-row">
                <p>
                  {visibleTours.length ? `${visibleTours.length} demo ${visibleTours.length === 1 ? "tour" : "tours"} found.` : "No demo tours match your search."} Distances and capacity use sample data.
                </p>
                <button type="reset" form={searchFormId}>Show all tours</button>
              </div>
            )}
          </div>
          {visibleTours.length > 0 && (
            <ul id="catalog-tours" className={filters ? "catalog-grid catalog-results" : "catalog-grid"}>
              {visibleTours.map((tour) => <CatalogCard key={tour.name} tour={tour} />)}
            </ul>
          )}
          {!filters && (
            <div className="catalog-load">
              <button
                type="button"
                className="catalog-load-button"
                aria-controls="catalog-tours"
                aria-expanded={expanded}
                aria-disabled={expanded}
                onClick={() => setExpanded(true)}
              >
                {expanded ? "All Tours Loaded" : "Load More"}
              </button>
              <p className="sr-only" role="status">
                {expanded ? `${additionalTours.length} more demo tours loaded.` : ""}
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
