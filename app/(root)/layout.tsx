import Navbar from "../components/Navbar";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lost and Found Platform',
  description:
    'Lost & Found Systeme Management.',
  authors:  {name:'Adnane DOUIDI', url:'https://digiconceptry.com/'},
};


export default function Layout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <>
    
      <main className="">
        <Navbar />

        {children}
    </main>
    </>
    
  );
}