'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const headerLinks = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Projects',
        link: '/projects'
    },
    {
        title: 'Works',
        link: '/works'
    },
]

export const Header = () => {
    const currentPath = usePathname();

    return (
        <>
            <header className="flex justify-center items-center fixed z-10 top-3 w-full">
                <div className="border border-white/15 rounded-full bg-white/10 backdrop-blur">
                    <nav className="flex gap-1 p-0.5">
                        {headerLinks.map((item, index) => (
                            <Link key={index} href={item.link} className={`nav-item ${currentPath == item.link ? 'bg-white text-gray-900 hover:bg-gray-200 hover:text-gray-700' : ''}`}>{item.title}</Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}