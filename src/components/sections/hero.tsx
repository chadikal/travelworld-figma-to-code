import { SearchForm } from "@/components/forms/home-tour-search";
import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Container>
        <div className="hero-row">
          <div className="hero-copy">
            <div className="hero-label">
              <span className="script-label">Know Before You Go</span>
              <Artwork file="7b2be.png" alt="" width={45} height={45} />
            </div>
            <h1 id="hero-heading">
              Traveling opens the door to<br className="desktop-break" /> creating <strong>memories</strong>
            </h1>
            <p>Find a place you’ve always wanted to visit and see what makes it worth the trip. Browse ideas for coastal escapes, mountain walks, and city breaks, with room for the unexpected stops you’ll remember long after you’re home.</p>
          </div>
          <div className="hero-media">
            <div className="hero-tile">
              <Artwork file="92c3c.jpg" alt="Traveler looking out over a mountain valley" fill preload />
            </div>
            <div className="hero-tile">
              <Artwork file="4ae15.jpg" alt="Outrigger boat in a turquoise lagoon between limestone cliffs" fill preload className="hero-lagoon" />
            </div>
            <div className="hero-tile">
              <Artwork file="d67fc.jpg" alt="Traveler standing before the elaborate entrance of a building" fill preload />
            </div>
          </div>
        </div>
        <SearchForm />
      </Container>
    </section>
  );
}
