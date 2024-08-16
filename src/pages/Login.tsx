import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { login as apiLogin } from "../services/authService";
import { useNavigate } from "react-router";
export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const login = useAuthStore((state) => state.login);
    const isAuthenticated=useAuthStore((state)=>state.isAuthenticated);
    const navigate = useNavigate();

   useEffect(() => {
    if(isAuthenticated){
        navigate('/')
    }
   }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await apiLogin(credentials);
            login(res.data.token);
            navigate("/");
        } catch (e) {
            console.log("Error during log In: ", e);
            setError(e.response.data.message);
        }
    };
    return (
        <div>
            <h1>Log In</h1>
            <p>You can use: </p>
            <p>
                email:emilys
                <br /> password:emilyspass
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    id=""
                    onChange={handleChange}
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    id=""
                    onChange={handleChange}
                    placeholder="password"
                />
                <input type="submit" value="Log In" />
            </form>
            {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
    );
};
