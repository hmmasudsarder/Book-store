import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import {FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
  
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
  
      const res = await login(userInfo).unwrap();
      // console.log("API Response:", res);
  
      if (res.success) {
        const user = verifyToken(res.data.token) as TUser;
        // console.log("Decoded User:", user);
  
        dispatch(setUser({ user: user, token: res.data.token }));
        toast.success(`${res.message}`);
  
        // Navigate to the homepage
        navigate(location.state?.from?.pathname || "/", { replace: true });
      } else {
        throw new Error(res.message || "Login failed");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error during login:", err);
      toast.error(err.data.message  || "Something went wrong",);
    }
  };
  return (
    <div className="flex justify-center pt-36 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          CUSTOMER LOGIN{/* Updated title */}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
        >
        
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="mobile-number"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your Email Address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block my-2 text-sm font-medium text-gray-700">
              Password* {/* Added asterisk */}
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
            LOGIN {/* Updated button text */}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
        You Have No Account ? {" "}  
          <Link to="/signUp" className="text-blue-500 hover:underline">
          Click To Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
