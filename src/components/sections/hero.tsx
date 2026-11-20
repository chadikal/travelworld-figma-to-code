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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.</p>
          </div>
          <div className="hero-media">
            <div className="hero-tile">
              <Artwork file="92c3c.jpg" alt="Traveler looking out over a mountain valley" fill preload />
            </div>
            <div className="hero-tile hero-video">
              <span>Video unavailable</span>
              <Artwork file="f5f10.svg" alt="" width={44} height={44} />
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
