export type TourFilters = { location: string; distance: number; people: number };

type SearchableTour = { name: string; region: string; distanceKm: number; capacity: number };

export function matchesTour(tour: SearchableTour, filters: TourFilters) {
  return `${tour.name} ${tour.region}`.toLowerCase().includes(filters.location)
    && (!filters.distance || tour.distanceKm <= filters.distance)
    && (!filters.people || tour.capacity >= filters.people);
}
