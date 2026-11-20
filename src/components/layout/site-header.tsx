"use client";

import { useRef, useState } from "react";
import { Artwork } from "@/components/ui/artwork";
import { Container } from "./container";

const navItems = ["About", "Tours", "Login", "Register"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header id="top" className="site-header">
      <Container>
        <div className="header-row">
          <a href="#top" aria-label="TravelWorld home" onClick={() => setOpen(false)}>
            <Artwork file="1c866.png" alt="TravelWorld" width={255} height={76} preload className="header-logo" />
          </a>
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
            <a href="#top" aria-current="page" onClick={() => setOpen(false)}>Home</a>
            {navItems.map((name) => (
              <span
                key={name}
                role="link"
                aria-disabled="true"
                title={`${name} is planned for the next phase`}
                className={name === "Register" ? "register-action" : name === "Login" ? "login-action" : undefined}
              >
                {name}
              </span>
            ))}
            <a href="#gallery" className="mobile-gallery-link" onClick={() => setOpen(false)}>Gallery</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
