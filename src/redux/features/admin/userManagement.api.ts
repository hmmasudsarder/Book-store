
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    blockUser: builder.mutation({
      query: ({userId }) => ({
        url: `/users/${userId}/block`,
        method: "PATCH"
        // body: data,
      }),
    }),

    // deleteProduct:builder.mutation({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: 'DELETE',
    //   }),
    // })
  }),
});

export const {
    useGetAllUsersQuery,
    useBlockUserMutation
} = userManagementApi;
