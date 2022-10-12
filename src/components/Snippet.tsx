export default function Snippet({ snippetLink, snippetTitle, snippetDescription }: any) {
    return (

        <a href={snippetLink}
            className="border-2 border-gray-200 dark:border-gray-700 rounded-md p-4 flex flex-col gap-4"
        >
            <p className="text-xl font-medium">{snippetTitle}</p>
            <p className="text-gray-500">{snippetDescription}</p>
        </a>
    )
}