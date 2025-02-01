'use client'

import { actionCandidate, CandidatesContextProps, selectedCandidate } from '@/interfaces/candidates';
import React, { createContext, useContext, ReactNode, useReducer, useEffect, useState } from 'react';
import reducer from '@/lib/reducer/candidatesReducer';
import VmAnimation from '@/components/vmAnimation';

const CandidatesContext = createContext<CandidatesContextProps | undefined>(undefined);

export const CandidatesProvider = ({ children }: { children: ReactNode }) => {

    
    const initialState: selectedCandidate[] = [];

    const [candidates, dispatch] = useReducer(reducer, initialState);
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch('/api/getvotes'); 
                const data = await response.json();
                
                console.log('Data from API:', data);

                if(!data.result.votes){
                    console.log('no se encontraron votos')
                    setLoading(true)
                    return
                }
               
                const votesArray = Object.keys(data.result.votes).map(key => ({
                    ...data.result.votes[key]
                }));

                console.log('Processed votes:', votesArray);

               
                dispatch({ type: 'SET_CANDIDATES', payload: votesArray });
                setLoading(true)
            } catch (error) {
                console.error('Failed to fetch candidates', error);
            }
        };

        fetchCandidates();
    }, []);

    return (
        <CandidatesContext.Provider value={{ candidates, dispatch }}>
          
            {loading ? children : <VmAnimation/>}
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
