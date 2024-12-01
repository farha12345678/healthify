import Image from "next/image";
import services from "../../../../public/assets/services.png"
import check from "../../../../public/assets/check.png"
import { FaCheckCircle } from "react-icons/fa";
const Services = () => {
    return (
        <div>
           <div className="hero min-h-screen">
                <div className="hero-content gap-x-20 flex-col lg:flex-row-reverse relative">
                    {/* Banner Image */}
                    <div className="relative">
                        <Image
                            src={services}
                            alt="banner"
                            className="lg:max-w-md rounded-lg shadow-2xl"
                        />
                        {/* Leaf Image */}
                        <Image
                            src={check}
                            alt="leaf"
                            className="absolute -left-5 top-1/4 transform -translate-y-1/2 rounded-full border border-white shadow-lg"
                            width={50} // Adjust width as needed
                            height={50} // Adjust height as needed
                        />
                       
                    </div>

                    {/* Content Section */}
                    <div className="">
                       
                        <h1 className="text-5xl font-bold">We provide...</h1>
                        {/* points */}
                       <div>
                        <div className="flex gap-x-4  text-xl text-gray-500 font-medium my-10">
                            <p><FaCheckCircle /></p>
                            <p>Personalized routine</p>
                        </div>
                        <div className="flex gap-x-4 text-xl text-gray-500 font-medium mb-5">
                            <p><FaCheckCircle /></p>
                            <p>Follow-up after completing courses</p>
                        </div>
                        <div className="border mb-5"></div>
                        <div className="mb-5">
                        <div className="flex gap-x-4 font-medium ">
                            <p className="text-purple-400 text-xl"><FaCheckCircle /></p>
                            <p className="text-black text-xl">Access to additional resources</p>
                        </div>
                        <p className="ml-8">We offer access to a variety of additional resources to <br /> enhance your experience, including exclusive tools, guides <br /> and support materials designed to help you achieve your <br /> goals more effectively.</p>
                        </div>
                        <div className="border mb-5"></div>
                        <div className="flex gap-x-4 text-xl text-gray-500 font-medium">
                            <p className=""><FaCheckCircle /></p>
                            <p >Free community support</p>
                        </div>
                        <div className="mt-10">
                            <button className="text-[#287279] border border-[#287279] p-2 rounded-2xl font-medium">Learn More About Our Services</button>
                        </div>
                       </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;