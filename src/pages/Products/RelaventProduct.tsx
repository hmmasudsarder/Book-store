import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const RelaventProduct = () => {
    const { data, isFetching } = useGetAllProductsQuery(undefined);

    console.log(data)

      const products = data?.data || [];
      console.log(products);

      if (isFetching)
        return (
          <div className="max-w-6xl mx-auto mt-8 text-center">
            <span className="justify-center loading loading-spinner loading-lg"></span>
          </div>
        );

    // const products = [
    //     {
    //         name: "শাল মশলার প্যাকেজ",
    //         image: "/path/to/image1.jpg",
    //         oldPrice: 1150,
    //         newPrice: 1050,
    //         discount: "9%",
    //     },
    //     {
    //         name: "হলুদ গুঁড়া",
    //         image: "/path/to/image2.jpg",
    //         oldPrice: 128,
    //         newPrice: 120,
    //         discount: "6%",
    //     },
    //     // Add more products...
    // ];

    const truncateName = (name: string, maxLength: number) => {
        if (name.length <= maxLength) return name;
        return name.slice(0, maxLength - 3) + "...";
      };

    return (
        <div className="container mx-auto py-6">
            <h2 className="text-xl font-bold mb-4">RELATED PRODUCT</h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                // navigation 
                // pagination={{ clickable: true}}
                autoplay={{ delay: 10000, disableOnInteraction: false }} // Auto-slide every 10s
                breakpoints={{
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 1 },
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {products?.map((product, index) => (
                        <SwiperSlide key={index} className="border rounded-xl p-2 shadow-sm hover:shadow-lg transition duration-500">
                            <div className="relative group overflow-hidden">
                                {product && (
                                    <span className="absolute top-0 z-10 right-0 bg-blue-500 text-white text-xs px-2 py-[6px] rounded-xl">
                                        {/* {product.discount} */}
                                         Discount
                                    </span>
                                )}
                                <img
                                    src={product.productImg}
                                    alt={product.name}
                                    className="w-auto mx-auto h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-center text-lg font-medium mt-2">
                                    {truncateName(product.name, 15)}
                                </h3>
                                <button className="text-black p-4 font-semibold">
                                    ⭐ 4.5
                                </button>
                            </div>
                            <div className="text-center text-gray-500">
                                <span className="line-through text-sm">
                                    ৳ {product.price - 30}
                                </span>{" "}
                                <span className="text-blue-600 font-semibold">
                                    ৳ {product.price}
                                </span>
                            </div>
                            <div>
                                <Link to={`/product/${product._id}`} className="flex items-center justify-between gap-4">
                                    <button className="flex-grow bg-pink-500 text-white py-[6px] mt-3 mb-2 rounded-xl hover:bg-gradient-to-br from-blue-700 to-blue-400 transition duration-500 transform">
                                        View Details
                                    </button>
                                    <button className="font-semibold text-lg">
                                        <MdOutlineShoppingCart />
                                    </button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>
        </div>
    )
}

export default RelaventProduct
