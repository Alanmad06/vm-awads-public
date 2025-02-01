'use client'

import SignOutButton from "@/components/signOutButton";
import NavigationButton from "@/components/navigationButton";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <NavigationButton/>
      <SignOutButton/>
      {children}
    </>
  );
}