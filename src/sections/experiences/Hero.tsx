import React from "react";

import { CardExperience } from "@/components/shared-components/CardExperience";
import { HeaderSection } from "@/components/shared-components/HeaderSection";
import { Tag } from "@/components/shared-components/Tag";

const experiences = [
    {
        title: 'Digistar Class Telkom Indonesia - Web Developer',
        time: 'Jun 2023 - Aug 2023',
        place: 'Indonesia',
        tag: ['Internship', 'Remote'],
        description: [
            'Gained and enhanced skills in web development.',
            'Developed both soft and hard skills through practical experience.'
        ],
    },
    {
        title: 'Kantor Desa Cemagi - Staff IT',
        time: 'Jul 2023 - Sep 2023',
        place: 'Bali, Indonesia',
        tag: ['Internship'],
        description: [
            'Contributed to the development of Desa Wisata Cemagi as a core internship project, focusing on building the frontend of the tourism website using React.JS and TailwindCSS.',
            'Collaborated with a team to create a user-friendly and visually appealing digital tourism platform.',
            'Assisted the community in Desa Cemagi with technical and administrative tasks related to correspondence.'
        ],
    },
    {
        title: 'Alterra Academy - Complete Front-End Engineer Career with ReactJS',
        time: 'Aug 2023 - Dec 2023',
        place: 'Indonesia',
        tag: ['Study Independent', 'Remote'],
        description: [
            'Studied React and its applications in front-end development.',
            'Enhanced both soft and hard skills, including teamwork, time management, and front-end expertise, through hands-on experience with mini and final projects.'
        ],
    },
    {
        title: 'PT. Hidata Teknologi Digital - Full Stack Developer',
        time: 'Feb 2024 - May 2024',
        place: 'Jakarta, Indonesia',
        tag: ['Internship', 'Remote'],
        description: [
            'Designed and developed Hidata.id, the official company website, with responsive and interactive layouts to enhance user engagement.',
            'Translated research insights into user-centric UI/UX designs, improving the website’s functionality and aesthetics.',
            'Collaborated with the team to deliver client projects, ensuring seamless implementation and high-quality outcomes.'
        ],
    },
    {
        title: 'Invention Udayana - Lead Web Team & Full Stack',
        time: 'Mar 2024 - May 2024',
        place: 'Bali, Indonesia',
        tag: ['Committee'],
        description: [
            'Led the web development team in creating the Invention Udayana website, ensuring smooth collaboration and timely delivery.',
            'Developed the project as a Full Stack Developer, including slicing designs into interactive and functional web components.',
            'Oversaw both frontend and backend development to meet project goals and deliver a seamless user experience.'
        ],
    },
    {
        title: 'Web HIMAIF Udayana - Back-End Web',
        time: 'Jun 2024 - Dec 2024',
        place: 'Bali, Indonesia',
        tag: ['Committee'],
        description: [
            'Developed and maintained the backend of the HIMAIF Udayana website using Laravel, adhering to the MVC architecture.',
            'Built and optimized database structures for seamless data management and retrieval.',
            'Collaborated with the team to implement backend logic supporting website functionality and user interactions.'
        ],
    },
    {
        title: 'CV. Maiharta - Full Stack Developer',
        time: 'Jun 2025 - Present',
        place: 'Bali, Indonesia',
        tag: ['Full Time'],
        description: [
            'Managed end-to-end website development for various clients, taking ownership of planning, coding, and testing phases to deliver projects according to client specifications.',
            'Worked closely with the deployment team to ensure smooth website launches, contributing to technical setup, troubleshooting, and optimization for live environments.',
            'Developed customized web solutions that addressed specific client needs and objectives, incorporating features such as responsive design, database integration, and dynamic content delivery.'
        ],
    },
    {
        title: 'NEWGEN INNOVATION SDN. BHD. - Full Stack Developer',
        time: 'Mar 2026 - Present',
        place: 'Kuala Lumpur, Malaysia',
        tag: ['Full Time', 'Remote'],
        description: [
            'Architected and delivered comprehensive end-to-end web solutions for diverse client requirements, overseeing the entire software development lifecycle (SDLC)—from system design and logic implementation to rigorous testing and deployment.',
            'Engineered high-performance, dynamic platforms by integrating complex database schemas and responsive front-end architectures, resulting in improved system scalability and user experience for client business objectives.',
            'Collaborated cross-functionally to streamline deployment pipelines and application troubleshooting, ensuring high system availability and robust performance in production environments.'
        ],
    },
];

export const Hero = () => {
    return (
        <>
            <section className="py-32 md:py-48 lg:py-60">
                <div className="container">
                    <div className="flex flex-col gap-y-8 max-w-3xl mx-auto items-center">
                        <HeaderSection introduction={'My Experiences'} heading={'I’ve gained valuable experiences that have shaped my career.'} subHeading={'Here are some key roles and milestones that have greatly contributed to my growth and development.'} />
                        <div className="flex flex-wrap gap-2 justify-center">
                            <Tag label={'Internship'} />
                            <Tag label={'Study Independent'} />
                            <Tag label={'Remote'} />
                            <Tag label={'Part Time'} />
                            <Tag label={'Full Time'} />
                            <Tag label={'Committee'} />
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col gap-y-4">
                        {experiences.map((item, index) => (
                            <CardExperience key={index} title={item.title} time={item.time} place={item.place} tag={item.tag} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}