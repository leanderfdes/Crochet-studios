"use client";

import { PortableText } from "@portabletext/react";

type Props = {
  product: any;
  onClose: () => void;
  whatsappNumber: string;
};

export default function ProductModal({
  product,
  onClose,
  whatsappNumber
}: Props) {
  const message = encodeURIComponent(
    `Hi! I'm interested in "${product.title}". Can you share more details?`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-cream max-w-4xl w-full rounded-xl overflow-hidden relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">

          {/* Image */}
          <div className="space-y-4">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-3xl mb-4">
              {product.title}
            </h3>

            {product.description && (
              <div className="text-sage space-y-4 mb-4">
                <PortableText value={product.description} />
              </div>
            )}

            {product.customNote && (
              <p className="italic text-sm mb-6">
                {product.customNote}
              </p>
            )}

            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full"
            >
              Enquire on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
