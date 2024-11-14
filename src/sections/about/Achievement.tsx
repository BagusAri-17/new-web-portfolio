import { CardAchievement } from "@/components/shared-components/CardAchievement"

const achievement = [
    {
        title: '3rd winner of Poster Design Competition in Soedirman Science Competition (SSC) 11th 2022',
        time: 'September 2022',
        place: 'Soedirman University',
        tag: 'Poster Design',
        link: ''
    },
    {
        title: 'Favourite winner of Web Design Competition in Invention Udayana 2022',
        time: 'November 2022',
        place: 'Udayana University',
        tag: 'Web Design',
        link: ''
    },
    {
        title: '3rd winner of Hackathon in Slash National Competition 2023',
        time: 'June 2023',
        place: 'UPN Veteran Jakarta',
        tag: 'Software',
        link: ''
    },
    {
        title: '2nd winner of Web Design Competition in Tikfest 2023',
        time: 'August 2023',
        place: 'PNJ University',
        tag: 'Web Design',
        link: ''
    }
]

export const Achievement = () => {
    return (
        <>
            <section className="py-16 lg:py-24">
                <div className="container">
                    <div className="flex flex-col gap-y-8 max-w-3xl mx-auto">
                        <span className="text-center uppercase font-semibold tracking-widest text-purple-300">My Achievement</span>
                        <div className="flex flex-col gap-y-4 text-center">
                            <h2 className="text-2xl md:text-4xl font-bold">Highlighted projects from practical results to real-world solutions.</h2>
                            <p className="text-white/60 text-sm md:text-base">Explore some of the projects I've worked on. Some of them are open source, you can see the code and are free to do whatever you want with it.</p>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col gap-y-4">
                        {achievement.map((item, index) => (
                            <CardAchievement key={index} title={item.title} time={item.time} place={item.place} tag={item.tag} link={item.link} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}