import { create } from "zustand";
import { User } from "../interfaces/user";
import { persist } from "zustand/middleware";


interface AuthState{
    accessToken:string|null,
    user:User|null,
    isAuthenticated:boolean,
    login:()=>void,
    logout:()=>void,

}

/**
PREGUNTAS

1. Como manejar accessToken y refreshToken
    -Aqui mi pregunta es como se refresca la sesion, ya que algunas personas dicen que es necesario tener
     ambos, otros dicen que el refreshToken lo debe tener el backend.
    -Algo que vi en un ejemplo es que se cogia el campo EXP que se tiene al decodificar el JWT para que en una
     funcion se pueda verificar cuanto tiempo queda para que expire, y con eso retornar false si ya no esta activo,
     pero no siento que sea la forma en que se deba hacer.

2. En que punto la app verifica si: HAY TOKEN o TOKEN INVALIDO
    -Entiendo que esto se puede verificar periodicamente o que se puede verificar en la siguiente llamada
     que se le haga al backend, pero no estoy seguro.

3. En que punto se puede obtener datos del usuario sin que sea NO SEGURO
    -Mi idea es guardar los datos del usuario en el localStorage luego de decodificar el accessToken
     pero no se si sea poco seguro.

4. Que datos del usuario debo guardar.
    -Esto quiero hacerlo ya que al estar loggeado quiero tener una pagina en donde pueda ver la info del usuario y poder editarla.
    -Quiza pueda guardar el id y luego hacer una llamada desde la pagina Mi Cuenta.

5. Es mejor que cuando caduque la app me envie al login para loggearme de nuevo, o refrescar el token para que siga loggeado.
6. Que datos debo guardar en el store para poder implementar el loggeo con Google y Apple.

COSAS POR IMPLEMENTAR

1. Servicios de Login, Register, Login with Google, Login with Apple.
2. Verificacion/Refresh del token.
3. Logica en la funcion LOGIN del store.
 */
export const useAuthStore=create<AuthState>()(persist((set)=>({
    accessToken:null,
    user:null,
    isAuthenticated:false,
    login:()=>{
        //Auth logic

    },
    logout:()=>{
        set({
            accessToken:null,
            user:null,
            isAuthenticated:false,
        })
    }

}),{
    name:'auth-storage'
}))