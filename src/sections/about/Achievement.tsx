import { CardAchievement } from "@/components/shared-components/CardAchievement"
import { HeaderSection } from "@/components/shared-components/HeaderSection"
import { Tag } from "@/components/shared-components/Tag"

const achievement = [
    {
        title: '3RD winner of Poster Design Competition in Soedirman Science Competition (SSC) 11th 2022',
        time: 'September 2022',
        place: 'Soedirman University',
        tag: 'Poster Design',
        link: 'https://drive.google.com/file/d/1VXb3svnelYSi0QP5KpFiq2KexCqoQJJQ/view?usp=sharing'
    },
    {
        title: 'Favorite winner of Web Design Competition in Invention Udayana 2022',
        time: 'November 2022',
        place: 'Udayana University',
        tag: 'Web Design',
        link: 'https://drive.google.com/file/d/1wgigoh0P0pKYpjsZkzNvWAGrErCzKX0F/view?usp=sharing'
    },
    {
        title: '3RD winner of Hackathon in Slash National Competition 2023',
        time: 'June 2023',
        place: 'UPN Veteran Jakarta',
        tag: 'Software',
        link: 'https://drive.google.com/file/d/1yn_ZY4mpnJLEE5VGPvjr8YE3bglgI7OQ/view?usp=sharing'
    },
    {
        title: '2ND winner of Web Design Competition in Tikfest 2023',
        time: 'August 2023',
        place: 'PNJ University',
        tag: 'Web Design',
        link: 'https://drive.google.com/file/d/18QwiTWuebMhFO_UtSD9TReBLp_FQiO2-/view?usp=sharing'
    }
]

export const Achievement = () => {
    return (
        <>
            <section className="py-16 lg:py-24">
                <div className="container">
                    <div className="flex flex-col gap-y-8 max-w-3xl mx-auto items-center">
                        <HeaderSection introduction={'My Achievements'} heading={'Celebrating Milestones and Accomplishments Along My Journey.'} subHeading={'Discover the awards and recognitions I have earned through competitions and projects, showcasing my dedication and passion for excellence.'} />
                        <div className="flex flex-wrap gap-2 justify-center">
                            <Tag label={'Poster Design'} />
                            <Tag label={'Web Design'} />
                            <Tag label={'Software'} />
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