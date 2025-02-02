'use client'

import SignOutButton from "@/components/signOutButton";
import NavigationButton from "@/components/navigationButton";
import styles from "./layout.module.css"
import { CandidatesProvider } from "@/context/candidatesContext";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <CandidatesProvider>
    <div className={styles.nav}>
      <div className={styles.navigation}>
      <NavigationButton forward={false}/>
      <NavigationButton forward={true}/></div>
      
      <SignOutButton/>
      </div>
      {children}
    </CandidatesProvider>
  );
}