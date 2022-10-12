import { useEffect, useState, useRef } from "react"
import Snippet from "./Snippet";

export default function Snippets(props: any) {
    const allSnippets = useRef(props.snippetsArr)
    const [search, setSearch] = useState("");
    const [filteredSnippets, setFilteredSnippets] = useState(allSnippets.current);

    useEffect(() => {
        setFilteredSnippets(allSnippets.current.filter((snippet: any) => snippet?.frontmatter.title.toLowerCase().includes(search.toLowerCase())))

    }, [search])

    return (
        <section className="py-4 text-gray-900 dark:text-gray-50">
            <div className="w-11/12 lg:w-7/12 2xl:w-5/12 mx-auto">
                <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-3">Snippets</h2>
                    <p>
                        Useful snippets of code and boilerplate that help me be more productive when I am coding.
                    </p>
                </div>

                <label className="flex items-center border-2 border-gray-200 dark:border-gray-700 p-2 rounded-md cursor-pointer mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full text-gray-900 dark:text-gray-50 bg-transparent border-0 focus:border-0 focus:ring-0" type="search" placeholder="Search snippets" />
                </label>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredSnippets.length === 0 ? <p>No snippets.</p> : filteredSnippets.map((snippet: any) => <Snippet snippetLink={snippet.url} snippetTitle={snippet.frontmatter.title} snippetDescription={snippet.frontmatter.shortDescription} key={snippet.frontmatter.id} />)}
                </div>
            </div>
        </section>

    )
}