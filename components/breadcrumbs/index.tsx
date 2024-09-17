"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  data: string;
};

const BreadCrumbsComponent = ({ data }: Props) => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(0, 2).join("/").concat(`/${data}`);

  return (
    <div className=" font-medium text-sm">
      <Link href={"/"} className="text-primary underline">
        Home
      </Link>
      {path}
    </div>
  );
};

export default BreadCrumbsComponent;
