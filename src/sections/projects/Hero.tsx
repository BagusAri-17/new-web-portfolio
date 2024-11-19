import React from "react";

import { CardProject } from "@/components/shared-components/CardProject";
import { HeaderSection } from "@/components/shared-components/HeaderSection";
import { Tag } from "@/components/shared-components/Tag";

import umahBukuImage from "@/assets/images/projects/project-umahbuku.png";
import myJournalsImage from "@/assets/images/projects/project-myjournals.png";
import wisataCemagiImage from "@/assets/images/projects/project-wisatacemagi.png";
import sportInspireIDImage from "@/assets/images/projects/project-sportinspireid.png";
import himaifUdayanaImage from "@/assets/images/projects/project-himaifudayana.png";
import inventionImage from "@/assets/images/projects/project-invention.png";
import hidataImage from "@/assets/images/projects/project-hidata.png";

const projects = [
    {
        title: 'Umah Buku',
        description: "Umah Buku is a website offering a diverse collection of storybooks, including children's stories, novels, and short stories, across various genres for visitors to enjoy.",
        tag: ['Javascript','Tailwind', 'React JS', 'Firebase'],
        linkDemo: 'https://mini-project-umah-buku.vercel.app/',
        linkCode: 'https://github.com/BagusAri-17/mini-project_umah-buku',
        image: umahBukuImage
    },
    {
        title: 'My Journals',
        description: 'My Journals is a website offering a variety of journals aligned with the nine streams of Computer Science, Udayana University.',
        tag: ['Javascript','Tailwind', 'React JS', 'Firebase'],
        linkDemo: 'https://my-journals.vercel.app/',
        linkCode: 'https://github.com/BagusAri-17/My-Journals',
        image: myJournalsImage
    },
    {
        title: 'Wisata Cemagi',
        description: 'Wisata Cemagi is a website designed to showcase various tourist attractions in Cemagi Village, created as part of a street vendor project.',
        tag: ['Javascript','Tailwind', 'React JS'],
        linkDemo: 'https://wisata-cemagi.vercel.app/',
        linkCode: '',
        image: wisataCemagiImage
    },
    {
        title: 'Sport Inspire ID',
        description: 'Sport Inspire ID is a static website offering comprehensive information about sports in Indonesia, including articles, news, tips, and details on available sports. It was developed for a competition.',
        tag: ['Javascript','Tailwind', 'React JS'],
        linkDemo: 'https://sport-inspire-id.netlify.app/',
        linkCode: 'https://github.com/BagusAri-17/Sport-Inspire-ID',
        image: sportInspireIDImage
    },
    {
        title: 'Web HIMAIF Udayana',
        description: 'HIMAIF Udayana Web is a website provides information about the student association for Computer Science and Computer Science programs at Udayana University.',
        tag: ['PHP','Tailwind', 'Laravel'],
        linkDemo: 'https://himaif-udayana.com/',
        linkCode: '',
        image: himaifUdayanaImage
    },
    {
        title: 'Invention Udayana',
        description: 'Invention Udayana is a website used for registration of participants in invention competitions.',
        tag: ['PHP','Tailwind', 'Laravel'],
        linkDemo: 'https://invention-udayana.com/',
        linkCode: '',
        image: inventionImage
    },
    {
        title: 'Hidata Web Company',
        description: 'Hidata is a website offering services, training, and consultancy in data and technology, created as part of an internship project.',
        tag: ['Figma', 'Javascript', 'Tailwind', 'React JS', 'Chakra UI', 'Supabase'],
        linkDemo: 'https://hidata.id/',
        linkCode: '',
        image: hidataImage
    }
];

export const Hero = () => {
    return (
        <>
            <section className="py-32 md:py-48 lg:py-60">
                <div className="container">
                    <div className="flex flex-col gap-y-8 max-w-3xl mx-auto items-center">
                        <HeaderSection introduction={'My Results'} heading={'Showcasing My Work and Creations across Various Fields.'} subHeading={'Take a look at some of the projects I’ve built, demonstrating my skills and passion for solving real-world challenges through innovative solutions.'} />
                        <div className="flex flex-wrap gap-2 justify-center">
                            <Tag label={'Front-End'} />
                            <Tag label={'Back-End'} />
                            <Tag label={'Full Stack'} />
                            <Tag label={'Design'} />
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {projects.map((item, index) => (
                            <CardProject key={index} title={item.title} description={item.description} tag={item.tag} linkDemo={item.linkDemo} linkCode={item.linkCode} image={item.image} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}