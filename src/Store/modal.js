import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal : false,
        modalContent: '',
    },
    reducers : {
        closeModal(state) {
            state.showModal = false
        },
        openModal(state) {
            state.showModal = true
        },
        setContent(state, action) {
            state.modalContent = action.payload
        }
    }
});

export default modalSlice.reducer;
export const ModalAction = modalSlice.actions;

