import React, { createContext, useContext, useReducer } from "react";

//PREPARING THE DATA LAYAER
export const StateContext = createContext();

//PROVINDING THE DATA OR WRAPING THE CODE FOR DATA LAYER

export const StateProvider = ({reducer , initialState , children})=>{
    return (
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
    )
}


// PULLS THE INFO FROM THE DATA LAYER
export const useStateValue = () => useContext(StateContext)


