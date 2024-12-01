"use client"
import { FaQuoteLeft } from "react-icons/fa";
import React, { useRef, useState } from 'react';
import auth from "../../../../public/assets/Mask group.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './reviews.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
const Reviews = () => {
    return (
        <div className='mb-10'>
            <div className="text-center my-10">
                <h1 className="text-3xl font-bold">Learners love Healthify. See why <br /> they rate us 4.9 out of 5.0</h1>
            </div>
            {/* slider */}
            <Swiper
                slidesPerView={5}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
          <SwiperSlide>
    <div className="bg-purple-100 border border-blue-100 h-80 w-64 rounded-2xl p-4">
       
       <div className="flex justify-between">

        {/* Image and Name Section */}
        <div className="flex flex-col items-center ">
            {/* Author Image */}
            <div className="w-12 h-12">
                <Image
                    src={auth}
                    alt="author"
                    layout="intrinsic"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            </div>

            {/* Author Name */}
            <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
        </div>
        <div className="text-xl font-bold text-purple-500">
            <FaQuoteLeft />
        </div>
       </div>
       <div className="text-sm mt-5">
        <p>“This course transformed my outlook on health and wellness. The focus on both physical and mental health was exactly what I needed. I now have a sustainable routine that keeps me motivated.”</p>
       </div>
    </div>
</SwiperSlide>
 <SwiperSlide>
                    <div className='bg-purple-100 border border-blue-100 h-60 w-64 rounded-2xl p-4'>
                    <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“In just a few weeks, I’ve seen a dramatic improvement in my sleep and energy levels. Highly recommend this course for anyone looking to reset their lifestyle.”</p>
</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className='bg-purple-100 border border-blue-100 h-52 w-64 rounded-2xl p-4'>
                <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“This course was okay, but I wish it had more interactive elements. The content was good, though!”</p>
</div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg-purple-100 border border-blue-100 h-60 w-64 rounded-2xl p-4'>
                <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“An excellent resource for anyone struggling with balance in life. This course gave me practical tools to improve my mental clarity and overall health.”</p>
</div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg-purple-100 border border-blue-100 h-52 w-64 rounded-2xl p-4'>
                <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“I never realized how interconnected mental and physical health were until taking this course. It’s truly life-changing.”</p>
</div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg-purple-100 border border-blue-100 h-56 w-64 rounded-2xl p-4'>
                <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“The course helped me build a daily routine that’s not only sustainable but also enjoyable. It’s empowering to take charge of my health in a holistic way.”</p>
</div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg-purple-100 border border-blue-100 h-64 w-64 rounded-2xl p-4'>
                <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“The content in this course was well-curated and easy to understand. I appreciate the emphasis on mental wellness, which is often overlooked in health programs.”</p>
</div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg-purple-100 border border-blue-100 h-60 w-64 rounded-2xl p-4'>
                <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“This course gave me the confidence I needed to start focusing on myself. It’s not just about physical fitness—it’s about feeling good mentally and emotionally too.”</p>
</div>
                </div></SwiperSlide>
                <SwiperSlide><div className='bg-purple-100 border border-blue-100 h-60 w-64 rounded-2xl p-4'>
                <div className="flex justify-between">

{/* Image and Name Section */}
<div className="flex flex-col items-center ">
    {/* Author Image */}
    <div className="w-12 h-12">
        <Image
            src={auth}
            alt="author"
            layout="intrinsic"
            width={48}
            height={48}
            className="rounded-full"
        />
    </div>

    {/* Author Name */}
    <p className="text-sm font-bold text-gray-700 mt-2">Killian Murphy</p>
</div>
<div className="text-xl font-bold text-purple-500">
    <FaQuoteLeft />
</div>
</div>
<div className="text-sm mt-5">
<p>“I feel stronger, healthier, and more motivated after completing this course. The community support and expert advice helped me stay on track.”</p>
</div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;