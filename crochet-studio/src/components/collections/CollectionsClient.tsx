"use client";

import { useEffect, useRef } from "react";
import { fadeUp } from "@/animations/scroll";

type Collection = {
  _id: string;
  title: string;
  image: string;
};

export default function CollectionsClient({
  collections
}: {
  collections: Collection[];
}) {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    refs.current.forEach(el => {
      if (el) fadeUp(el);
    });
  }, []);

  return (
    <section className="bg-beige py-24 px-6">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {collections.map((item, index) => (
          <div
            key={item._id}
            ref={el => {
              if (el) refs.current[index] = el;
            }}
            className="bg-cream rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-80 w-full object-cover"
            />
            <div className="p-6 font-serif text-xl">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
