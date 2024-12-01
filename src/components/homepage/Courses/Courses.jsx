"use client"
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from "../../../../public/assets/image 28.png"
import img2 from "../../../../public/assets/image 28-1.png"
import img3 from "../../../../public/assets/image 28-2.png"
import img4 from "../../../../public/assets/image 28-3.png"
import auth1 from "../../../../public/assets/Mask group.png"
import auth2 from "../../../../public/assets/Mask group-1.png"
import auth3 from "../../../../public/assets/Mask group-2.png"
import auth4 from "../../../../public/assets/Mask group-4.png"
import { MdWatchLater } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './courses.css';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';


const Courses = () => {
  const swiperRef = useRef(null);
  return (
    <div className='container mx-auto my-20'>
      <div>
        <h1 className='text-3xl font-bold'>Our Popular Courses</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-center md:text-left mb-4">
            By taking proactive steps to nurture mental health, we can enhance our quality of life, <br />
            build resilience and foster a sense of inner peace and balance.
          </p>

          {/* Navigation Buttons with Only Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              className="btn py-2 px-4 rounded-full text-black border border-black flex items-center"
              onClick={() => swiperRef.current.swiper.slidePrev()} // Navigate to the previous slide
            >
              <FaChevronLeft /> {/* Left Arrow Icon */}
            </button>
            <button
              className="btn py-2 px-4 rounded-full text-black border border-black flex items-center"
              onClick={() => swiperRef.current.swiper.slideNext()} // Navigate to the next slide
            >
              <FaChevronRight /> {/* Right Arrow Icon */}
            </button>
          </div>
        </div>

        {/* Card Section */}
        <div className=''>
          <Swiper
            navigation={false} // Disable the default navigation buttons
            slidesPerView={3.5}
            spaceBetween={10}
            freeMode={true}
            modules={[]}
            className="mySwiper lg:flex grid"
            ref={swiperRef} // Attach the ref to the Swiper component
          >
            <SwiperSlide>
              <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure className="h-48">
                  <Image
                    src={img1}
                    alt="Shoes"
                    className="object-cover"
                  />
                </figure>
                <div className="flex gap-x-2 mt-3 ml-4 text-xs">
                  <p className="p-1 bg-red-50 border border-red-200 rounded-lg">Beginner</p>
                  <p className="p-1 bg-yellow-50 border border-yellow-200 rounded-lg">Nutrition and Diet</p>
                </div>
                <div className="card-body">
                  <h2 className="card-title">
                    Foundation of Sleep: Sleep Science and Sleep Disorders
                  </h2>

                  <div className="flex items-center mt-2">
                    <div className="rating flex">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p className="">4.9 (566)</p> {/* Adjust spacing with margin */}
                  </div>

                  <div className="flex gap-x-4 mt-10">
                    <div className="flex gap-x-1">
                      <p className="text-xl text-purple-400">
                        <MdWatchLater />
                      </p>
                      <p>6h 34min</p>
                    </div>
                    <div className="h-4 border-l-2 border-gray-300"></div>
                    <div className="flex gap-x-1">
                      <p className="text-xl text-purple-400">
                        <IoBookSharp />
                      </p>
                      <p>3 Lessons</p>
                    </div>
                  </div>
                  <div className="border"></div>
                  <div className="flex justify-between">
                    <div className="flex gap-x-2 w-8 h-8">
                      <Image
                        src={auth1}
                        alt="author"
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="font-bold">Killian Murphe</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl">$40</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure className='h-48'>
                  <Image
                    src={img2}
                    alt="Shoes"
                    className='object-cover' />
                </figure>
                <div className='flex gap-x-2 mt-3 ml-4 text-xs'>
                  <p className='p-1 bg-red-50 border border-red-200 rounded-lg'>Intermediate</p>
                  <p className='p-1 bg-yellow-50 border border-yellow-200 rounded-lg'>Health and Wellness</p>
                </div>
                <div className="card-body">

                  <h2 className="card-title">Parenting in the Digital Age: Navigating screen time</h2>

                  <div className='flex gap-x-4'>
                    <div className="rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>4.9(566)</p>
                  </div>

                  <div className='flex gap-x-4 mt-10'>
                    <div className='flex gap-x-1'>
                      <p className='text-xl text-purple-400'><MdWatchLater /></p>
                      <p>6h 34min</p>
                    </div>
                    <div className="h-4 border-l-2 border-gray-300"></div>
                    <div className='flex gap-x-1'>
                      <p className='text-xl text-purple-400'><IoBookSharp /></p>
                      <p>3 Lessons</p>
                    </div>
                  </div>
                  <div className='border'></div>
                  <div className='flex justify-between mb-2'>
                    <div className='flex gap-x-2 w-8 h-8'>
                      <Image
                        src={auth2}
                        alt='author'
                        className='w-8 h-8 rounded-full'
                      />
                      <p className='font-bold'>Sarah Hopkins</p>
                    </div>
                    <div>
                      <p className='font-bold text-xl'>$50</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure className='h-48'>
                  <Image
                    src={img3}
                    alt="Shoes"
                    className='object-cover' />

                </figure>
                <div className='flex gap-x-2 mt-3 ml-4 text-xs'>
                  <p className='p-1 bg-red-50 border border-red-200 rounded-lg'>Beginner</p>
                  <p className='p-1 bg-yellow-50 border border-yellow-200 rounded-lg'>Nutrition and Diet</p>
                </div>
                <div className="card-body">

                  <h2 className="card-title">Holistic Health: Integrating Mind, Body and Spirit</h2>

                  <div className='flex gap-x-4'>
                    <div className="rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>4.9(566)</p>
                  </div>

                  <div className='flex gap-x-4 mt-10'>
                    <div className='flex gap-x-1'>
                      <p className='text-xl text-purple-400'><MdWatchLater /></p>
                      <p>6h 34min</p>
                    </div>
                    <div className="h-4 border-l-2 border-gray-300"></div>
                    <div className='flex gap-x-1'>
                      <p className='text-xl text-purple-400'><IoBookSharp /></p>
                      <p>3 Lessons</p>
                    </div>
                  </div>
                  <div className='border'></div>
                  <div className='flex justify-between mb-2'>
                    <div className='flex gap-x-2 w-8 h-8'>
                      <Image
                        src={auth3}
                        alt='author'
                        className='w-8 h-8 rounded-full'
                      />
                      <p className='font-bold'>Luna Karim</p>
                    </div>
                    <div>
                      <div className='flex gap-x-1 p-1 bg-gray-100 border border-gray-400 text-gray-600 rounded-lg'>
                        <p className='text-base text-gray-500'><FaCheckCircle /></p>
                        <p className='text-xs'>Enrolled</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure className='h-48'>
                  <Image
                    src={img4}
                    alt="Shoes"
                    className='object-cover'
                  />
                </figure>
                <div className='flex gap-x-2 mt-3 ml-4 text-xs'>
                  <p className='p-1 bg-red-50 border border-red-200 rounded-lg'>Beginner</p>
                  <p className='p-1 bg-yellow-50 border border-yellow-200 rounded-lg'>Nutrition and Diet</p>
                </div>
                <div className="card-body">

                  <h2 className="card-title">Introduction to Health and Nutrition</h2>

                  <div className='flex gap-x-4'>
                    <div className="rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>4.9(566)</p>
                  </div>

                  <div className='flex gap-x-4 mt-10'>
                    <div className='flex gap-x-1'>
                      <p className='text-xl text-purple-400'><MdWatchLater /></p>
                      <p>6h 34min</p>
                    </div>
                    <div className="h-4 border-l-2 border-gray-300"></div>
                    <div className='flex gap-x-1'>
                      <p className='text-xl text-purple-400'><IoBookSharp /></p>
                      <p>3 Lessons</p>
                    </div>
                  </div>
                  <div className='border'></div>
                  <div className='flex justify-between mb-2'>
                    <div className='flex gap-x-2 w-8 h-8'>
                      <Image
                        src={auth4}
                        alt='author'
                        className='w-8 h-8 rounded-full'
                      />
                      <p className='font-bold'>Kate Winslate</p>
                    </div>
                    <div>
                      <p className='font-bold text-xl'>$40</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        {/* Card */}
        <div className='flex gap-x-4'>
          {/* <div className="card card-compact bg-base-100 w-80 shadow-xl">
                        <figure>
                            <Image
                                src={img1}
                                alt="Shoes" 
                                className='h-64 object-cover'/>
                        </figure>
                        <div className='flex gap-x-2 mt-3 ml-4 text-xs'>
                            <p className='p-1 bg-red-50 border border-red-200 rounded-lg'>Beginner</p>
                            <p className='p-1 bg-yellow-50 border border-yellow-200 rounded-lg'>Nutrition and Diet</p>
                        </div>
                        <div className="card-body">

                            <h2 className="card-title">Foundation of Sleep: Sleep Science and sleep disorders</h2>
                           
                           <div className='flex gap-x-4'>
                           <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>4.9(566)</p>
                           </div>
                          
                           <div className='flex gap-x-4 mt-10'>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><MdWatchLater /></p>
                                <p>6h 34min</p>
                            </div>
                            <div className="h-4 border-l-2 border-gray-300"></div>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><IoBookSharp /></p>
                                <p>3 Lessons</p>
                            </div>
                           </div>
                           <div className='border'></div>
                           <div className='flex justify-between mb-2'>
                           <div className='flex gap-x-2'>
                                <Image
                                src={auth1}
                                alt='author'
                                className='w-8 h-8 rounded-full'
                                />
                                <p className='font-bold mt-2'>Killian Murphe</p>
                            </div>
                            <div>
                                <p className='font-bold text-xl'>$40</p>
                            </div>
                           </div>
                        </div>
                    </div> */}
          {/* <div className="card card-compact bg-base-100 w-80 shadow-xl">
                        <figure>
                            <Image
                                src={img2}
                                alt="Shoes"
                                className='h-64 object-cover' />
                        </figure>
                        <div className='flex gap-x-2 mt-3 ml-4 text-xs'>
                            <p className='p-1 bg-red-50 border border-red-200 rounded-lg'>Intermediate</p>
                            <p className='p-1 bg-yellow-50 border border-yellow-200 rounded-lg'>Health and Wellness</p>
                        </div>
                        <div className="card-body">

                            <h2 className="card-title">Parenting in the Digital Age: Navigating screen time</h2>
                           
                           <div className='flex gap-x-4'>
                           <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>4.9(566)</p>
                           </div>
                          
                           <div className='flex gap-x-4 mt-10'>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><MdWatchLater /></p>
                                <p>6h 34min</p>
                            </div>
                            <div className="h-4 border-l-2 border-gray-300"></div>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><IoBookSharp /></p>
                                <p>3 Lessons</p>
                            </div>
                           </div>
                           <div className='border'></div>
                           <div className='flex justify-between mb-2'>
                           <div className='flex gap-x-2'>
                                <Image
                                src={auth2}
                                alt='author'
                                className='w-8 h-8 rounded-full'
                                />
                                <p className='font-bold mt-2'>Sarah Hopkins</p>
                            </div>
                            <div>
                                <p className='font-bold text-xl'>$50</p>
                            </div>
                           </div>
                        </div>
                    </div> */}
          {/* <div className="card card-compact bg-base-100 w-80 shadow-xl">
                        <figure>
                            <Image
                                src={img3}
                                alt="Shoes"
                                className='h-64 object-cover' />
                                
                        </figure>
                        <div className='flex gap-x-2 mt-3 ml-4 text-xs'>
                            <p className='p-1 bg-red-50 border border-red-200 rounded-lg'>Beginner</p>
                            <p className='p-1 bg-yellow-50 border border-yellow-200 rounded-lg'>Nutrition and Diet</p>
                        </div>
                        <div className="card-body">

                            <h2 className="card-title">Holistic Health: Integrating Mind, Body and Spirit</h2>
                            
                           <div className='flex gap-x-4'>
                           <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>4.9(566)</p>
                           </div>
                          
                           <div className='flex gap-x-4 mt-10'>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><MdWatchLater /></p>
                                <p>6h 34min</p>
                            </div>
                            <div className="h-4 border-l-2 border-gray-300"></div>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><IoBookSharp /></p>
                                <p>3 Lessons</p>
                            </div>
                           </div>
                           <div className='border'></div>
                           <div className='flex justify-between mb-2'>
                           <div className='flex gap-x-2'>
                                <Image
                                src={auth3}
                                alt='author'
                                className='w-8 h-8 rounded-full'
                                />
                                <p className='font-bold mt-2'>Luna Karim</p>
                            </div>
                            <div>
                               <div className='flex gap-x-1 p-1 bg-gray-100 border border-gray-400 text-gray-600 rounded-lg'>
                                <p className='text-base text-gray-500'><FaCheckCircle /></p>
                                <p className='text-xs'>Enrolled</p>
                               </div>
                            </div>
                           </div>
                        </div>
                    </div> */}
          {/* <div className="card card-compact bg-base-100 w-80 shadow-xl">
                        <figure>
                            <Image
                                src={img4}
                                alt="Shoes"
                                className='h-64 object-cover'
                                 />
                        </figure>
                        <div className='flex gap-x-2 mt-3 ml-4 text-xs'>
                            <p className='p-1 bg-red-50 border border-red-200 rounded-lg'>Beginner</p>
                            <p className='p-1 bg-yellow-50 border border-yellow-200 rounded-lg'>Nutrition and Diet</p>
                        </div>
                        <div className="card-body">

                            <h2 className="card-title">Introduction to Health and Nutrition</h2>
                           
                           <div className='flex gap-x-4'>
                           <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>4.9(566)</p>
                           </div>
                          
                           <div className='flex gap-x-4 mt-10'>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><MdWatchLater /></p>
                                <p>6h 34min</p>
                            </div>
                            <div className="h-4 border-l-2 border-gray-300"></div>
                            <div className='flex gap-x-1'>
                                <p className='text-xl text-purple-400'><IoBookSharp /></p>
                                <p>3 Lessons</p>
                            </div>
                           </div>
                           <div className='border'></div>
                           <div className='flex justify-between mb-2'>
                           <div className='flex gap-x-2'>
                                <Image
                                src={auth4}
                                alt='author'
                                className='w-8 h-8 rounded-full'
                                />
                                <p className='font-bold mt-2'>Kate Winslate</p>
                            </div>
                            <div>
                                <p className='font-bold text-xl'>$40</p>
                            </div>
                           </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Courses;