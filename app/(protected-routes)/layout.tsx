import NavBarComponent from "@/components/navbarComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBarComponent />
      {children}
    </div>
  );
}
