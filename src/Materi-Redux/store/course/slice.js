import { createSlice } from "@reduxjs/toolkit";
import * as actionAct from './action'

export const courseSlice = createSlice({
    name: 'course',
    initialState: {
        loading: false,
        entities: [],
        entity: {
            createdAt: '',
            title: '',
            image: '',
            description: '',
            price: '',
            id: '',
        },
        error: null
    },
    reducers: {
        // untuk mengubah state
    },
    extraReducers: (builder) => {
        builder
            .addCase(actionAct.getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(actionAct.getAll.fulfilled, (state, action) => {
                state.loading = false
                state.entities = action.payload
            })
            .addCase(actionAct.getAll.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default courseSlice.reducer