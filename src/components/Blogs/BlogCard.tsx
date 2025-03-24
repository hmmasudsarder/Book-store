import React from 'react'
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import imageOne from "../../assets/b1.png";
import imageTwo from "../../assets/b2.png";
import imageThree from "../../assets/b3.png";
import imageFour from "../../assets/b4.png";
import imageFive from "../../assets/b5.png";
import imageSix from "../../assets/b6.png";
import imageSeven from "../../assets/b7.png";
import imageEight from "../../assets/b8.png";
import imageNine from "../../assets/b9.png";

const BlogCard = ({ category }: {category: React.ReactNode}) => {
    const blogData = [
        {
          id: 1,
          category: "All Blog",
          title: "Exploring the Latest Trends in Tech",
          description: "A deep dive into emerging technologies shaping the world.",
          image: imageOne,
        },
        {
          id: 2,
          category: "Company",
          title: "Our Journey: How We Started",
          description:
            "A look at the humble beginnings of our company and where we are today.",
          image: imageTwo,
        },
        {
          id: 3,
          category: "Fashion",
          title: "Summer Fashion Trends 2025",
          description:
            "Stay stylish with the hottest fashion trends of the summer.",
          image: imageThree,
        },
        {
          id: 4,
          category: "Life Style",
          title: "Balancing Work and Personal Life",
          description: "Tips on how to maintain a healthy work-life balance.",
          image: imageFour,
        },
        {
          id: 5,
          category: "Product",
          title: "Introducing Our Latest Product Line",
          description: "Get a sneak peek at our newest innovations and products.",
          image: imageFive,
        },
        {
          id: 6,
          category: "All Blog",
          title: "AI in Everyday Life",
          description:
            "How artificial intelligence is transforming daily activities.",
          image: imageSix,
        },
        {
          id: 7,
          category: "Company",
          title: "Employee Spotlight: Meet Our Team",
          description: "A closer look at the people behind our success.",
          image: imageSeven,
        },
        {
          id: 8,
          category: "Fashion",
          title: "Winter Wardrobe Essentials",
          description: "Must-have fashion pieces for the cold season.",
          image: imageEight,
        },
        {
          id: 9,
          category: "Life Style",
          title: "Morning Routines for Success",
          description: "Start your day right with these effective habits.",
          image: imageNine,
        },
        {
          id: 10,
          category: "Product",
          title: "Top Gadgets of the Year",
          description: "A review of the most innovative gadgets of 2025.",
          image: imageTwo,
        },
        {
          id: 11,
          category: "All Blog",
          title: "The Future of Remote Work",
          description: "Trends and predictions for remote working environments.",
          image: imageSeven,
        },
        {
          id: 12,
          category: "Company",
          title: "Corporate Social Responsibility Initiatives",
          description: "How we are giving back to the community.",
          image: imageOne,
        },
      ];
      return (
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 pt-5">
          {blogData
            ?.filter((data) => data.category === category)
            .map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="shadow-lg  rounded-md relative">
                    <img src={data?.image} alt="image" className=" w-full " />
                    <div className="p-3">
                      <Heading>{data?.title}</Heading>
                      <Paragraph>{data?.description}</Paragraph>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      );
}

export default BlogCard
