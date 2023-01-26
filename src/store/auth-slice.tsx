import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import User from "../models/User";
import fetchError from "../models/UserResponseError";

interface authState {
    user: User,
    token: string,
    isLoggedIn: boolean,
}

interface UserResponse {
    users: User[]
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

export const fetchUserByToken = createAsyncThunk<UserResponse, string, { rejectValue: fetchError }>(
    'getUserByToken',
    async (userToken: string, thunkApi) => {

            let token = { idToken: userToken }
                const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDYL8MXKHBY8-munFeQbKZd43SbAZneRR4`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(token)
                })
            if(response.status === 400) {
                return thunkApi.rejectWithValue((await response.json()) as fetchError)
            }
            return ( await response.json()) as UserResponse;
        }
)

const initialAuthState: authState = {
    user: { email: '', displayName: '', idToken: ''},
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
            state.isLoggedIn = true
        },
        logout: () => {
            localStorage.removeItem('token')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserByToken.fulfilled, (state, action) => {
            console.log(action.payload.users[0]) 
            state.user = { 
                displayName: action.payload.users[0].displayName,
                email: action.payload.users[0].email,
                idToken: action.payload.users[0].idToken,
            }

        }) 
        builder.addCase(fetchUserByToken.rejected, (state, action) => {
            if(action.payload) {
                console.log(action.error)
                console.log(action.payload.error.message)
            } else {
                console.log(action.error)
            }
        })
    },
})

export const authActions = authSlice.actions;
export const authStatus = (state: RootState) => state.auth.isLoggedIn
export const loggedUser = (state: RootState) => state.auth.token
export const userData = (state: RootState) => state.auth.user
export default authSlice.reducer;