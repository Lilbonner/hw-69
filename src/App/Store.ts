import { configureStore } from '@reduxjs/toolkit';
import tvShowReducer from '../container/showSlice.tsx'

export default configureStore({
    reducer: {
        tvShow: tvShowReducer,
    },
});