const footerLinks = [
    // {
    //     title: 'Youtube',
    //     link: ''
    // },
    {
        title: 'Instagram',
        link: ''
    },
    {
        title: 'LinkedIn',
        link: ''
    },
    {
        title: 'Github',
        link: ''
    },
]

export const Footer = () => {
    return (
        <>
            <footer className="relative z-10 overflow-x-clip pt-12">
                <div className="-z-10 absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-purple-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
                <div className="container">
                    <div className="border-t border-white/15 py-6 flex flex-col md:flex-row md:justify-between items-center gap-8">
                        <div className="text-sm text-white/40">&copy; 2024. All rights reserved.</div>
                        <nav className="flex flex-col md:flex-row items-center gap-8">
                            {footerLinks.map((item, index) => (
                                <a key={index} href={item.link} className="inline-flex items-center gap-1.5">
                                    <span className="text-sm font-semibold">{item.title}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}