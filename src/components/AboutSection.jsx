import welder from "../assets/welder.jpg";

export default function AboutSection() {
    return (
        <section className="py-16 px-4 md:px-12 lg:px-20 bg-white text-gray-900">
            {/* Section Heading - Standalone */}
            <div className="max-w-4xl mx-auto mb-12">
                <p className="text-orange-500 font-semibold text-sm md:text-base lg:text-lg text-left md:text-center">
                    Manufacture A Variety Of High Quality Products
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight text-left md:text-center">
                    TPPL is an established manufacturing organization, headquarter at Pune, India.
                </h2>
            </div>

            {/* Flex Layout */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 max-w-7xl mx-auto">

                {/* Left Column */}
                <div className="flex-1 text-center lg:text-left text-lg">
                    <p className="font-medium text-left md:text-center">
                        We as a group are leading and fast growing in steel fabrication, manufacturing, providing engineering solutions to a host of competent players across India
                    </p>
                    <p className="mt-4 text-gray-600 text-lg text-left md:text-center">
                        It gives us great pleasure to welcome you to Talegaonkar Profiles Private Limited’s official website. Incorporated in June 2007 and headquartered in Pune, India, we are a fast-growing manufacturing organization specializing in steel fabrication and engineering solutions for top-tier clients across India.
                    </p>

                    <div className="mt-6 text-left">
                        <p className="text-xl font-semibold font-serif italic">Mr. Mahendra Balwant Talegaonkar</p>
                        <span className="text-sm text-gray-500">Managing Director</span>
                    </div>

                </div>

                {/* Center Image */}
                <div className="relative flex-1 w-full max-w-md">
                    <img
                        src={welder}
                        alt="Welder"
                        className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                    <button className="absolute bottom-4 left-4 bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 text-sm font-semibold flex items-center gap-2 rounded shadow">
                        ▶️ Watch Video!
                    </button>
                </div>

                {/* Right Column */}
                <div className="flex-1 text-left space-y-6">
                    <div>
                        <h4 className="text-lg font-bold text-black flex items-center gap-2">
                            <span className="text-orange-500 text-xl">•</span> Quality
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-black flex items-center gap-2">
                            <span className="text-orange-500 text-xl">•</span> Reliability
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                            We have established a corporate mandate to maintain strong core values that truly reflect.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-black flex items-center gap-2">
                            <span className="text-orange-500 text-xl">•</span> Innovation
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                            Our company develops a unique dynamically and keeps in step with the times.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
