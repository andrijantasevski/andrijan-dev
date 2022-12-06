interface Props {
    snippetLink: string | undefined
    snippetTitle: string
    snippetDescription: string
}

const Snippet: React.FC<Props> = ({ snippetLink, snippetTitle, snippetDescription }) => {
    return (

        <a href={snippetLink}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-md p-4 flex flex-col gap-4"
        >
            <p className="text-xl font-medium">{snippetTitle}</p>
            <p className="text-gray-500">{snippetDescription}</p>
        </a>
    )
}

export default Snippet;