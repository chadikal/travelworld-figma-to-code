"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { TourFilters } from "@/lib/tour-filters";
import { TourSearchForm } from "./tour-search-form";

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

  function search(filters: TourFilters | null) {
    setFilters(filters);
    const heading = document.getElementById("featured-heading");
    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView({ block: "start" });
  }

  return <TourSearchForm label="Search featured demo tours" onSearch={search} />;
}
