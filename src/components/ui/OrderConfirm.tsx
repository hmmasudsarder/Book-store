import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const OrderConfirm = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  return (
    <div className="flex mt-20 flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      {/* Confetti Effect (Runs for 10 seconds) */}
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={300} />}

      {/* Congratulations Text */}
      <h1 className="text-4xl font-bold mt-8">🎉 Congratulations 🎉</h1>
      
      {/* Success Message */}
      <p className="text-xl font-semibold mt-4">
        Your order has reached us successfully, our representative will call your number shortly. see the dashboard your order update
      </p>
    </div>
  );
};

export default OrderConfirm;
