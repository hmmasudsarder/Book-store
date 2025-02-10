/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation,  } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import axios from "axios";
import { useUpdatedProductMutation } from "../../../../redux/features/admin/productManagement.api";
import { toast } from "react-toastify";

// Cloudinary Credentials
const CLOUD_NAME = "dy0b6hvog"; // cloudinary cloud khola ache my gm -personal
const UPLOAD_PRESET = "bikeshop";

const ProductsUpdated = () => {
  const location = useLocation();
//   const navigate = useNavigate();
  const product = location.state?.product; // Get the passed product data
  const [isLoading, setIsLoading] = useState(false);
    const [updatedProduct] = useUpdatedProductMutation()

  const {
    register,
    handleSubmit,
    // setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product?.name || "",
      model: product?.model || "",
      brand: product?.brand || "",
      category: product?.category || "",
      price: product?.price || "",
      quantity: product?.quantity || "",
      description: product?.description || "",
      productImg: product?.productImg || "",
    },
  });


  
const onSubmit = async (data: any) => {
    setIsLoading(true);
    console.log(data);
  
  
    try {
      let imageUrl = data.productImg; // Keep existing image URL by default
  
      // If user selects a new image, upload it
      if (data.productImg && data.productImg[0] instanceof File) {
        const file = data.productImg[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
  
        const uploadResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
  
        imageUrl = uploadResponse.data.secure_url;
      }
  
      // Merge new data with existing values (keep old values if not changed)
      const productData = {
        ...data,
        productImg: imageUrl, // Use new or existing image
        inStock: data.inStock ?? true, // Keep or default to true
      };
  
      console.log(productData);
  
      // Call API to update the product
      const response = await updatedProduct({ id: product?._id, ...productData }).unwrap();
      toast.success(response?.message || "Product updated successfully!");
  
      reset();
    } catch (err: any) {
      console.error("Error updating product:", err);
      toast.error(err?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  
  
  return (
    <div>
      <h2 className="text-4xl font-medium text-center mb-3">
        Update the Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-6 mb-4">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Product Name <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("name", { required: "Product Name is required" })}
              type="text"
              className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Model <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("model", { required: "Model is required" })}
              type="text"
              className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full focus:outline-none"
            />
            {errors.model && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Brand <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("brand", { required: "Brand is required" })}
              type="text"
              className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full focus:outline-none"
            />
            {errors.brand && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        <div className="flex gap-x-6 mb-4">
          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Category <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full focus:outline-none"
            >
              <option value="">Select a category</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
              <option value="Gravel">Gravel</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Price <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("price", { required: "Price is required" })}
              type="number"
              className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full focus:outline-none"
            />
            {errors.price && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="w-full relative">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Quantity <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
            </label>
            <input
              {...register("quantity",{ required: "Quantity is required" })}
              type="number"
              className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full focus:outline-none"
            />
            {errors.quantity && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        <div className="relative mb-4">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Product Description <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
          </label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="block w-full h-20 px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none"
            placeholder="Write a description..."
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">This field is required</p>}
        </div>
        <input
          {...register("productImg", )}
          type="file"
          className="w-1/2 block mb-4 mt-4 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
        />
        {errors.productImg && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
        <button
          type="submit"
          className="w-52 h-12 bg-[#F2355F] hover:bg-[#1A1D21] text-white rounded-full transition-all duration-700"
        >
          {isLoading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            "Update Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProductsUpdated;
