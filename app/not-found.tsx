import Link from "next/link";

function page() {
  return (
    <div className="h-screen place-content-center place-items-center grid gap-4">
      <h1 className="font-bold text-danger text-3xl">Page not Found</h1>
      <Link
        className="text-base hover:shadow-2xl  p-2 bg-primary text-white rounded"
        href={"/"}
      >
        Back to Home{" "}
      </Link>
    </div>
  );
}

export default page;
