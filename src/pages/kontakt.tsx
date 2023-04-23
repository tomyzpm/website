import Layout from "@/components/Layout";
import { react as ReactContent } from '../../content/kontakt.md';
import Head from "next/head";

export default function ContactUs() {
  return (
   <Layout>
       <Head>
           <title>ToMyZPM.pl - Kontakt</title>
       </Head>
    <div className="w-4/5 mx-auto mt-5">
        <h1 className="text-3xl">Kontakt</h1>
        <div className="prose max-w-none">
            <ReactContent />
        </div>

    </div>
   </Layout>
  )
}
