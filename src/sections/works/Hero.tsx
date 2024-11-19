import React from "react";

import { CardExperience } from "@/components/shared-components/CardExperience";
import { HeaderSection } from "@/components/shared-components/HeaderSection";
import { Tag } from "@/components/shared-components/Tag";

const experiences = [
    {
        title: 'Digistar Class Telkom Indonesia - Web Developer',
        time: 'Jun 2023 - Aug 2023',
        place: 'Indonesia',
        tag: 'Remote',
        description: [
            'Gained and enhanced skills in web development.', 
            'Developed both soft and hard skills through practical experience.'
        ],
    },
    {
        title: 'Kantor Desa Cemagi - Staff IT',
        time: 'Jul 2023 - Sep 2023',
        place: 'Bali, Indonesia',
        tag: 'Part Time',
        description: [
            'Developed the frontend of the Desa Wisata Cemagi website as part of an street vendor project assignment.', 
            'Assist in serving the community in Cemagi village regarding correspondence.'
        ],
    },
    {
        title: 'Alterra Academy - Complete Front-End Engineer Career with ReactJS',
        time: 'Aug 2023 - Dec 2023',
        place: 'Indonesia',
        tag: 'Study Independent',
        description: [
            'Studied React and its applications in front-end development.', 
            'Enhanced both soft and hard skills, including teamwork, time management, and front-end expertise, through hands-on experience with mini and final projects.'
        ],
    },
    {
        title: 'PT. Hidata Teknologi Digital - Full Stack Developer',
        time: 'Feb 2024 - May 2024',
        place: 'Jakarta, Indonesia',
        tag: 'Internship',
        description: [
            'Designed and created the layout for the Hidata company website.',
            'Converted Hidata website designs into responsive and interactive web pages.',
            'Collaborated on client projects by contributing to website development and ensuring functional implementation.'
        ],
    },
    {
        title: 'Invention Udayana - Lead Web Team & Full Stack',
        time: 'Mar 2024 - May 2024',
        place: 'Bali, Indonesia',
        tag: 'Committee',
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
        tag: 'Committe',
        description: [
            'Developed and maintained the backend of the HIMAIF Udayana website using Laravel, adhering to the MVC architecture.',
            'Built and optimized database structures for seamless data management and retrieval.',
            'Collaborated with the team to implement backend logic supporting website functionality and user interactions.'
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