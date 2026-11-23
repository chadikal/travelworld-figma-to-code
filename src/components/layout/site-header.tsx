"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Artwork } from "@/components/ui/artwork";
import { Container } from "./container";

const mainNavItems = [
  { name: "Home", page: "home" },
  { name: "About", page: "about" },
  { name: "Tours", page: "tours" },
] as const;

const accountNavItems = [
  { name: "Login", page: "login", className: "login-action" },
  { name: "Register", page: "register", className: "register-action" },
] as const;

export type SitePage = (typeof mainNavItems | typeof accountNavItems)[number]["page"];

export function SiteHeader({ currentPage = "home" }: { currentPage?: SitePage }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const authPage = currentPage === "login" || currentPage === "register";

  return (
    <header className={authPage ? "site-header auth-header" : "site-header"}>
      <Container>
        <div className="header-row">
          <Link href={currentPage === "home" ? "#top" : "/#top"} aria-label="TravelWorld home" onClick={() => setOpen(false)}>
            <Artwork file="1c866.png" alt="TravelWorld" width={255} height={76} preload className="header-logo" />
          </Link>
          {!authPage && (
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
          )}
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
            {!authPage && (
              <div className="nav-page-links">
                {mainNavItems.map(({ name, page }) => {
                  const active = page === currentPage;
                  return (
                    <Link
                      key={page}
                      href={active ? "#top" : page === "home" ? "/#top" : `/${page}/#top`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => {
                        if (open && active) toggle.current?.focus();
                        setOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            )}
            <div className="nav-account-links">
              {accountNavItems.map(({ name, page, className }) => {
                const active = page === currentPage;
                return (
                  <Link
                    key={page}
                    href={active ? "#top" : `/${page}/#top`}
                    aria-current={active ? "page" : undefined}
                    className={className}
                    onClick={() => setOpen(false)}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
