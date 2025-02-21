import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/movieSlice";

export const store = configureStore({
    reducer: {
        // loading: loadingSlice,
        movie: movieSlice,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;