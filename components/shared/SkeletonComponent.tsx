import { Skeleton } from "@mui/material";

function SkeletonComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={200}
        width={300}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={50}
        width={300}
      />
    </div>
  );
}

export default SkeletonComponent;
