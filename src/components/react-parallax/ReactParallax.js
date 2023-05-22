"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export default function RParallaxProvider({ children }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
