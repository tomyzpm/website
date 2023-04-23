import Layout from "@/components/Layout";
import { attributes } from '../../content/galeria.md';
import Head from "next/head";

export default function Gallery() {
  return (
   <Layout>
       <Head>
           <title>ToMyZPM.pl - Galeria</title>
       </Head>
    <div className="w-4/5 mx-auto mt-5">
        <h1 className="text-3xl">Galeria</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 mt-10 pb-10">
            {attributes.imagesList.map(({imageUrl, caption, date}) => (
                <div key={imageUrl}>
                    <img src={imageUrl} alt="" className=""/>
                    <div className="py-2">
                        <span className="">
                            {caption}
                            {' '}
                            <span className="text-sm text-gray-600 whitespace-nowrap">({date})</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
   </Layout>
  )
}
