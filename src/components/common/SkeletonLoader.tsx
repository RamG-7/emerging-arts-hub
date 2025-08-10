const SkeletonLoader = ({ className = "h-40 w-full" }: { className?: string }) => (
  <div className={`animate-pulse rounded-xl bg-muted ${className}`} />
);

export default SkeletonLoader;
