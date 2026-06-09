import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000',
    credentials: 'include'
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => `/auth/getprofile`,
      providesTags: ['User'],
    }),
    getConversation: build.query({
      query: () => `/convo/list`,
    }),
    login: build.mutation({
      query: (body) => ({
        url: '/auth/signin',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      })
    })
  }),
})

export const {useGetConversationQuery, useGetProfileQuery, useLoginMutation, useSignUpMutation } = chatApi