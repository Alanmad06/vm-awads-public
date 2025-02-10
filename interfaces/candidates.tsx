export interface Candidate {
    id?: string;
    src?: string;
    alt?: string;
    name : string;
}

export interface selectedCandidate{
    category : string;
    candidate : Candidate
}

export interface actionCandidate {
    type : string;
    payload? : selectedCandidate | selectedCandidate[];
}

export interface CandidatesContextProps {
    candidates: selectedCandidate[];
    dispatch: React.Dispatch<actionCandidate>;
}

export interface User {
    id : string,
    name : string,
    email : string,
    password? : string
  
}

export interface verificationCode{
    id ?: string,
    email ?: string ,
    code ?: string,
    expires_at ?: Date,
    created_at ?: Date
}


export interface votos {
    category: string;
    names: string | string[];
  };