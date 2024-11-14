import { Bubble } from "@/components/shared-components/Bubble";
import { Button } from "@/components/shared-components/Button";
import Image from "next/image";

export const Hero = () => {
    return (
        <>
            <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                    <div className="absolute inset-0 -z-30 opacity-5" style={{ 
                        backgroundImage: `url('/images/grain.jpg')`
                    }}></div>
                    <Bubble size={620} />
                    <Bubble size={820} />
                    <Bubble size={1020} />
                    <Bubble size={1220} />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="size-[800px] flex justify-between">
                            <div className="inline-flex">
                                <svg className="text-purple-300 size-28" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="inline-flex mt-40">
                                <svg className="text-purple-300 size-28" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="size-[800px]">
                            <div className="inline-flex mt-[600px]">
                                <svg className="text-purple-300 size-28" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container z-10 relative">
                    <Image className="rounded-full size-[100px] mx-auto" src="https://i.pinimg.com/564x/04/7d/71/047d7192b3e84887d92994fe36004c09.jpg" width={100} height={100} alt="profile-image" />
                    <div className="flex flex-col gap-y-4 mt-8 items-center max-w-lg mx-auto">
                        <h1 className="text-3xl md:text-5xl text-center font-bold tracking-wide">Hello, I'm Bagus Ari</h1>
                        <p className="text-center text-white/60 md:text-lg">A Software Engineering with 2 years experience who trying to specialize in Frontend & UI/UX Design.</p>
                        <div className="flex flex-col md:flex-row md:gap-x-2 items-center gap-y-2 justify-center">
                            <Button link={'/CV_IdaBagusAriWidhiana.pdf'} label={'Download CV'} position={'left'} icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            } />
                            <Button link={'/about'} label={'About Me'} position={'right'} icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            } />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}