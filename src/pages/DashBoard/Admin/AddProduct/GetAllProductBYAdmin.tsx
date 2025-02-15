/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
// import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../../../redux/features/admin/productManagement.api";
import { toast } from "react-toastify";


const GetAllProductBYAdmin = () => {
  //   const [searchTerm, setSearchTerm] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | undefined>(undefined);
  const [filterInStock, setFilterInStock] = useState<string | undefined>(undefined);
  const [sortOption, setSortOption] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  //   const [page, setPage] = useState(1);
  //   const [limit, setLimit] = useState(20);
  const [finalSearchTerm, setFinalSearchTerm] = useState<string | undefined>(undefined);

  const handleFilterChange = (value: any) => {
    if (value === "all") {
      setFilterCategory(undefined);
    } else {
      setFilterCategory(value);
    }
  };
  const handleFilterInStock = (value: any) => setFilterInStock(value);
  const handleSortChange = (value: any) => setSortOption(value);
  const handleSearchClick = () => {
    setFinalSearchTerm(searchTerm);
  };
  const { data, isFetching } = useGetAllProductsQuery({
    search: finalSearchTerm,
    filter: filterCategory,
    inStock: filterInStock,
    sort: sortOption,
    // page,
    // limit,
  }, { refetchOnMountOrArgChange: true });
  const [deleteProduct] = useDeleteProductMutation()
  const products = data?.data || [];
  console.log(products);

  if (isFetching)
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <span className="justify-center loading loading-spinner loading-lg"></span>
      </div>
    );

  //   reset all
  const resetFilters = () => {
    setFinalSearchTerm(undefined);
    setFilterCategory(undefined);
    setFilterInStock(undefined);
    setSortOption(undefined);
  };
  //   updated  product ar jono pataitechi 
  const handleUpdateClick = (product: any) => {
    console.log("navigating to update:", product);
    navigate(`/dashboard/update-product/${product._id}`, { state: { product } });
  };

  //   for deleted operation
  const handleDeleteClick = async (id: any) => {

    try {
      const res = await deleteProduct(id).unwrap();
      //   console.log('product deleted:', res);
      toast.success(res?.message || "Product deleted successfully!");
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-6xl mx-auto pt-6">
      {/* <TestSearchComponent></TestSearchComponent> */}
      <div className="">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <div className="max-w-6xl mx-auto pt-4 ">
          {/* Search, Filter, and Sort Options */}
          <div className="flex flex-wrap gap-6   ">
            {/* Filter Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={filterCategory}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
              >
                <option value="">Select a category</option>
                <option value="Fantasy">Fantasy</option>
                <option value="History">History</option>
                <option value="Science">Science</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortOption}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
              >
                <option value="asc">sort by price</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>

            {/* in-Stock filter buttom */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => handleFilterInStock("inStock")}
                className="w-full sm:w-48 px-4 py-2 text-[#080808] border-1 border-[#080808] rounded-md shadow-sm   focus:outline-none focus:ring-1"
              >
                In Stock
              </button>
            </div>

            {/* search input */}
            <div className="relative w-full sm:w-[420px]">
              <input
                type="search"
                id="search-dropdown"
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm(e.target.value)} // update searchTer input change
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-sm border-s-gray-50 border-s-2 border border-gray-300"
                placeholder="Search Product by Name, author, ..."
                required
              />
              <button
                type="button"
                onClick={handleSearchClick} // Debugging: ensure `searchTerm` is correct
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#080808] rounded-sm border border-[#080808] hover:bg-[#F2355F]"
              >
                <FaMagnifyingGlass />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
          <button
            onClick={resetFilters}
            className="w-full sm:w-48 mt-1 px-4 py-2 text-[#F2355F] border-1 border-[#080808] rounded-md shadow-sm   focus:ring-1"
          >
            Reset
          </button>
        </div>
        <div></div>
      </div>

      {/* -------------------------------------  */}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {products.map(
          (product: { _id: any, productImg: string, name: string, description: string, price: number, model: string, category: string, brand: string, quantity: number }) => (
            <div
              key={product._id}
              className="relative mt-2 flex flex-col w-full max-w-[280px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <div className="relative  mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img
                  className="object-cover w-full h-full"
                  src={product.productImg}
                  alt={product.name}
                />
              </div>
              <div className="mt-4 px-5 pb-5 flex flex-col justify-between flex-grow">
                <a href="#">
                  <h5 className="text-lg font-bold tracking-tight text-[#1A1D21]">
                    {product.name} <span>{product.model}</span>
                  </h5>
                </a>
                <p className="text-[#1A1D21] pt-2 text-sm font-bold line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-2xl font-bold text-[#1A1D21]">
                      ${product.price}
                    </span>
                  </p>
                  <p className="text-base font-bold">{product.category}</p>
                </div>

                <div className="flex gap-2 mx-auto">
                  <button
                    onClick={() => handleDeleteClick(product._id)}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#F2355F] focus:outline-none focus:ring-4 "
                  >
                    deleted
                  </button>
                  <button
                    onClick={() => handleUpdateClick({ _id: product._id, name: product.name, price: product.price, description: product.description, productImg: product.productImg, model: product.model, category: product.category, brand: product.brand, quantity: product.quantity })}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#F2355F] focus:outline-none focus:ring-4 "
                  >
                    updated
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GetAllProductBYAdmin;
