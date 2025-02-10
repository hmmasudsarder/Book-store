/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetRevenueDataQuery } from "../../../../redux/features/admin/order/orderManagement.api";

const AdminHome = () => {
  const { data,  } = useGetRevenueDataQuery(undefined);
  const revenue = data?.data || [];
  console.log(revenue);

  return (
    <div>
      <h1 className="text-4xl text-black font-bold text-center mt-10">
        Well Come to Admin dashboard
      </h1>
      <h1 className="text-1xl text-black text-center mt-10">
        Explore the features left side navbar
      </h1>
      <div className="max-w-4xl mx-auto mt-14 rounded-2xl">
        <h2 className="text-center text-4xl font-semibold">Total Revenue: $ {revenue.totalRevenue}</h2>
      </div>
    </div>
  );
};

export default AdminHome;
