import { create } from "zustand";
import { User } from "../interfaces/user";


interface AuthState{
    token:string|null,
    user:User|null,
    isAuthenticated:boolean,
    login:()=>void,
    logout:()=>void,

}

export const useAuthStore=create<AuthState>()((set)=>({
    token:null,
    user:null,
    isAuthenticated:false,
    login:()=>{},
    logout:()=>{}

}))