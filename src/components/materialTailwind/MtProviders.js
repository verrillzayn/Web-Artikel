"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function MtProviders({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
