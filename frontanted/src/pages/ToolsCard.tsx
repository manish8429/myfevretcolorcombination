import { Link } from 'react-router-dom';

const ToolCards = () => {
    const cards = [
        {
            title: "PDF Converter",
            description: "Convert documents to PDF format",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-[#6F56EC]",
            buttonText: "Convert Now",
            accentColor: "from-[#8B7AEF] to-[#6F56EC]",
            url: "/pdf-converter"
        },
        {
            title: "Image Enhancer With Hd Quality",
            description: "Reduce image size while maintaining quality and enhance beauty with smoothness and brightness adjustments.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-[#FF6B6B]",
            buttonText: "Enhance Now",
            accentColor: "from-[#FF8E8E] to-[#FF6B6B]",
            url: "/image-enhancer"
        },
        {
            title: "Video Editor",
            description: "Trim and edit your videos online",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-[#48BB78]",
            buttonText: "Edit Video",
            accentColor: "from-[#68D391] to-[#48BB78]",
            url: "/video-editor"
        },
        {
            title: "Audio Extractor",
            description: "Extract audio from video files",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
            ),
            bgColor: "bg-[#ED8936]",
            buttonText: "Extract Audio",
            accentColor: "from-[#F6AD55] to-[#ED8936]",
            url: "/audio-extractor"
        },
        {
            title: "Document Scanner",
            description: "Scan and digitize your documents",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
            ),
            bgColor: "bg-[#667EEA]",
            buttonText: "Scan Now",
            accentColor: "from-[#7F9CF5] to-[#667EEA]",
            url: "/document-scanner"
        }
    ];

    return (
        <>
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b" style={{ paddingTop: "2rem" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12" style={{marginBottom: "2rem"}}>
                        <h1 className="text-3xl font-bold text-white py-8">Our Tools</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full h-[260px] mx-auto transform transition-all duration-500 hover:scale-105"
                            >
                                <div className={`h-full rounded-xl shadow-lg overflow-hidden relative ${card.bgColor} group`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent"></div>
                                    </div>
                                    <div className="relative h-full flex flex-col p-5 z-10">
                                        <div className="flex justify-center mb-4 mt-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                                            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                                                {card.icon}
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-bold text-white text-center mb-2 group-hover:text-white/95 transition-colors">
                                            {card.title}
                                        </h2>
                                        <p className="text-white/80 text-center text-sm mb-4 px-2 flex-grow">
                                            {card.description}
                                        </p>
                                        <div className="mt-auto w-full px-2 pb-1">
                                            <Link
                                                to={card.url}
                                                className={`w-full bg-white/90 ${card.bgColor.replace('bg-', 'text-')} py-2.5 px-4 rounded-lg font-medium hover:bg-white transition-all duration-300 text-sm shadow-sm group-hover:shadow-md flex items-center justify-center gap-2`}
                                            >
                                                {card.buttonText}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div 
                className="bg-[#273744] mt-16 px-8 py-12 rounded-2xl mx-6 sm:mx-12 md:mx-16 lg:mx-24 flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-24 text-center"
                style={{marginTop: "2.5rem", marginLeft: "3rem", marginRight: "3rem"}}
            >
                <div>
                    <div className="text-4xl sm:text-5xl font-bold text-blue-700 mb-2">1m</div>
                    <div className="text-lg text-gray-300">Active Users</div>
                </div>
                <div>
                    <div className="text-4xl sm:text-5xl font-bold text-blue-700 mb-2">10m</div>
                    <div className="text-lg text-gray-300">Files Converted</div>
                </div>
                <div>
                    <div className="text-4xl sm:text-5xl font-bold text-blue-700 mb-2">200+</div>
                    <div className="text-lg text-gray-300">Online Tools</div>
                </div>
                <div>
                    <div className="text-4xl sm:text-5xl font-bold text-blue-700 mb-2">500k</div>
                    <div className="text-lg text-gray-300">PDFs Created</div>
                </div>
            </div>
        </>
    );
};

export default ToolCards;