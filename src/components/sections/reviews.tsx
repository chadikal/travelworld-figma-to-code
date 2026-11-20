"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";
import { reviewers, reviewText } from "@/data/home";
import { SectionHeading } from "./section-heading";

const slideCount = 4;

export function Reviews() {
  const [slide, setSlide] = useState(0);
  const [rotation, setRotation] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  const playing = rotation ?? !reducedMotion;

  useEffect(() => {
    if (!playing || hovered) return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slideCount), 8000);
    return () => window.clearInterval(timer);
  }, [hovered, playing]);

  // The prototype's last variant returns to the first group of three.
  const order = reviewers.map((_, index) => reviewers[(slide + index) % reviewers.length]);

  return (
    <section className="home-section reviews-section" aria-labelledby="reviews-heading">
      <Container>
        <SectionHeading id="reviews-heading" label="Fans Love" title="What our fans say about us" />
        <div className="reviews-carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="review-grid" id="review-slides" aria-live={playing ? "off" : "polite"}>
            {order.map(({ name, avatar }) => (
              <figure key={name} className="review">
                <blockquote>{reviewText}</blockquote>
                <figcaption>
                  <Artwork file={avatar} alt="" width={85} height={63} />
                  <div><strong>{name}</strong><span>Customer</span></div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="review-controls" role="group" aria-label="Review carousel controls">
            {Array.from({ length: slideCount }, (_, index) => (
              <button key={index} type="button" aria-label={`Show reviews ${index + 1}`} aria-pressed={slide === index} aria-controls="review-slides" onClick={() => {
                setSlide(index);
                setRotation(false);
              }}>
                <Artwork file={slide === index ? "3e51f.svg" : "1bbfd.svg"} alt="" width={8} height={8} />
              </button>
            ))}
            <button type="button" className="review-rotation" onClick={() => setRotation(!playing)}>{playing ? "Pause" : "Play"}</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
