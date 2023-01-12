import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface authState {
    token: string,
    isLoggedIn: boolean,
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    let initialToken: string = '' ;
    let userLoggedIn = false;
    if(storedToken) {
        initialToken = storedToken;
        userLoggedIn = true;
    }
    return {
        token: initialToken,
        isLoggedIn: userLoggedIn,
    };
}

const initialAuthState: authState = {
    token: retrieveStoredToken().token,
    isLoggedIn: retrieveStoredToken().isLoggedIn,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            localStorage.setItem('token', action.payload)
            state.token = action.payload;
        },
        logout: () => {
            localStorage.removeItem('token')
        }
    }
})

export const authActions = authSlice.actions;
export const authStatus = (state: RootState) => state.auth.isLoggedIn
export const loggedUser = (state: RootState) => state.auth.token
export default authSlice.reducer;