import { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/todoContext";
import { AES, enc } from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string;

const LOCAL_STORAGE_KEY = 'TODOS_DATA'


export const useSaveTodos = () => {

    const { state, dispatch } = useContext(TodoContext);

    const handleChangesTodo = () => {
        const value = AES.encrypt(JSON.stringify(state), SECRET_KEY)

        localStorage.setItem(LOCAL_STORAGE_KEY, value.toString())
    }

    //monitorar todas as mudanças
    useEffect(() => {
        handleChangesTodo()
    }, [state])
}