'use client'

import { actionCandidate, Candidate, CandidatesContextProps, selectedCandidate } from '@/interfaces/candidates';
import React, { createContext, useContext, useState, ReactNode, useReducer } from 'react';



const CandidatesContext = createContext<CandidatesContextProps | undefined>(undefined);

const reducer = (state: selectedCandidate[], action: actionCandidate) => {
    switch(action.type){
        case 'ADD_CANDIDATE':
            console.log(state)
            /* localStorage.setItem('candidates', JSON.stringify([...state, action.payload])); */
            return [...state, action.payload];
        case 'REMOVE_CANDIDATE':
            return state.filter(candidate => candidate.candidate.id !== action.payload.candidate.id);
        default:
            return state;
    }
   
}

export const CandidatesProvider = ({ children }: { children: ReactNode }) => {
    /* localStorage.getItem('candidates') ? JSON.parse(localStorage.getItem('candidates') as string)  */
    const [ candidates, dispatch ] = useReducer(reducer,  []);

    return (
        <CandidatesContext.Provider value={{ candidates, dispatch }}>
            {children}
        </CandidatesContext.Provider>
    );
};

export const useCandidates = (): CandidatesContextProps => {
    const context = useContext(CandidatesContext);
    
    if (!context) {
        throw new Error('useCandidates must be used within a CandidatesProvider');
    }
    return context;
};