import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";
import "./services.css";

const services = [
  { name: "Calculate Weather", file: "17f9b.png", description: ["Check the forecast before", "you set out."] },
  { name: "Best Tour Guide", file: "81eb0.png", description: ["Explore the area", "with a local guide."] },
  { name: "Customization", file: "edd4d.png", description: ["Shape your itinerary around", "your interests."] },
];

export function Services() {
  return (
    <section className="services" aria-labelledby="services-heading">
      <Container>
        <div className="service-grid">
          <div>
            <span className="service-kicker">What we serve</span>
            <h2 id="services-heading">We offer our best<br className="service-heading-break" /> services</h2>
          </div>
          {services.map(({ name, file, description: [firstLine, secondLine] }) => (
            <div key={name} className="service-card">
              <div className="service-icon">
                <Artwork file="866d5.svg" alt="" width={50} height={50} />
                <Artwork file={file} alt="" width={34} height={34} />
              </div>
              <h3>{name}</h3>
              <p>{firstLine}<br />{" "}{secondLine}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
