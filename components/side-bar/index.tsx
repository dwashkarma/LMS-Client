"use client";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
];
const SideBarComponent = () => {
  const router = useRouter();
  const handleLink = (path: string) => {
    router.push(path);
  };
  //using the usePathname
  const pathName = usePathname();

  return (
    <div className="w-[15%] h-[90dvh] hidden lg:flex flex-col justify-between p-4 shadow-xl border-primary border-r border-opacity-15">
      <div className="flex  flex-col gap-2">
        {links.map((item) => {
          const isActive = pathName === item.href;
          return (
            <button key = {item.href}
              className={`text-start hover:bg-light hover:shadow p-2 rounded-md hover:text-slate-100 ${isActive ?"bg-primary text-white" : ""}`}
              onClick={() => handleLink(item.href)}
            >
              <h2>{item.label}</h2>
            </button>
          );
        })}
      </div>
      <div>footer</div>
    </div>
  );
};

export default SideBarComponent;
