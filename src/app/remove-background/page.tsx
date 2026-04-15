import type { Metadata } from "next";
import RemoveBackgroundClient from "./RemoveBackgroundClient";

export const metadata: Metadata = {
  title: "Remove Background from Images - Free Online Tool | GetImgTools",
  description: "Remove background from images instantly with our free online tool. Perfect for product photos, social media, and design projects. No registration required.",
  keywords: [
    "remove background from image",
    "free background remover",
    "transparent background",
    "image background removal",
    "online background remover",
    "remove bg free",
    "transparent image maker",
    "product photo background",
    "e-commerce image editing",
    "social media images"
  ],
  openGraph: {
    title: "Remove Background from Images - Free Online Tool",
    description: "Remove background from images instantly with our free online tool. Perfect for product photos, social media, and design projects.",
    type: "website",
  },
};

export default function RemoveBackgroundPage() {
  return <RemoveBackgroundClient />;
}