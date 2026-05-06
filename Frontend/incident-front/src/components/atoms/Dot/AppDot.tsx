interface AppDotProps {
  color?: "green" | "red" | "yellow" | "gray";
  size?: "sm" | "md" | "lg";
}

const colorMap = {
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  gray: "bg-gray-400",
};

const sizeMap = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};

export function AppDot({ color = "gray", size = "md" }: AppDotProps) {
  return (
    <span
      className={`inline-block rounded-full ${colorMap[color]} ${sizeMap[size]}`}
    />
  );
}