import { Tag } from "./Tag";

interface ExperienceProps {
    title: string,
    time: string,
    place: string,
    tag: string,
    description: Array<string>,
}

export const CardExperience: React.FC<ExperienceProps> = ({title, time, place, tag, description}) => {
    return (
        <>
            <div className="bg-gray-800 rounded-3xl outline outline-2 outline-white/20 -outline-offset-2 p-8">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <div className="flex flex-col gap-y-1 lg:flex-row lg:gap-x-4 items-start lg:items-center">
                            <div className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                                <span className="text-sm text-white/60">{time}</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span className="text-sm text-white/60">{place}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tag label={tag} />
                    </div>
                    <ul className="flex flex-col gap-y-1 list-disc list-inside">
                        {description.map((item, index) => (
                            <li key={index} className="text-sm lg:text-base text-white/60">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}