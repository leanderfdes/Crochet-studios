"use client";

import { useState } from "react";
import ProductModal from "./ProductModal";

export default function CollectionsClient({
  collections,
  whatsappNumber
}: {
  collections: any[];
  whatsappNumber: string;
}) {
  const [activeProduct, setActiveProduct] = useState<any | null>(null);

  return (
    <section className="py-32 bg-beige px-6">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {collections.map((item) => (
          <div
            key={item._id}
            onClick={() => setActiveProduct(item)}
            className="cursor-pointer rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
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
