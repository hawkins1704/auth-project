import axios from "axios";

export const login = (credentials: { email: string; password: string }) => {
    return axios.post(
        "https://dummyjson.com/auth/login",
        {
            username: credentials.email,
            password: credentials.password,
            expiresInMins:30,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
