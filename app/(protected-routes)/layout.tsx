import NavBarComponent from "@/components/nav-bar/navbarComponent";
import SideBarComponent from "@/components/side-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBarComponent />
      <div className="flex">
        <SideBarComponent />
        {children}
      </div>
    </div>
  );
}
