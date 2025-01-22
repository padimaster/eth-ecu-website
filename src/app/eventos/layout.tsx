import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETH Ecuador | Eventos",
  description: "Conecta con la comunidad",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return { children };
}
