"use client";

import type { FormEvent } from "react";
import { Artwork } from "@/components/ui/artwork";
import type { TourFilters } from "@/lib/tour-filters";

export function TourSearchForm({
  id, label, onSearch,
}: { id?: string; label: string; onSearch: (filters: TourFilters | null) => void }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const filters = {
      location: String(data.get("location") ?? "").trim().toLowerCase(),
      distance: Number(data.get("distance")),
      people: Number(data.get("people")),
    };
    onSearch(filters.location || filters.distance || filters.people ? filters : null);
  }

  return (
    <form id={id} className="tour-search" aria-label={label} onSubmit={submit} onReset={() => onSearch(null)}>
      <label className="search-field">
        <Artwork file="d2e09.svg" alt="" width={24} height={24} />
        <span>Location
          <input name="location" placeholder="Where are you going?" />
        </span>
      </label>
      <label className="search-field">
        <Artwork file="4ce54.svg" alt="" width={24} height={24} />
        <span>Distance
          <input name="distance" type="number" min={0} step="any" placeholder="Distance (km)" aria-label="Maximum demo distance in kilometers" />
        </span>
      </label>
      <label className="search-field">
        <Artwork file="cda95.svg" alt="" width={23} height={23} />
        <span>Max People
          <input name="people" type="number" min={0} placeholder="0" />
        </span>
      </label>
      <button type="submit" className="search-submit" aria-label="Search tours">
        <Artwork file="07ab5.svg" alt="" width={48} height={48} />
      </button>
    </form>
  );
}
