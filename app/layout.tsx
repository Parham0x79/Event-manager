import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Manager",
  description: "The hub for dev events!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen",
        "antialiased",
        schibstedGrotesk.variable,
        martianMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <div className="absolute w-full min-h-screen inset-0 top-0 -z-1">
          <LightRays
            raysOrigin="top-right"
            raysColor="#ff007d"
            raysSpeed={1}
            lightSpread={0.7}
            rayLength={3}
            glow={0.4}
            haze={0.5}
            followMouse
            mouseInfluence={0.1}
            rayDensity={1.8}
            tilt={25}
            raySharpness={0.75}
            atmosphere={1}
            intensity={1.2}
            fadeDistance={1}
            saturation={1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            cursorShadow
            clickPulse
            intro
            lightMode={false}
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
