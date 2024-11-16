interface HeaderSectionProps {
    introduction: string;
    heading: string;
    subHeading: string;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ introduction, heading, subHeading }) => {
    return (
        <>
            <span className="text-center uppercase font-semibold tracking-widest text-purple-300">{introduction}</span>
            <div className="flex flex-col gap-y-4 text-center">
                <h2 className="text-2xl md:text-4xl font-bold">{heading}</h2>
                <p className="text-white/60 text-sm md:text-base">{subHeading}</p>
            </div>
        </>
    )
}