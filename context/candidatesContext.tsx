'use client'

import { actionCandidate, CandidatesContextProps, selectedCandidate } from '@/interfaces/candidates';
import React, { createContext, useContext, ReactNode, useReducer, useEffect } from 'react';
import reducer from '@/lib/reducer/candidatesReducer';

const CandidatesContext = createContext<CandidatesContextProps | undefined>(undefined);

export const CandidatesProvider = ({ children }: { children: ReactNode }) => {

    // Estado inicial vacío hasta que se carguen los datos
    const initialState: selectedCandidate[] = [];

    const [candidates, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch('/api/getvotes'); 
                const data = await response.json();
                
                console.log('Data from API:', data);

                // Convertir los datos en un array si es necesario
                const votesArray = Object.keys(data.result.votes).map(key => ({
                    ...data.result.votes[key]
                }));

                console.log('Processed votes:', votesArray);

                // Enviar los datos a useReducer
                dispatch({ type: 'SET_CANDIDATES', payload: votesArray });
            } catch (error) {
                console.error('Failed to fetch candidates', error);
            }
        };

        fetchCandidates();
    }, []);

    return (
        <CandidatesContext.Provider value={{ candidates, dispatch }}>
            {children}
        </CandidatesContext.Provider>
    );
};

export const useCandidates = (): CandidatesContextProps => {
    const context = useContext(CandidatesContext);
    console.log('context', context);

    if (!context) {
        throw new Error('useCandidates must be used within a CandidatesProvider');
    }
    return context;
};
