import Hero from "@/components/hero/Hero";
import Collections from "@/components/collections/Collections";
import RecentOrders from "@/components/recent-orders/RecentOrders";
import WhatsAppCTA from "@/components/contact/WhatsAppCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <RecentOrders />
      <WhatsAppCTA />
    </>
  );
}
