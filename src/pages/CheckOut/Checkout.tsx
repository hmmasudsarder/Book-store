/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useCreateOrderMutation } from "../../redux/features/order/order";
import { toast } from "react-toastify";

const Checkout = () => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const orderDetails = location.state || {}; 

  console.log("Received Order Details in the checkout:", orderDetails);

  const [createOrder, { isLoading, isSuccess, data, isError, error }] = useCreateOrderMutation();

  const handlePlaceOrder = async () => {
    if (!user) {
      console.error("User is missing!");
      return;
    }
    await createOrder({
      email:user?.email,
      product:orderDetails?.product,
      quantity:orderDetails?.quantity,
      totalPrice:orderDetails?.totalPrice

    });
  };
 console.log(user);


useEffect(() => {
  if (isLoading) {
    toast.loading("Processing ...");
  }

  if (isSuccess) {
    toast.success(data?.message || "Order created successfully");
    console.log(data?.message);

    // Redirect to the payment checkout URL if available
    if (data?.data?.payment?.checkout_url) {
      setTimeout(() => {
        window.location.href = data.data.payment.checkout_url;
      }, 1000);
    }
  }

  if (isError) {
    const errorMessage = (error as any)?.message || "Something went wrong!";
    toast.error(errorMessage);
    console.error(errorMessage);
  }
}, [data, error, isError, isLoading, isSuccess]);



  return (
    <div>
      <div className="container mx-auto min-h-screen bg-white pt-48">
        <div className="md:max-w-5xl max-w-xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 max-md:order-1">
              <h2 className="text-3xl font-extrabold text-gray-800">
                Make a payment
              </h2>
              <p className="text-gray-800 text-sm mt-4">
                Complete your transaction swiftly and securely with our
                easy-to-use payment process.
              </p>

              <form className="mt-8 max-w-lg">
                <div className="grid gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Cardholder's Name"
                      className="px-4 py-3.5 bg-gray-100 text-black w-full text-sm border rounded-md focus:border-black focus:bg-transparent outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="address"
                      className="px-4 py-3.5 bg-gray-100 text-black w-full text-sm border rounded-md focus:border-black focus:bg-transparent outline-none"
                    />
                  </div>
                
                </div>

                <button
                  type="button"
                  onClick={ handlePlaceOrder}
                  className="mt-8 w-40 py-3.5 text-sm bg-pink-600 text-white rounded-md hover:bg-gradient-to-br from-blue-700 to-blue-400 transition duration-500 transform tracking-wide"
                >
                  Pay{" "}
                </button>
              </form>
            </div>

            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="text-3xl font-bold text-gray-800">$ {orderDetails?.totalPrice}</h2>

              <ul className="text-gray-800 mt-8 space-y-3">
                
                <li className="flex flex-wrap gap-4 text-sm">
                Quantity {" "}
                  <span className="ml-auto font-bold">{orderDetails?.quantity}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax <span className="ml-auto font-bold">$00.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                  Total <span className="ml-auto">{orderDetails?.totalPrice}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
