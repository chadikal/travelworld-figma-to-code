"use client";

import type { ComponentPropsWithoutRef } from "react";
import { artworkVariants } from "./artwork-variants";

// Keep eager markup out of the route prefetch payload, where React would preload its images.
type ArtworkProps = Omit<ComponentPropsWithoutRef<"img">, "src" | "srcSet" | "alt"> & {
  file: string;
  alt: string;
  fill?: boolean;
};

export function Artwork({
  file, alt, fill, sizes, loading = "lazy", decoding = "async", style, ...props
}: ArtworkProps) {
  const id = file.slice(0, file.lastIndexOf("."));
  const variant = artworkVariants[id];
  const directory = file.endsWith(".svg") ? "icons" : "images";
  const src = `/assets/${directory}/${file}`;
  const srcSet = variant?.widths.map((width, index, widths) => {
    const candidate = index === widths.length - 1 ? src : `/assets/images/${id}-${width}.webp`;
    return `${candidate} ${width}w`;
  }).join(", ");

  return (
    // Static exports serve pre-encoded files with native responsive selection.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      data-fill={fill || undefined}
      loading={loading}
      decoding={decoding}
      style={{ backgroundColor: variant?.color, ...style }}
      sizes={srcSet ? sizes : undefined}
      srcSet={srcSet}
      src={src}
    />
  );
}
