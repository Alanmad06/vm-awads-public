'use client'

import {  CandidatesContextProps } from '@/interfaces/candidates';
import React, { createContext, useContext, ReactNode, useReducer } from 'react';
import reducer from '@/lib/reducer/candidatesReducer';



const CandidatesContext = createContext<CandidatesContextProps | undefined>(undefined);





export const CandidatesProvider = ({ children }: { children: ReactNode }) => {
    /* localStorage.getItem('candidates') ? JSON.parse(localStorage.getItem('candidates') as string)  */
    const [ candidates, dispatch ] = useReducer(reducer,[]);

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