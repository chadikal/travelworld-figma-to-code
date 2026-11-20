"use client";

import { createContext, useContext, useState, type FormEvent, type ReactNode } from "react";
import { Artwork } from "@/components/ui/artwork";

type TourFilters = { location: string; distance: number; people: number };

const TourSearchContext = createContext<{
  filters: TourFilters | null;
  setFilters: (filters: TourFilters | null) => void;
} | null>(null);

export function HomeTourSearch({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<TourFilters | null>(null);

  return (
    <TourSearchContext.Provider value={{ filters, setFilters }}>
      {children}
    </TourSearchContext.Provider>
  );
}

export function useHomeTourSearch() {
  const search = useContext(TourSearchContext);
  if (!search) throw new Error("Tour search must be inside HomeTourSearch");
  return search;
}

export function SearchForm() {
  const { setFilters } = useHomeTourSearch();
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [people, setPeople] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const filters = { location: location.trim().toLowerCase(), distance: Number(distance), people: Number(people) };
    setFilters(filters.location || filters.distance || filters.people ? filters : null);
    const heading = document.getElementById("featured-heading");
    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView({ block: "start" });
  }

  return (
    <form className="tour-search" aria-label="Search featured demo tours" onSubmit={submit}>
      <label className="search-field">
        <Artwork file="d2e09.svg" alt="" width={24} height={24} />
        <span>Location
          <input name="location" placeholder="Where are you going?" value={location} onChange={(event) => setLocation(event.target.value)} />
        </span>
      </label>
      <label className="search-field">
        <Artwork file="4ce54.svg" alt="" width={24} height={24} />
        <span>Distance
          <input name="distance" type="number" min={0} step="any" placeholder="Distance (km)" aria-label="Maximum demo distance in kilometers" value={distance} onChange={(event) => setDistance(event.target.value)} />
        </span>
      </label>
      <label className="search-field">
        <Artwork file="cda95.svg" alt="" width={23} height={23} />
        <span>Max People
          <input name="people" type="number" min={0} placeholder="0" value={people} onChange={(event) => setPeople(event.target.value)} />
        </span>
      </label>
      <button type="submit" className="search-submit" aria-label="Search tours">
        <Artwork file="07ab5.svg" alt="" width={48} height={48} />
      </button>
    </form>
  );
}
