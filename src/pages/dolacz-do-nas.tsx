import Layout from "@/components/Layout";
import { react as ReactContent } from '../../content/dolacz-do-nas.md';
import Head from "next/head";

export default function JoinUs() {
  return (
   <Layout>
       <Head>
           <title>ToMyZPM.pl - Dołącz do nas!</title>
       </Head>
    <div className="w-4/5 mx-auto mt-5">
        <h1 className="text-3xl">Dołącz do nas</h1>
        <div className="prose max-w-none">
            <ReactContent />
        </div>
    </div>
   </Layout>
  )
}
