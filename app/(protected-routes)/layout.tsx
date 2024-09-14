import Layout from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Layout />
      {children}
    </div>
  );
}
