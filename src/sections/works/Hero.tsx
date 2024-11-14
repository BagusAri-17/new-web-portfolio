import { CardExperience } from "@/components/shared-components/CardExperience"

export const Hero = () => {
    return (
        <>
            <section className="py-32 md:py-48 lg:py-60">
                <div className="container">
                    <div className="flex flex-col gap-y-8 max-w-3xl mx-auto items-center">
                        <span className="text-center uppercase font-semibold tracking-widest text-purple-300">My Experience Jobs</span>
                        <div className="flex flex-col gap-y-4 text-center">
                            <h2 className="text-2xl md:text-4xl font-bold">My career as a software engineer has been enriched with invaluable experiences.</h2>
                            <p className="text-white/60 text-sm md:text-base">These are a multitude of historical experiences that I have gone through until now, and they have significantly contributed to my ongoing personal growth.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-sm py-1 px-3 bg-purple-300/10 text-purple-300 rounded-full">Internship</span>
                            <span className="text-sm py-1 px-3 bg-purple-300/10 text-purple-300 rounded-full">Remote</span>
                            <span className="text-sm py-1 px-3 bg-purple-300/10 text-purple-300 rounded-full">Committee</span>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col">
                        <CardExperience />
                    </div>
                </div>
            </section>
        </>
    )
}