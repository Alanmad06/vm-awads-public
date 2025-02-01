'use client'

import SignOutButton from "@/components/signOutButton";
import NavigationButton from "@/components/navigationButton";
import styles from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
    <div className={styles.nav}>
      <NavigationButton/>
      <SignOutButton/>
      </div>
      {children}
    </>
  );
}