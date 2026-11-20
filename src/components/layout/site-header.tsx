"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Artwork } from "@/components/ui/artwork";
import { Container } from "./container";

const navItems = [
  { name: "Home", page: "home" },
  { name: "About" },
  { name: "Tours", page: "tours" },
  { name: "Login", className: "login-action" },
  { name: "Register", className: "register-action" },
] as const;

export function SiteHeader({ currentPage = "home" }: { currentPage?: "home" | "tours" }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header">
      <Container>
        <div className="header-row">
          <Link href={currentPage === "home" ? "#top" : "/#top"} aria-label="TravelWorld home" onClick={() => setOpen(false)}>
            <Artwork file="1c866.png" alt="TravelWorld" width={255} height={76} preload className="header-logo" />
          </Link>
          <button
            ref={toggle}
            className="mobile-nav-toggle"
            type="button"
            aria-controls="primary-nav"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setOpen(false);
            }}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav
            id="primary-nav"
            className="primary-nav"
            aria-label="Main navigation"
            data-open={open}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                toggle.current?.focus();
              }
            }}
          >
            {navItems.map((item) => {
              if ("page" in item) {
                const active = item.page === currentPage;
                const href = active ? "#top" : item.page === "home" ? "/#top" : "/tours/#top";
                return <Link key={item.name} href={href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{item.name}</Link>;
              }
              return (
                <span
                  key={item.name}
                  role="link"
                  aria-disabled="true"
                  title={`${item.name} is planned for a later phase`}
                  className={"className" in item ? item.className : undefined}
                >
                  {item.name}
                </span>
              );
            })}
            <Link href={currentPage === "home" ? "#gallery" : "/#gallery"} className="mobile-gallery-link" onClick={() => setOpen(false)}>Gallery</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
