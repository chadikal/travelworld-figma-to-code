"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Container } from "@/components/layout/container";
import { Artwork } from "@/components/ui/artwork";
import { reviewers } from "@/data/home";
import { SectionHeading } from "./section-heading";

const cycleDuration = 36_000;
const reviewDuration = cycleDuration / reviewers.length;
const reviewStops = [
  ...reviewers.map(({ name }) => `Show review by ${name}`),
  "Return to first review",
];

export function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const flow = useRef<Animation | null>(null);
  const [slide, setSlide] = useState(0);
  const [rotation, setRotation] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  const playing = rotation ?? (reducedMotion === false);

  useEffect(() => {
    const animation = track.current?.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      { duration: cycleDuration, iterations: Infinity },
    );
    if (!animation) return;
    animation.pause();
    flow.current = animation;
    return () => {
      animation.cancel();
      flow.current = null;
    };
  }, []);

  useEffect(() => {
    const animation = flow.current;
    if (!animation) return;
    if (!playing || hovered) {
      animation.pause();
      return;
    }
    animation.play();
    const timer = window.setInterval(() => {
      const progress = Number(animation.currentTime) % cycleDuration;
      setSlide(Math.round(progress / reviewDuration));
    }, 200);
    return () => window.clearInterval(timer);
  }, [hovered, playing]);

  function selectReviewStop(index: number) {
    const animation = flow.current;
    if (animation) {
      animation.pause();
      animation.currentTime = index * reviewDuration;
    }
    setSlide(index);
    setRotation(false);
  }

  const cards = reviewers.map(({ name, avatar, quote }) => (
    <figure key={name} className="review">
      <blockquote>{quote}</blockquote>
      <figcaption>
        <Artwork file={avatar} alt="" width={85} height={63} />
        <div><strong>{name}</strong><span>Customer</span></div>
      </figcaption>
    </figure>
  ));

  return (
    <section className="home-section reviews-section" aria-labelledby="reviews-heading">
      <Container>
        <SectionHeading id="reviews-heading" label="Fans Love" title="What our fans say about us" />
        <div className="reviews-carousel">
          <div
            className="review-viewport"
            id="review-slides"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setHovered(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") setHovered(false);
            }}
          >
            <div className="review-track" ref={track} style={{ "--review-count": reviewers.length } as CSSProperties}>
              <div className="review-grid">{cards}</div>
              <div className="review-grid" aria-hidden="true">{cards}</div>
            </div>
          </div>
          <div className="review-controls" role="group" aria-label="Review carousel controls">
            {reviewStops.map((label, index) => (
              <button key={label} type="button" aria-label={label} aria-pressed={slide === index} aria-controls="review-slides" onClick={() => selectReviewStop(index)}>
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
