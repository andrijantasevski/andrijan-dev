import type { MDXInstance } from "astro";
import { useEffect, useState, useRef } from "react";
import Snippet from "./Snippet";

interface Frontmatter {
  title: string;
  shortDescription: string;
}

interface Props {
  snippetsArr: MDXInstance<Frontmatter>[];
}

const Snippets: React.FC<Props> = ({ snippetsArr }) => {
  const allSnippets = useRef(snippetsArr);
  const [search, setSearch] = useState("");
  const [filteredSnippets, setFilteredSnippets] = useState(allSnippets.current);

  useEffect(() => {
    setFilteredSnippets(allSnippets.current.filter((snippet: { frontmatter: Frontmatter }) => snippet.frontmatter.title.toLowerCase().includes(search.toLowerCase()) || snippet.frontmatter.shortDescription.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  return (
    <section className="py-4 text-gray-900 dark:text-gray-50">
      <div className="mb-6">
        <h2 className="mb-3 text-2xl font-bold lg:text-3xl">Snippets</h2>
        <p>Useful snippets of code and boilerplate that help me be more productive when I am coding.</p>
      </div>

      <label className="mb-6 flex cursor-pointer items-center rounded-md border-2 border-gray-200 p-2 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border-0 bg-transparent text-gray-900 focus:border-0 focus:ring-0 dark:text-gray-50" type="search" placeholder="Search snippets" />
      </label>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">{filteredSnippets.length === 0 ? <p>No snippets.</p> : filteredSnippets.map((snippet: { frontmatter: Frontmatter; url: string | undefined }, idx) => <Snippet snippetLink={snippet.url} snippetTitle={snippet.frontmatter.title} snippetDescription={snippet.frontmatter.shortDescription} key={idx} />)}</div>
    </section>
  );
};

export default Snippets;
