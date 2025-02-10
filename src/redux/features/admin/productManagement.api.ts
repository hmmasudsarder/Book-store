import {  TResponseRedux } from "../../../types/global";
import { TProduct } from "../../../types/productManagement.type";
import { baseApi } from "../../api/baseApi";



const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // query: (args) => {
      //   const params = new URLSearchParams();

      //   if (args) {
      //     args.forEach((item: TQueryParam) => {
      //       params.append(item.name, item.value as string);
      //     });
      //   }

      query: (args) => {
        const params = new URLSearchParams();

        // Expecting args to be an object and iterating over its entries
        if (args && typeof args === "object") {
          Object.entries(args).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
              params.append(key, value.toString());
            }
          });
        }


        return {
          url: '/products',
          method: 'GET',
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
    }),
    // getAcademicFaculties: builder.query({
    //   query: () => {
    //     return { url: '/academic-faculties', method: 'GET' };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    updatedProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/${id}`, 
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct:builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["product"]
    })
    

 
  }),
});

export const {
 useGetAllProductsQuery,
 useAddProductMutation,
 useUpdatedProductMutation,
 useDeleteProductMutation

} = productManagementApi;
