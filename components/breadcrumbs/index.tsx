"use client";

import { usePathname } from "next/navigation";

type Props = {};

const BreadCrumbsComponent = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="text-secondary font-normal text-sm">Home{pathname}</div>
  );
};

export default BreadCrumbsComponent;
