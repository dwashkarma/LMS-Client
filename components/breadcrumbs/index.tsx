"use client";

import { usePathname } from "next/navigation";

type Props = {
  data: string;
};

const BreadCrumbsComponent = ({ data }: Props) => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(0, 2).join("/").concat(`/${data}`);

  return <div className="text-secondary font-normal text-sm">Home{path}</div>;
};

export default BreadCrumbsComponent;
