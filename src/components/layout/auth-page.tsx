import { AuthForm } from "@/components/forms/auth-form";
import { Artwork } from "@/components/ui/artwork";
import { Container } from "./container";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import "./auth-page.css";

export function AuthPage({ mode }: { mode: "login" | "register" }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader currentPage={mode} />
      <main id="main-content" className="auth-page" tabIndex={-1}>
        <Container>
          <div className="auth-layout" data-mode={mode}>
            <Artwork
              file="30c2a.webp"
              alt="Traveler standing on a mountain overlook"
              width={576}
              height={662}
              className="auth-photo"
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 820px) calc(100vw - 64px), 620px"
              loading="eager"
              fetchPriority="high"
            />
            <div className="auth-panel">
              <Artwork file="89da8.svg" alt="" width={224} height={48} className="auth-plane" />
              <Artwork file="c7fd6.svg" alt="" width={182} height={48} className="auth-plane-trail" />
              <AuthForm mode={mode} />
              <div className="auth-landmarks" aria-hidden="true">
                <Artwork file={mode === "login" ? "db27b.svg" : "6d1a2.svg"} alt="" width={180} height={105} />
                <Artwork file="99928.svg" alt="" width={180} height={103} />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter currentPage={mode} />
    </>
  );
}
