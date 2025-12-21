"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProductModal from "./ProductModal";

gsap.registerPlugin(ScrollTrigger);

export default function CollectionsClient({
  collections,
  whatsappNumber
}: {
  collections: any[];
  whatsappNumber: string;
}) {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeProduct, setActiveProduct] = useState<any | null>(null);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <section className="py-32 bg-beige px-6">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {collections.map((item, i) => (
          <div
            key={item._id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            onClick={() => setActiveProduct(item)}
            className="cursor-pointer rounded-xl overflow-hidden shadow transition"
          >
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="h-72 w-full object-cover"
            />
            <div className="p-4 font-serif text-lg">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          whatsappNumber={whatsappNumber}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </section>
  );
}
