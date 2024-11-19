export const CallToAction = () => {
    return (
        <>
            <section className="py-16 lg:py-24">
                <div className="container">
                    <div className="bg-purple-300/50 py-8 px-10 rounded-3xl text-center">
                        <h2 className="text-2xl">Let&apos;s Create something amazing together</h2>
                        <p className="text-sm mt-2">Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.</p>
                        <a href="" className="bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-6">
                            <span className="font-semibold">Connect With Me</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}