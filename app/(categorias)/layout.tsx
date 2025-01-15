'use client'

import { useRouter , usePathname } from "next/navigation";
import navigationList from '@/lib/navigation';
import { useCandidates } from "@/context/candidatesContext";


export default function Layout({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const pathname = usePathname();
  const { dispatch} = useCandidates();

      
    return (
      <>
      <button onClick={()=>{
        const node = navigationList.find(pathname!);
        if (node instanceof Object) {
          dispatch({ type: 'REMOVE_CANDIDATE' });
          router.push(node.prev?.data.toString() ?? '/'); 
        
         
        }
        
      }}>Go Back</button>
       {children}
      </>
        );
  }