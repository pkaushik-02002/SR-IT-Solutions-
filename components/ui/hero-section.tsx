import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
  return (
        <main className="overflow-hidden">
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            <section>
                <div className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        delayChildren: 1,
                                    },
                                },
                            },
                            item: {
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 2,
                                    },
                                },
                            },
                        }}
                        className="absolute inset-0 -z-20">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=3276&h=4095&fit=crop&crop=center"
                            alt="background"
                            className="absolute inset-x-0 top-32 sm:top-40 md:top-48 lg:top-32 -z-20 hidden lg:block"
                            width="3276"
                            height="4095"
                        />
                    </AnimatedGroup>
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="/services"
                                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-2 sm:gap-4 rounded-full border p-1 pl-3 sm:pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                    <span className="text-foreground text-xs sm:text-sm">Enterprise IT Solutions & SAS Programming</span>
                                    <span className="dark:border-background block h-3 sm:h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                    <div className="bg-background group-hover:bg-muted size-5 sm:size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-10 sm:w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-5 sm:size-6">
                                                <ArrowRight className="m-auto size-2.5 sm:size-3" />
                                            </span>
                                            <span className="flex size-5 sm:size-6">
                                                <ArrowRight className="m-auto size-2.5 sm:size-3" />
                                            </span>
      </div>
    </div>
                                </Link>
                    
                                <h1
                                    className="mt-6 sm:mt-8 lg:mt-16 max-w-4xl mx-auto text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.25rem] px-4 sm:px-0">
                                    Transform Your Business with Cutting-Edge Technology
                                </h1>
                                <p
                                    className="mx-auto mt-6 sm:mt-8 max-w-2xl text-balance text-base sm:text-lg lg:text-xl px-4 sm:px-0">
                                    Comprehensive IT solutions including SAS programming, cloud architecture, cybersecurity, and 24/7 expert support to drive your digital transformation.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-2 md:flex-row px-4 sm:px-0">
                                <div
                                    key={1}
                                    className="bg-foreground/10 rounded-[14px] border p-0.5 w-full sm:w-auto">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-4 sm:px-5 text-sm sm:text-base w-full sm:w-auto">
                                        <Link href="/contact">
                                            <span className="text-nowrap">Get Started</span>
                                        </Link>
                                    </Button>
                  </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="rounded-xl px-4 sm:px-5 text-sm sm:text-base hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                                    <Link href="/services">
                                        <span className="text-nowrap">View Services</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
              </div>
            </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative -mr-4 sm:-mr-8 md:-mr-16 lg:-mr-56 mt-6 sm:mt-8 md:mt-12 lg:mt-20 overflow-hidden px-2 sm:px-4 lg:px-2">
                            <div
                                aria-hidden
                                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-4xl lg:max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl border p-3 sm:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <div className="relative w-full h-0 pb-[56.25%] sm:pb-[53.33%]">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover hidden dark:block rounded-xl sm:rounded-2xl"
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2700&h=1440&fit=crop&crop=center"
                                        alt="IT Solutions Dashboard"
                                        loading="lazy"
                                    />
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover block dark:hidden rounded-xl sm:rounded-2xl"
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2700&h=1440&fit=crop&crop=center"
                                        alt="IT Solutions Dashboard"
                                        loading="lazy"
                />
              </div>
                            </div>
                        </div>
                    </AnimatedGroup>
          </div>
        </section>
        </main>
    )
} 