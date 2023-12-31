import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from '@faker-js/faker'

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async (...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map((photo) => {
                        return {type: 'Photo', id: photo.id}
                    })
                    tags.push({type: 'AlbumPhoto', id: arg.id})
                    return tags
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {albumId: album.id},
                        method: 'GET'
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, arg) => [{type: 'AlbumPhoto', id: arg.id}],
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: {
                            url: faker.image.abstract(150, 150, true),
                            albumId: album.id
                        }
                    }
                }
            }),
            deletePhoto: builder.mutation({
                invalidatesTags: (result, error, arg) => [{type: 'Photo', id: arg.id}],
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE'
                    }
                }
            })
        }
    }
})

// DEV ONLY (debuging purposes)
function pause(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export const { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi
export { photosApi }