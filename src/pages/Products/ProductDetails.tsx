import { Link, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChevronRight } from "lucide-react";
import RelaventProduct from "./RelaventProduct";


// interface ProductCardProps {
//   product: IProduct;
//   isOffered?: boolean;
// }

const ProductDetails = () => {
  // const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  // const navigate = useNavigate();
  const { data, isFetching } = useGetAllProductsQuery(undefined);
  const products = data?.data || [];
  const product = products.find(
    (item: { _id: string | undefined }) => item._id === id
  );

  const [totalPrice, setTotalPrice] = useState(product ? product.price : 0);

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price);
    }
  }, [product]);

  if (isFetching) {
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!product) {
    return <p className="text-5xl text-center mt-10">Product not found!</p>;
  }

  const handleQuantityChange = (change: number) => {
    if (!product.stock) {
      toast.error("Product is out of stock");
      return;
    }

    const newQuantity = Math.max(1, quantity + change);

    if (newQuantity > product.quantity) {
      toast.error(`Only ${product.quantity} items are available in stock.`);
      return;
    }

    setQuantity(newQuantity);
    setTotalPrice(Math.round(newQuantity * product.price * 100) / 100);
  };
 
  return (
    <div className="container mx-auto p-4 min-h-screen mt-44 bg-white rounded-xl mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product?.productImg}
            alt={product?.name || "Product"}
            className="w-full h-[650px] rounded-xl shadow"
          />
          {/* {product.discount && (
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}% Discount
            </span>
          )} */}
        </div>

        {/* Product Details */}
        <div>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-gray-600 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/allProduct" className="hover:underline">
              {product?.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-800">{product?.name}</span>
          </div>

          {/* Product Name and Price */}
          <h1 className="text-2xl font-bold text-gray-800">{product?.name}</h1>
          <div className="mt-2">
            <span className="text-2xl font-bold">$ {product.price}</span>
          </div>

          {/* Brand */}
          <div className="mt-4 text-sm text-gray-600">
            Brand:{" "}
            <span className="font-medium text-gray-800">{product?.brand}</span>
          </div>

          {/* Quantity and Actions */}
          {/* Quantity and Actions */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex flex-col items-start">
              <span className="text-gray-600 ml-5">Quantity:</span>
              <div className="flex items-center space-x-2 mt-1">
                <button
                  className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="px-2 py-1 bg-gray-100 rounded-md">
                  {quantity}
                </span>
                <button
                  className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-gray-600">Total:</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md -mr-5">
                {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4 mt-6">
            {/* Add to Cart and Order Now Buttons */}
            <div className="flex items-center justify-between space-x-4">
              <button className="flex-1 bg-pink-500 hover:bg-blue-500 transition duration-500 transform text-white font-semibold py-3 rounded-xl"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="my-12">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Description</h3>
              <p className="text-gray-700 mt-2">{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Section
      <div className="container mx-auto my-10">
        <ul className="flex border-b">
          {["description", "review", "video"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer px-4 py-2 text-sm font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-pink-500 text-pink-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {activeTab === "description" && (
            <div>
              <h3 className="text-lg font-bold text-gray-800">Description</h3>
              <p className="text-gray-700 mt-2">{product?.description}</p>
            </div>
          )}
          {activeTab === "review" && (
            <div>
              <h3 className="text-lg font-bold text-gray-800">User Reviews</h3>
              <p className="text-gray-700 mt-2">Reviews coming soon...</p>
            </div>
          )}
          {activeTab === "video" && (
            <div>
              <h3 className="text-lg font-bold text-gray-800">Video</h3>
              <p className="text-gray-700 mt-2">Video content coming soon...</p>
            </div>
          )}
        </div>
      </div> */}
      <RelaventProduct />
    </div>
  );
};

export default ProductDetails;
