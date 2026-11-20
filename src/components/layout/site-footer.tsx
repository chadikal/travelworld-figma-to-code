import Link from "next/link";
import { Artwork } from "@/components/ui/artwork";
import { Container } from "./container";

const contacts = [
  { label: "Address", value: "Lorem", icon: "92d5a.svg", width: 18, height: 15 },
  { label: "Email", value: "xyz@mail.com", icon: "5883e.svg", width: 19.5, height: 16.5 },
  { label: "Phone", value: "00022200222", icon: "7e18a.svg", width: 18, height: 15 },
];

export function SiteFooter({ currentPage = "home" }: { currentPage?: "home" | "tours" }) {
  const home = currentPage === "home";
  const groups = [
    { title: "Discover", links: [{ name: "Home", href: home ? "#top" : "/" }, { name: "About" }, { name: "Tours", href: home ? "/tours/" : "#top" }] },
    { title: "Quick Links", links: [{ name: "Gallery", href: home ? "#gallery" : "/#gallery" }, { name: "Login" }, { name: "Register" }] },
  ];

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={home ? "#top" : "/"} aria-label="TravelWorld home">
              <Artwork file="35d05.png" alt="TravelWorld" width={255} height={76} className="footer-logo" />
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</p>
            <div className="footer-socials" aria-hidden="true">
              {["cba40.svg", "c4148.svg", "f75ab.svg", "f56be.svg"].map((file) => (
                <Artwork key={file} file={file} alt="" width={35} height={35} />
              ))}
            </div>
            <p className="footer-credit">© 2024 <span>Vipin_uidesigns.</span> All Rights Reserved</p>
          </div>
          {groups.map((group) => (
            <nav key={group.title} className="footer-column" aria-label={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(({ name, href }) => (
                  <li key={name}>
                    {href ? <Link href={href}>{name}</Link> : <span role="link" aria-disabled="true">{name}</span>}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="footer-column">
            <h2>Contact</h2>
            <dl>
              {contacts.map(({ label, value, icon, width, height }) => (
                <div key={label} className="footer-contact">
                  <dt><Artwork file={icon} alt="" width={Math.round(width)} height={Math.round(height)} />{label} :</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </footer>
  );
}
