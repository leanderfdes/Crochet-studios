"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PortableText } from "@portabletext/react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  content: any[];
  image?: string;
};

export default function AboutClient({
  title,
  content,
  image
}: Props) {
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    linesRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%"
          }
        }
      );
    });
  }, []);

  return (
    <section className="py-32 bg-cream px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div>
          <h2 className="font-serif text-4xl mb-8">
            {title}
          </h2>

          <div className="space-y-6 text-sage leading-relaxed">
            {content.map((block, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) linesRef.current[i] = el;
                }}
              >
                <PortableText value={[block]} />
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
