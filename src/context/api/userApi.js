import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({
        url: "/users/search",
        params,
      }),
      providesTags: ["User"],
    }),
    //Login
    login: build.mutation({
      query: (formData) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: formData,
      }),
    }),
    // Post request
    createUser: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Patch request
    updateUser: build.mutation({
      query: ({ _id, body }) => ({
        url: `/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Delete request
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginMutation,
  useDeleteUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
} = userApi;
