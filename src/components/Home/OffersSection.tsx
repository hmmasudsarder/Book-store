import { Smile, Heart, BookMarked } from "lucide-react";

const offers = [
  {
    icon: <Smile className="text-primary w-6 h-6" />,
    title: "Exciting Offers",
    description: "Get 20% off on your first purchase of books. Discover amazing deals!",
  },
  {
    icon: <Heart className="text-primary w-6 h-6" />,
    title: "Bestsellers",
    description: "Explore the most loved and popular books by readers worldwide.",
  },
  {
    icon: <BookMarked className="text-primary w-6 h-6" />,
    title: "Personalized Picks",
    description: "Handpicked books just for you, based on your reading preferences.",
  },
];

export default function OffersSection() {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-start gap-3 mb-2">
              {offer.icon}
              <h3 className="text-lg font-semibold">{offer.title}</h3>
            </div>
            <p className="text-sm text-gray-700">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
