import NavBarComponent from "@/components/nav-bar/navbarComponent";
import SideBarComponent from "@/components/side-bar";
import { ContextProviders } from "@/providers/ContextProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ContextProviders>
        <NavBarComponent />
        <div className="lg:flex">
          <SideBarComponent />
          {children}
        </div>
      </ContextProviders>
    </div>
  );
}
