import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";
import { galleryColumns } from "@/data/home";
import { SectionHeading } from "./section-heading";

const stats = [
  { value: "12k+", label: "Successful trip" },
  { value: "2k+", label: "Regular clients" },
  { value: "15", label: "Year experience" },
];

export function Experience() {
  return (
    <section className="home-section" aria-labelledby="experience-heading">
      <Container>
        <div className="experience-grid">
          <div className="experience-copy">
            <span className="script-label">Experience</span>
            <h2 id="experience-heading">With our all experience<br className="desktop-break" /> we will serve you</h2>
            <p>A good trip starts with local knowledge and a clear plan.<br className="desktop-break" /> Leave time to explore at a pace that suits you.</p>
            <dl className="experience-stats">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Artwork file="22d45.png" alt="Illustration of a traveler sitting on an orange suitcase" width={491} height={414} className="experience-image" />
        </div>
      </Container>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="home-section" aria-labelledby="gallery-heading">
      <Container>
        <SectionHeading id="gallery-heading" label="Gallery" title="Visit our customers tour gallery" />
        <div className="gallery-mosaic">
          {galleryColumns.map((column) => (
            <div key={column[0].file}>
              {column.map(({ file, alt, width, height }) => (
                <div key={file} className="gallery-tile" style={{ aspectRatio: `${width} / ${height}` }}>
                  <Artwork file={file} alt={alt} fill />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
