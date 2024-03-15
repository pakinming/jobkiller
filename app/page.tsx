import Image from "next/image";
import { headers } from "next/headers";
import Navigator from "@/component/Navigator";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Navigator />
      <Footer />
    </main>
  );
}
