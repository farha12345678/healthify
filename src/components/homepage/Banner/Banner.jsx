import Image from "next/image";
import banner from '../../../../public/assets/banner.png';
import leaf from "../../../../public/assets/leaf.png";

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content gap-x-20 flex-col lg:flex-row-reverse relative">
                    {/* Banner Image */}
                    <div className="relative">
                        <Image
                            src={banner}
                            alt="banner"
                            className="lg:max-w-md rounded-lg shadow-2xl"
                        />
                        {/* Leaf Image */}
                        <Image
                            src={leaf}
                            alt="leaf"
                            className="absolute -left-5 top-1/4 transform -translate-y-1/2 rounded-full border border-white shadow-lg"
                            width={50} // Adjust width as needed
                            height={50} // Adjust height as needed
                        />
                        {/* Bottom Text */}
                        <div className="absolute bottom-2 p-2 left-0 w-full">
                            <div className=" bg-white/70 p-4 rounded-t-lg">
                                <div className="flex items-center justify-center space-x-4 mb-2">
                                    <h1 className="text-3xl font-bold">12,000+</h1>
                                    <div className="h-8 border-l-2 border-gray-600"></div>
                                    <p className="font-normal text-center">
                                        Happy learners <br /> rely on us regularly
                                    </p>
                                </div>
                                {/* Find Your Wellbeing Section */}

                            </div>
                            <div className="bg-white/90 w-full rounded-b-lg p-2 flex items-center space-x-2 text-xs">
                                {/* Title */}
                                <h2 className="font-semibold whitespace-nowrap">Find your wellbeing</h2>

                                {/* Separator (Optional) */}
                                <div className="h-3 w-px bg-gray-300"></div>

                                {/* Text */}
                                <p className="mt-0">
                                    By promoting self-care and making informed choices, you can enhance your overall quality of life.
                                </p>
                            </div>


                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="">
                        {/* rating */}
                        <div className="flex gap-x-4 mb-6">
                            <div className="rating rating-md">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-8"
                                    className="mask mask-star-2 bg-orange-400"
                                     />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-xl font-medium">4.9(566)</p>
                        </div>
                        <h1 className="text-5xl font-bold">#1 Platform <br /> powering Health <br /> and Wellness </h1>
                        <p className="pt-4 text-xl font-medium">
                            We are restoring home as the primary <br /> place of personal well-being
                        </p>
                        <p className="py-3 text-xs">Health is not about just what you are eating it is also <br /> about what you are thinking and saying</p>
                        <div className="flex gap-x-5">
                            <button className="bg-[#287279] p-2 rounded-2xl text-white">Browse Course</button>
                            <button className="border border-[#287279] p-2 rounded-2xl text-[#287279]">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
