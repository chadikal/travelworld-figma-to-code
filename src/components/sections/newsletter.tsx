"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <Container>
        <div className="newsletter-grid">
          <div className="newsletter-copy">
            <h2 id="newsletter-heading">Subscribe now to get useful traveling information</h2>
            <form onSubmit={subscribe} className="newsletter-form" aria-label="Demo newsletter signup">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email" type="email" autoComplete="email" placeholder="Enter your email" required
                value={email}
                onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }}
              />
              <button type="submit">Subscribe</button>
            </form>
            <p className="newsletter-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisici sunt in, provident facere ipsam?</p>
            <p className="newsletter-status" role="status">{submitted ? "Demo signup complete. Your email was not saved." : ""}</p>
          </div>
          <Artwork file="2963d.png" alt="" width={546} height={364} className="newsletter-image" />
        </div>
      </Container>
    </section>
  );
}
