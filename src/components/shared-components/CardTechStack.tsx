interface TechStackProps {
    icon: JSX.Element,
    name: string
}

export const CardTechStack: React.FC<TechStackProps> = ({icon, name}) => {
    return (
        <>
            <div className="bg-gray-800 rounded-3xl outline outline-2 outline-white/20 -outline-offset-2 p-8">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2 items-center">
                        {icon}
                        <h3 className="text-xl font-semibold">{name}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}