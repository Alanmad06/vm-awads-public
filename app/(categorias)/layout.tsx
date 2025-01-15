

import MostarCandidatos from "@/components/mostarCandidatos";
import { CandidatesProvider } from "@/context/candidatesContext";


export default function Layout({ children }: { children: React.ReactNode }) {
      
    return (
      <>
       {children}
      </>
        );
  }