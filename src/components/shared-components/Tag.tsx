interface TagProps {
    label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
    return (
        <>
            <span className="text-sm py-1 px-3 bg-purple-300/10 text-purple-300 rounded-full">{label}</span>
        </>
    )
}