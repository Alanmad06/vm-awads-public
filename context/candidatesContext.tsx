'use client'

import {  actionCandidate, CandidatesContextProps, selectedCandidate } from '@/interfaces/candidates';
import React, { createContext, useContext, ReactNode, useReducer } from 'react';
import reducer from '@/lib/reducer/candidatesReducer';

const CandidatesContext = createContext<CandidatesContextProps | undefined>(undefined);

export const CandidatesProvider = ({ children }: { children: ReactNode }) => {
    /* localStorage.getItem('candidates') ? JSON.parse(localStorage.getItem('candidates') as string)  */
    const [ candidates, dispatch ] = useReducer<selectedCandidate[], [action: actionCandidate]>(reducer,[]);
    console.log('context',candidates)
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