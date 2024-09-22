import { Skeleton } from "@mui/material";

function SkeletonComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={200}
        sx={{ width: { xs: "100%", md: 300 } }} // Adjusting width for responsiveness
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={50}
        sx={{ width: { xs: "100%", md: 300 } }} // Adjusting width for responsiveness
      />
    </div>
  );
}

export default SkeletonComponent;
