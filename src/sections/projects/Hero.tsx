import { CardProject } from "@/components/shared-components/CardProject"

export const Hero = () => {
    return (
        <>
            <section className="py-32 md:py-48 lg:py-60">
                <div className="container">
                    <div className="flex flex-col gap-y-8 max-w-3xl mx-auto">
                        <span className="text-center uppercase font-semibold tracking-widest text-purple-300">My Real Result</span>
                        <div className="flex flex-col gap-y-4 text-center">
                            <h2 className="text-2xl md:text-4xl font-bold">Highlighted projects from practical results to real-world solutions.</h2>
                            <p className="text-white/60 text-sm md:text-base">Explore some of the projects I've worked on. Some of them are open source, you can see the code and are free to do whatever you want with it.</p>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        <CardProject />
                    </div>
                </div>
            </section>
        </>
    )
}