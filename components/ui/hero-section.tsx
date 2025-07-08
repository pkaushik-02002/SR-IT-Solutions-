'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  learnMoreText?: string
  learnMoreHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

interface RetroGridProps {
  angle?: number
  cellSize?: number
  opacity?: number
  lightLineColor?: string
  darkLineColor?: string
}

const RetroGrid: React.FC<RetroGridProps> = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Enterprise IT Solutions",
      subtitle = {
        regular: "Transform your business with ",
        gradient: "cutting-edge technology.",
      },
      description = "Comprehensive IT solutions including SAS programming, cloud architecture, cybersecurity, and 24/7 expert support to drive your digital transformation.",
      ctaText = "Get Started",
      ctaHref = "/contact",
      learnMoreText = "Learn More",
      learnMoreHref = "/services",
      bottomImage = {
        light: "/Images/technology.png",
        dark: "/Images/technology.png",
      },
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-blue-950/10 dark:bg-blue-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <h1 className="text-sm text-muted-foreground group font-sans mx-auto px-5 py-2 bg-gradient-to-tr from-primary/10 via-secondary/20 to-transparent dark:from-primary/5 dark:via-secondary/10 border-[2px] border-border rounded-3xl w-fit">
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl tracking-tighter font-sans bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_hsl(var(--foreground))_0%,_hsl(var(--foreground)/0.75)_100%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-300 dark:to-blue-100">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px] w-full sm:w-auto">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--secondary))_0%,hsl(var(--primary))_50%,hsl(var(--secondary))_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-primary/10 via-secondary/30 to-transparent dark:from-primary/5 dark:via-secondary/20 text-foreground border-input border-[1px] hover:bg-gradient-to-tr hover:from-primary/20 hover:via-secondary/40 hover:to-transparent dark:hover:from-primary/10 dark:hover:via-secondary/30 transition-all w-full sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
                <a
                  href={learnMoreHref}
                  className="inline-flex rounded-full text-center group items-center w-full sm:w-auto justify-center bg-transparent text-foreground border-input border-[1px] hover:bg-accent hover:text-accent-foreground transition-all py-4 px-10"
                >
                  {learnMoreText}
                </a>
              </div>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-10 relative z-10">
                <Image
                  src={bottomImage.light}
                  alt="Technology"
                  width={600}
                  height={400}
                  className="mx-auto rounded-xl shadow-lg object-contain max-h-[400px] w-auto dark:hidden"
                  priority
                />
                <Image
                  src={bottomImage.dark}
                  alt="Technology"
                  width={600}
                  height={400}
                  className="mx-auto rounded-xl shadow-lg object-contain max-h-[400px] w-auto hidden dark:block"
                  priority
                />
              </div>
            )}
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection } 