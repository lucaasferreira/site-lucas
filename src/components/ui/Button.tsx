"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-50 disabled:pointer-events-none touch-manipulation";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-300 text-ink-950 hover:bg-brand-200 shadow-glow-sm hover:shadow-glow-md hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-sm",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/[0.04]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<"button"> & { href?: undefined };
type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      withArrow = false,
      className,
      children,
    } = props;

    const classes = cn(base, sizes[size], variants[variant], className);
    const content = (
      <>
        {children}
        {withArrow ? (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        ) : null}
      </>
    );

    if ("href" in props && props.href) {
      const isExternal = props.external || props.href.startsWith("http");
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={props.href}
            target={props.target ?? "_blank"}
            rel={props.rel ?? "noopener noreferrer"}
            className={cn(classes, "group")}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={props.href}
          className={cn(classes, "group")}
        >
          {content}
        </Link>
      );
    }

    const { variant: _v, size: _s, withArrow: _w, className: _c, children: _ch, ...buttonRest } =
      props as ButtonAsButton;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cn(classes, "group")} {...buttonRest}>
        {content}
      </button>
    );
  }
);
