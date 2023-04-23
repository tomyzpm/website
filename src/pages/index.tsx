import Layout from "@/components/Layout";
import Link from "next/link";
import * as fs from "fs";
import matter from 'gray-matter'
import Head from "next/head";

export default function Home({posts}) {
  return (
   <Layout>
    <div className="w-4/5 mx-auto mt-5">
        <Head>
            <title>ToMyZPM.pl - Aktualności</title>
        </Head>
        <h1 className="text-3xl">Aktualności</h1>
       <div className="grid md:grid-cols-2 xl:grid-cols-4 mt-10">
           {posts.map(({title, date, slug, thumbnailUrl}) => (
               <Link key={slug} href={`/post/${slug}`} className="hover:shadow transition">
                   <img src={thumbnailUrl} alt="" className="object-cover w-full h-52"/>
                   <div className="pt-5 pb-2 px-2 border">
                       <span className="text-lg">{title}</span>
                       <div className="mt-3 flex justify-between">
                           <span className="text-sm font-sans">{date}</span>
                       </div>
                   </div>
               </Link>
           ))}
       </div>
    </div>
   </Layout>
  )
}


export async function getStaticProps() {
    // List of files in blgos folder
    const filesInBlogs = fs.readdirSync('./content/posts')

    // Get the front matter and slug (the filename without .md) of all files
    const posts = filesInBlogs.map(filename => {
        const file = fs.readFileSync(`./content/posts/${filename}`, 'utf8')
        const matterData = matter(file)

        return {
            ...matterData.data, // matterData.data contains front matter
            slug: filename.slice(0, filename.indexOf('.'))
        }
    })

    return {
        props: {
            posts
        }
    }

}
