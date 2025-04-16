import { BookOpen, PenLine, UploadCloud } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    label: "Bestseller",
    title: "Interactive Narratives",
    description:
      "Dynamic stories that adapt to reader choices with intelligent branching plotlines and personalized outcomes.",
  },
  {
    icon: <PenLine className="w-6 h-6 text-primary" />,
    label: "New Release",
    title: "AI Writing Assistant",
    description:
      "Smart tools that suggest plot developments, character arcs, and stylistic improvements as you write.",
  },
  {
    icon: <UploadCloud className="w-6 h-6 text-primary" />,
    label: "Popular",
    title: "Instant Publishing",
    description:
      "Automated formatting, editing, and distribution pipelines that help authors publish faster.",
  },
];

export default function StorytellingSection() {
  return (
    <section className="py-12 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Future of <span className="text-primary">Storytelling</span> is Here
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-10">
          Discover how artificial intelligence is revolutionizing literary creation,
          offering writers and readers unprecedented possibilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-100 rounded-xl p-6 relative shadow-sm hover:shadow-md transition"
            >
              <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                {item.label}
              </span>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">{item.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
