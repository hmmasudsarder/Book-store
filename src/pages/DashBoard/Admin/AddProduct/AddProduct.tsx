import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";
import axios from 'axios';
import { useAddProductMutation } from "../../../../redux/features/admin/productManagement.api";
// import "ldrs/hourglass"; // Removed non-existent module import
import { toast } from "react-toastify";

// Cloudinary Credentials
const CLOUD_NAME = "dy0b6hvog"; // cloudinary cloud khola ache my gm -personal
const UPLOAD_PRESET = "bikeshop";
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addProduct] = useAddProductMutation()

const [isLoading, setIsLoading] = useState(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (data: any) => {
  setIsLoading(true);

  try {
    // handle Image Upload
    const file = data.productImg[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const uploadResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );

    const imageUrl = uploadResponse.data.secure_url;
    data.productImg = imageUrl; 

    // add inStock field and submit product as a defult
    const productData = { ...data, inStock: true };
    const response = await addProduct(productData).unwrap();
    toast.success(response?.message || "Product added successfully!");
    reset();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err:any) {
    console.error("Error submitting form:", err);
   toast.error(err.data.message  || "Something went wrong")
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div>
      <h2 className="text-4xl font-medium text-center mb-3">
        Add the new product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex gap-x-6 mb-4">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Product Name{" "}
              <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("name", { required: "Product Name is required" })}
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            />
            {errors && (<p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Model <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("model", { required: "Model is required" })}
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            />
            {errors.model && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
             Brand <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("brand", { required: "Model is required" })}
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            />
            {errors.model && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        </div>

        <div className="flex gap-x-6 mb-4">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Category{" "}
              <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none appearance-none"
            >
              <option value="">Select a category</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
              <option value="Gravel">Gravel</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Price <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("price", { required: "Price is required" })}
              type="number"
              step="any" 
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Quantity <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("quantity", { required: "Price is required" })}
              type="number"
              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        </div>

        <div className="relative mb-4">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Product Description{" "}
            <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="block w-full h-20 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
            placeholder="Write a description..."
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">This field is required</p>
          )}
        </div>

        <input
          {...register("productImg", { required: "Image is required" })}
          type="file"
          className="w-1/2 block mb-4 mt4 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
        />
        {errors.image && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <button
          type="submit"
          className="w-52 h-12 shadow-sm rounded-full bg-[#F2355F] hover:bg-[#1A1D21] transition-all duration-700 text-white text-base font-semibold leading-7"
        >
          {isLoading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
