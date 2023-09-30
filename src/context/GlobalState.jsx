import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initalState = {
    transactions: []
}

export const context = createContext()

export const useGlobalContext = () => {
    return useContext(context)
}

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initalState,
        () => {
            const localData = localStorage.getItem("transactions")
            return localData ? JSON.parse(localData) : initalState;
        }
    )

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state))
    }, [state])
    
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })

    }
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }


    return (
        <context.Provider
        value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </context.Provider>
    )
}

