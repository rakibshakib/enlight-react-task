import React, { createContext, useReducer } from 'react';
import { fakeData } from '../data/fakeData';
import { reducer } from './Reducer';

const initialState = {
    products: fakeData,
    addedToCart: [],
    quantityCart: 0,
};
export const StateContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product,
        });
    };

    const removeFromCart = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id,
        });
    };
    return (
        <StateContext.Provider
            value={{
                products: state.products,
                addedToCart: state.addedToCart,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
