import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <DeliverySection />
      <Footer />
    </main>
  );
}