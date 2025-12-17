import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Collections from "@/components/collections/Collections";
import RecentOrders from "@/components/recent-orders/RecentOrders";
import WhatsAppCTA from "@/components/contact/WhatsAppCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <RecentOrders />
      <WhatsAppCTA />
    </>
  );
}
