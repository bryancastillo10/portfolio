// This is recommended for external servers only since the function can
// only be used at a client compoent
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WorkAndEducationType } from "@/app/api/about/route";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath:'api',
    tagTypes:["WorkAndEducation"],
    endpoints: (build) => ({
        getWorkAndEducation: build.query<WorkAndEducationType, void>({
            query: () => "/about",
            providesTags:["WorkAndEducation"]
        }), 
    }),
});

export const { useGetWorkAndEducationQuery } = api;