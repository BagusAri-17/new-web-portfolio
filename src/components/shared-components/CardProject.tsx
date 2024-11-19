import Image from "next/image";

import { Button } from "./Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Tag } from "./Tag";


interface ProjectProps {
    title: string,
    description: string,
    tag: Array<any>,
    linkDemo: string,
    linkCode: string,
    image: StaticImport
}

export const CardProject: React.FC<ProjectProps> = ({ title, description, tag, linkDemo, linkCode, image }) => {
    return (
        <>
            <div className="bg-gray-800 rounded-3xl overflow-hidden outline outline-2 outline-white/20 -outline-offset-2 px-8 pt-8 flex flex-col h-full">
                <div className="flex-grow flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <div className="group relative inline-block hover:cursor-pointer">
                            <p className="text-sm text-white/60 line-clamp-2">{description}</p>
                            <p className="invisible group-hover:visible opacity-0 mt-2 group-hover:opacity-100 transition top-full duration-300 bg-purple-300 p-2 rounded absolute text-sm text-white">{description}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tag.map((item, index) => (
                            <Tag key={index} label={item} />
                        ))}
                    </div>
                    {
                        linkDemo && linkCode ?
                            <div className="flex flex-wrap items-center gap-2">
                                <Button link={linkDemo} label={'Live Demo'} position={'left'} icon={null} />
                                <Button link={linkCode} label={'Source Code'} position={'left'} icon={null} />
                            </div> :
                        linkDemo === '' ? 
                            <div>
                                <Button link={linkCode} label={'Source Code'} position={'left'} icon={null} />
                            </div> :
                        linkCode === '' ? 
                            <div>
                                <Button link={linkDemo} label={'Live Demo'} position={'left'} icon={null} />
                            </div> : ''
                    }
                </div>
                <Image className="w-full h-auto mt-4 transition duration-300 hover:scale-110 rounded-t-xl" src={image} alt={title} width={400} height={400} />
            </div>
        </>
    )
} 