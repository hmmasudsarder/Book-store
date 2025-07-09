/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";


const Products = () => {
  const { data, isFetching } = useGetAllProductsQuery(undefined);

  const products = data?.data || [];

  if (isFetching)
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <span className="justify-center loading loading-spinner loading-lg"></span>
      </div>
    );
  const truncateName = (name: string, maxLength: number) => {
    if (name.length <= maxLength) return name;
    return name.slice(0, maxLength - 3) + "...";
  };
  return (
    <div className="container mx-auto px-4 my-14 pb-12 pt-7 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">BEST DEALS</h2>
        <a
          href="/allProduct"
          className="hover:text-white font-semibold text-blue-600 hover:bg-gradient-to-br from-blue-700 to-blue-400 shadow-2xl p-3 rounded-xl transition-all duration-500"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products?.map((product: any) => (
          <Link to={`/product/${product._id}`}>
            <div
              key={product.id}
              className="border rounded-xl p-2 shadow-sm hover:shadow-lg transition duration-500"
            >
              <div className="relative group overflow-hidden">
                <span className="absolute top-0 z-10 right-0 bg-blue-500 text-white text-xs px-2 py-[6px] rounded-xl">
                  {/* {product.discount} */}
                  Discount
                </span>
                <img
                  src={product?.productImg}
                  alt={product.name}
                  className="w-auto mx-auto h-48 object-contain group-hover:scale-105 transition-transform duration-500 "
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-center text-lg font-medium mt-2">
                  {truncateName(product.name, 15)}
                </h3>
                {/* <button className="text-black p-4 font-semibold">
                ⭐ 4.5
              </button> */}
                <div className="text-center text-gray-500">
                  <span className="line-through text-sm">
                    $ {product?.price - 30}
                  </span>{" "}
                  <span className="text-blue-600 font-semibold">
                    $ {product.price}
                  </span>
                </div>
              </div>

              <div>
                <Link
                  to={`/product/${product._id}`}
                  className="flex items-center justify-between gap-4"
                >
                  <button className=" flex-grow bg-pink-500 text-white py-[6px] mt-3 mb-2 rounded-xl hover:bg-gradient-to-br from-blue-700 to-blue-400 transition duration-500 transform">
                    View Details
                  </button>
                  {/* <button className="font-semibold text-lg border-2 border-gray-500 rounded-full p-2">
                    <MdOutlineShoppingCart className="text-lg" />
                  </button> */}
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
