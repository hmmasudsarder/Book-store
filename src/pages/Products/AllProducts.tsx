/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { useState } from "react";


const AllProducts = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filterCategory, setFilterCategory] = useState<string | undefined>(
  //   undefined
  // );
  // const [filterInStock, setFilterInStock] = useState<string | undefined>(
  //   undefined
  // );
  const [sortOption, setSortOption] = useState<string | undefined>(undefined);
  //   const [page, setPage] = useState(1);
  //   const [limit, setLimit] = useState(20);
  // const [finalSearchTerm, setFinalSearchTerm] = useState<string>("");

  // const handleFilterChange = (value: any) => {
  //   if (value === "all") {
  //     setFilterCategory(undefined);
  //   } else {
  //     setFilterCategory(value);
  //   }
  // };
  // const handleFilterInStock = (value: any) => setFilterInStock(value);
  const handleSortChange = (value: any) => setSortOption(value);
  // const handleSearchClick = () => {
  //   setFinalSearchTerm(searchTerm);
  // };
  const { data, isFetching } = useGetAllProductsQuery(
    {
      // search: finalSearchTerm,
      // filter: filterCategory,
      // inStock: filterInStock,
      sort: sortOption,
    },
    { refetchOnMountOrArgChange: true }
  );


  const products = data?.data || [];
  console.log(products);

  if (isFetching)
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <span className="justify-center loading loading-spinner loading-lg">Loading...</span>
      </div>
    );

  //   reset all
  //   const resetFilters = () => {
  //     setFinalSearchTerm("");
  //     setFilterCategory(undefined);
  //     setFilterInStock(undefined);
  //     setSortOption(undefined);
  //   };

  const truncateName = (name: string, maxLength: number) => {
    if (name.length <= maxLength) return name;
    return name.slice(0, maxLength - 3) + "...";
  };

  return (
    <div className="container mx-auto px-4 mt-28 lg:mt-40 min-h-screen">
      {/* products header and filtering  */}
      <div className="flex items-center justify-between py-4">
        {/* Breadcrumbs */}

        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-800">Spices & Herbs</span>
        </div>

        {/* Filter Section */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-gray-600">
            Showing {/* <span className="font-medium">1-1</span> */}
            of {/* <span className="font-medium">1</span>  */}
            Results
          </span>
          <div className="relative">
            <select className="block w-full px-4 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={sortOption}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="">sort by price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      {/* show products  */}
      <div className="container mx-auto px-4 my-14 pb-12 pt-7">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">BEST DEALS</h2>
          {/* <a
            href="/allProduct"
            className="hover:text-white font-semibold text-blue-600 hover:bg-gradient-to-br from-blue-700 to-blue-400 shadow-2xl p-3 rounded-xl transition-all duration-500"
          >
            View All
          </a> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products?.map((product: any) => (
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
              <h3 className="text-center text-lg font-medium mt-2">
                {truncateName(product.name, 23)}
              </h3>
              <div className="text-center text-gray-500">
                <span className="line-through text-sm">
                  {/* ৳ {product.oldPrice} */}
                </span>{" "}
                <span className="text-blue-600 font-semibold">
                  ৳ {product.price}
                </span>
              </div>
              <Link to={`/product/${product._id}`}>
                <button className="w-full bg-pink-500 text-white py-[6px] mt-3 mb-2 rounded-xl hover:bg-gradient-to-br from-blue-700 to-blue-400 transition duration-500 transform">
                  🛒 View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
