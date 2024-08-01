import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registerUser, ] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log("Form Data:", data);
    try {
        // call register auth 
      const res = await registerUser(data).unwrap();
      toast.success(`${res.message}`);
    //   console.log("Registration Response:", res);
      navigate(`/`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
         console.error("Error during login:", );
         toast.error(err.data.message || "Something went wrong");
       }
  };
  return (
    <div className="flex justify-center pt-48 items-center min-h-screen bg-gray-100 pb-7">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          CUSTOMER REGISTER{/* Updated title */}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="full-name"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="full-name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 my-2"
              htmlFor="mobile-number"
            >
              Email Address *
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              id="email"
              placeholder="Enter your Email Address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block my-2 text-sm font-medium text-gray-700">
              Password * {/* Added asterisk */}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            REGISTER {/* Updated button text */}
          </button>
        </form>
        <p className=" text-center text-gray-600 mt-4">
          If you have an account ?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
