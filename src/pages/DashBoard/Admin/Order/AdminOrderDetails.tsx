/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetOrdersAdminQuery } from '../../../../redux/features/order/order';

const AdminOrderDetailes = () => {
     const { data, error, isLoading } =useGetOrdersAdminQuery (undefined);
    
      const orders = data?.data || [];
      console.log(orders);
    return (
        <div>
      
      <div>
        <h1 className="text-3xl p-4 text-center"> admin Order History</h1>

        <div className="text-gray-900 bg-gray-200 px-3 py-4 flex justify-center">
          {isLoading ? (
            <p className="text-xl">Loading users...</p>
          ) : error ? (
            <p className="text-xl text-red-500">Failed to load users</p>
          ) :orders && orders.length > 0 ? (
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead>
                <tr className="border-b bg-gray-300">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">status</th>
                  <th className="text-left p-3 px-5">Total Price</th>
                  <th className="p-3 px-5 text-right">Order History</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order: any) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    {/* <td className="p-3 px-5">{order.name}</td> */}
                    <td className="p-3 px-5">{order?.email}</td>
                    <td className="p-3 px-5">{order?.status}</td>
                    <td className="p-3 px-5">{order?.totalPrice}</td>
                    <td className="p-3 px-5 flex justify-end gap-2">
                      {order?.transaction?.sp_message
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-xl text-gray-600">No users found.</p>
          )}
        </div>
      </div>
    </div>
    );
};

export default AdminOrderDetailes;