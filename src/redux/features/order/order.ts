import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/orders/create-order",
        method: "POST",
        body: userInfo,
      }),
    }),
    getOrdersAdmin: builder.query({
      query: () => ({
        url: "orders/get-all-orders",
        method: "GET",
      }),
    }),
    getOrdersByUser: builder.query({
      query: () => ({
        url: "orders/get-user-order",
        method: "GET",
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "orders/verify-payment",
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersAdminQuery,
  useVerifyOrderQuery,
  useGetOrdersByUserQuery
} = orderApi;
