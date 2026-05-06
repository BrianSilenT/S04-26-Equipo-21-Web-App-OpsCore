import { type HTMLAttributes, type ElementType } from "react";

type TextVariant = "h1" | "h2" | "h3" | "body" | "caption" | "muted";

interface AppTextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: ElementType;
}

const variantStyles: Record<TextVariant, string> = {
  h1: "text-3xl font-bold tracking-tight",
  h2: "text-2xl font-semibold",
  h3: "text-xl font-medium",
  body: "text-base",
  caption: "text-sm",
  muted: "text-sm text-muted-foreground",
};

export function AppText({
  variant = "body",
  as: Tag = "p",
  className = "",
  children,
  ...props
}: AppTextProps) {
  return (
    <Tag className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}