import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETH Ecuador | Oportunidades",
  description: "Lista de grants",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children};</>;
}
