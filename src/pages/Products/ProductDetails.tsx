import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChevronRight } from "lucide-react";
import RelaventProduct from "./RelaventProduct";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching } = useGetAllProductsQuery(undefined);
  const products = data?.data || [];
  const product = products.find((item: { _id: string | undefined; }) => item._id === id);

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
    if (!product.inStock) {
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

  const handleBuyNow = () => {
    const orderDetails = { product: product._id, quantity, totalPrice };
    navigate("/checkout", { state: orderDetails });
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
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/allProduct" className="hover:underline">{product?.category}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-800">{product?.name}</span>
          </div>

          {/* Product Name and Price */}
          <h1 className="text-2xl font-bold text-gray-800">{product?.name}</h1>
          <div className="mt-2">
            {/* {product.originalPrice && (
              <span className="line-through text-gray-400 mr-2">
                ৳ {product.originalPrice}
              </span>
            )} */}
            <span className="text-2xl font-bold">৳ {product.price}</span>
          </div>

          {/* Size Selector */}
          {/* <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">Select Size</label>
            <select className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              {product.sizes?.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div> */}

          {/* Brand */}
          <div className="mt-4 text-sm text-gray-600">
            Brand: <span className="font-medium text-gray-800">{product?.brand}</span>
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
                <span className="px-2 py-1 bg-gray-100 rounded-md">{quantity}</span>
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
              <span className="px-2 py-1 bg-gray-100 rounded-md -mr-5">{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4 mt-6">
            {/* Add to Cart and Order Now Buttons */}
            <div className="flex items-center justify-between space-x-4">
              <button className="flex-1 bg-pink-500 hover:bg-gradient-to-br from-blue-700 to-blue-400 transition duration-500 transform text-white font-semibold py-3 rounded-xl">
                Add To Cart
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-gradient-to-br from-pink-700 to-pink-400 transition duration-500 transform text-white font-semibold py-3 rounded-xl" onClick={handleBuyNow}>
                Order Now
              </button>
            </div>

            {/* WhatsApp Contact Button */}
            <a href="https://wa.me/8801680989972" target="_blank"
              rel="noopener noreferrer">
              <button className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.836.743 5.556 2.157 7.968L0 32l8.194-2.137C10.472 31.176 13.19 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm9.42 22.094c-.374 1.036-2.18 1.92-2.998 2.05-.815.13-1.574.374-5.415-1.152-4.557-1.897-7.447-6.564-7.68-6.865-.225-.3-1.826-2.431-1.826-4.637 0-2.205 1.154-3.298 1.564-3.747.41-.449.9-.56 1.199-.56h.86c.274 0 .646-.025.997.758.374.81 1.278 3.147 1.388 3.374.112.226.187.487.037.788-.15.3-.225.486-.449.749-.225.262-.487.562-.699.751-.225.187-.45.374-.187.74.262.374 1.15 1.885 2.445 3.047 1.68 1.497 3.09 1.96 3.472 2.137.374.187.6.15.824-.075.225-.225.962-1.113 1.215-1.494.262-.374.525-.3.899-.15.375.15 2.386 1.123 2.798 1.324.412.203.687.3.787.45.1.15.1.879-.275 1.915z" />
                </svg>
                <span>01836049649</span>
              </button>
            </a>
          </div>


          {/* Delivery Charges */}
          <div className="mt-6 border-t border-gray-200">
            <table className="w-full text-sm text-left text-gray-600">
              <tbody>
                <tr>
                  <td className="py-2 font-medium">Delivery Charge</td>
                  <td className="py-2">Dhaka ভিতরে 70 টাকা</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Delivery Charge</td>
                  <td className="py-2">Dhaka বাহিরে 120 টাকা</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto my-10">
        <ul className="flex border-b">
          {["description", "review", "video"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer px-4 py-2 text-sm font-semibold ${activeTab === tab ? "border-b-2 border-pink-500 text-pink-500" : "text-gray-600"
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
              <p className="text-gray-700 mt-2">
                {product?.description}
              </p>
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
      </div>
      <RelaventProduct />
    </div >
  );
};

export default ProductDetails;
