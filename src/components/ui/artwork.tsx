import Image, { type ImageProps } from "next/image";

export function Artwork({ file, alt, ...props }: Omit<ImageProps, "src"> & { file: string }) {
  const directory = file.endsWith(".svg") ? "icons" : "images";
  return <Image src={`/assets/${directory}/${file}`} alt={alt} {...props} />;
}
