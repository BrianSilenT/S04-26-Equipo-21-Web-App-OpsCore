import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface AppAvatarPlaceholderProps {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
};

export function AppAvatarPlaceholder({
  src,
  alt,
  fallback,
  size = "md",
}: AppAvatarPlaceholderProps) {
  return (
    <Avatar className={sizeMap[size]}>
      {src && <AvatarImage src={src} alt={alt} />}
      <AvatarFallback>{fallback.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}