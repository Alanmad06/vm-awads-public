'use client'

import { useRouter, usePathname } from "next/navigation";
import navigationList from '@/lib/navigation';
import SignOutButton from '@/components/signOutButton'


export default function Layout({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <button onClick={() => {
        const node = navigationList.find(pathname!);
        if (node instanceof Object) {
          router.push(node.prev?.data.toString() ?? '/');
        }
      }}>Go Back</button>
      <SignOutButton/>
      
      {children}
    </>
  );
}