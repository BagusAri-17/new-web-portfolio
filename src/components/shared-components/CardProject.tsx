import Image from "next/image"

export const CardProject = () => {
    return (
        <>
            <div className="bg-gray-800 rounded-3xl overflow-hidden outline outline-2 outline-white/20 -outline-offset-2 px-8 pt-8 flex flex-col h-full">
                <div className="flex-grow flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-xl font-semibold">Umah Buku</h3>
                        <p className="text-sm text-white/60 line-clamp-2">Easily create custom watermarks for your images. Adjust text, size, position, and style to personalize your watermark.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-sm py-1 px-3 bg-purple-300/10 text-purple-300 rounded-full">Typescript</span>
                        <span className="text-sm py-1 px-3 bg-purple-300/10 text-purple-300 rounded-full">Node.js</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="inline-flex text-sm items-center justify-center flex-1 px-3 h-9 border border-white/15 rounded-full">Live Demo</button>
                        <button className="inline-flex text-sm items-center justify-center flex-1 px-3 h-9 border border-white/15 rounded-full">Source Code</button>
                    </div>
                </div>
                <Image className="w-full h-auto mt-4 transition duration-300 hover:scale-110" src="/images/dark-saas-landing-page.png" alt="" width={400} height={400} />
            </div>
        </>
    )
}