import { BookOpen, ArrowRight } from "lucide-react";

const featuredAuthors = [
  {
    id: 1,
    name: "Tahmima Anam",
    genre: "Fiction, Historical",
    books: 12,
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Award-winning Bangladeshi-British writer and novelist.",
    featuredBook: "A Golden Age",
  },
  {
    id: 2,
    name: "Humayun Ahmed",
    genre: "Fiction, Drama",
    books: 200,
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Legendary Bangladeshi author and filmmaker.",
    featuredBook: "Nondito Noroke",
  },
  {
    id: 3,
    name: "Jhumpa Lahiri",
    genre: "Literary Fiction",
    books: 8,
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Pulitzer Prize-winning author of Indian origin.",
    featuredBook: "The Namesake",
  },
  {
    id: 4,
    name: "Zia Haider Rahman",
    genre: "Literary Fiction",
    books: 1,
    avatar: "https://i.pravatar.cc/150?img=14",
    bio: "British Bangladeshi novelist and international speaker.",
    featuredBook: "In the Light of What We Know",
  },
];

export default function FeaturedAuthors() {
  return (
    <section className="bg-[#f9fbfd] py-20 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xl font-bold text-primary uppercase tracking-wider mb-2">
            Meet The Creators
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Featured Authors
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredAuthors.map((author) => (
            <div
              key={author.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center text-center"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-24 h-24 rounded-full border-4 border-primary shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {author.name}
              </h3>
              <p className="text-sm text-gray-500">{author.genre}</p>

              <div className="flex items-center gap-2 mt-3 text-gray-700 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>
                  {author.books} {author.books > 1 ? "Books" : "Book"}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-600 italic min-h-[60px]">
                “{author.bio}”
              </p>

              <p className="mt-2 text-primary font-medium text-sm">
                Featured: {author.featuredBook}
              </p>

              <button className="text-primary text-xl border-2 p-3 rounded-xl font-medium mt-3 flex items-center gap-1 hover:underline">
                View All Works <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-10 py-3 rounded-lg shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg text-base">
            Browse All Authors
          </button>
        </div> */}
      </div>
    </section>
  );
}
