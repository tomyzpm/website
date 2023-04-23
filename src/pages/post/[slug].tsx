import Layout from "@/components/Layout";
import ReactMarkdown from 'react-markdown'
import * as fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

export default function Post({frontmatter, markdown}) {
    return (
        <Layout>
            <Head>
                <title>ToMyZPM.pl - {frontmatter.title}</title>
            </Head>
            <div className="pt-10 w-1/2 mx-auto mt-5">
                <h1 className="text-4xl text-center font-bold">{frontmatter.title}</h1>
                <span className="block text-center mt-2 mb-4">{frontmatter.date}</span>
                <hr />
                <div className="prose mt-10 mx-auto pb-20">
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                </div>

            </div>
        </Layout>
    )
}



export async function getStaticProps({ params: { slug } }) {
    const fileContent = matter(fs.readFileSync(`./content/posts/${slug}.md`, 'utf8'))
    let frontmatter = fileContent.data
    const markdown = fileContent.content

    return {
        props: { frontmatter, markdown }
    }
}

export async function getStaticPaths() {
    const filesInProjects = fs.readdirSync('./content/posts')

    const paths = filesInProjects.map(file => {
        const filename = file.slice(0, file.indexOf('.'))
        return { params: { slug: filename }}
    })

    return {
        paths,
        fallback: false // This shows a 404 page if the page is not found
    }
}