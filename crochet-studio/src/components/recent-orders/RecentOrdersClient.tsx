"use client";

export default function RecentOrdersClient({
  orders
}: {
  orders: any[];
}) {
  return (
    <section className="py-32 bg-cream px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl mb-4">
            Recent Creations
          </h2>
          <p className="text-sage max-w-xl mx-auto">
            A glimpse of our recently completed handcrafted work.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {orders.map((order, i) => (
            <div
              key={order._id}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={order.image}
                  alt={order.caption}
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <p className="font-serif text-xl mb-2">
                  {order.caption}
                </p>
                {order.location && (
                  <p className="text-sm text-sage">
                    {order.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
