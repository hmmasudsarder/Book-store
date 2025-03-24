import { useState } from "react";
import BlogCard from "../../components/Blogs/BlogCard";

const Blogs = () => {
    const [show, setShow] = useState("All Blog");
    return (
        <div className="container mx-auto my-28">
            <h1 className="xl:text-[35px] lg:text-[35px] text-[24px] lg:mb-8 md:mb-4 mb-3 font-poppins font-extrabold text-whiite text-center">Our Blog</h1>
            <div className="flex items-center gap-16 justify-center">
                {["All Blog", "Company", "Fashion", "Life Style", "Product"]?.map(
                    (data, index) => {
                        return (
                            <button
                                key={index}
                                className={
                                    show === data
                                        ? "font-poppins font-semibold text-secondary border-b-2 border-b-secondary pb-3 px-4 py-2"
                                        : "font-poppins font-semibold pb-3 px-4 py-2"
                                }
                                onClick={() => setShow(data)}
                            >
                                {data}
                            </button>
                        );
                    }
                )}
            </div>
            {["All Blog", "Company", "Fashion", "Life Style", "Product"].includes(
                show
            ) && <BlogCard category={show} />}
    </div >
  )
}

export default Blogs
