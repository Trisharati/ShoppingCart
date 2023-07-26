import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const Context = createContext()

const initialState={
    cartData:[]
}
export const ContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const addData = (index)=>{
    dispatch({type : 'ADD', payload : index})
    }

    const increase=(id)=>{
        console.log('Hello');
        dispatch({type : 'INCREASE',payload : id})
    }
    const decrease=(id)=>{
        dispatch({type : 'DECREASE',payload : id})
    }
    const remove=(id)=>{
        dispatch({type : 'REMOVE',payload : id})
    }

    return (
        <Context.Provider value={{...state,addData,increase,decrease,remove}}>
            {children}
        </Context.Provider>
    )

}