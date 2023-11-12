import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker"

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async (...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map((album) => {
                        return { type: 'Album', id: album.id }
                    })
                    tags.push({type: 'UsersAlbums', id: arg.id})
                    return tags
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {userId: user.id},
                        method: 'GET'
                    }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{type: 'Album', id: arg.id}]                    
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, arg) => [{type: 'Album', id: arg.id}],
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE',
                    }
                }
            }),

        }
    }
})

// DEV ONLY (debuging purposes)
function pause(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export const { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } = albumsApi
export { albumsApi }