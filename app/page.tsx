import { NavBar } from "@/app/components/ui/NavBar";
import React from "react";
import Image from "next/image";
import { Post } from "./components/ui/Post";
import InCard, { InCards, testimonials } from "./components/InCard";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { POSTS } from "./components/ui/Post";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="sticky z-50 top-0 text-center xs:py-0   w-full flex flex-wrap items-center justify-center text-white bg-[linear-gradient(90deg,#2D9D9F_0%,#2D9D9F_100%)] gap-2 xs:gap-0 text-sm">
        <span className="text-sm py-1.5 max-sm:hidden">
          Join our discord for early access to new features!
        </span>
        <span className="text-sm py-1.5 sm:hidden">
          Join discord for early access!
        </span>
        <a
          className="hover:bg-white/90 bg-white text-black rounded-full  px-2 items-center gap-1 flex hover:cursor-pointer my-1 text-sm"
          href="/discord"
        >
          Join Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right size-3 p-0 m-0"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="sticky z-50 top-8 text-center   w-full ">
        <NavBar />
      </div>
      <section className=" pt-10 w-full min-h-[calc(100vh-40px)] bg-gradient-to-r from-black via-[#0B5B64] to-[#001518] flex items-center justify-center">
        <div className="absolute inset-0 object-cover object-center bg-gradient-to-r from-black via-[#0B5B64] to-[#001518] mix-blend-overlay bg-blend-darken">
          <img
            src="	https://smallest.ai/assets/home/nextImageExportOptimizer/hero-bg-opt-3840.WEBP"
            alt=""
          />
        </div>
        <div className="relative z-10 flex flex-col  items-center  max-w-lg justify-center gap-y-24 max-sm:gap-y-12">
          <div className="flex flex-col items-center justify-center gap-y-4 max-sm:px-5">
            <p className="font-semibold leading-6 text-[14px] text-[#43B6B6] py-1 px-3 text-center rounded-[57px] max-sm:text-sm ">
              SMALLER | FASTER |BETTER
            </p>
            <div className="font-space-grotesk font-medium text-5xl max-sm:text-4xl text-center text-[#F2FBFA] leading-[70px] max-sm:leading-[44px]">
              Real time AI for every human
            </div>
            <h3 className="text-xl max-sm:text-lg leading-[20px] max-sm:leading-[28px] text-[#F2FBFA] text-center">
              Enabling hyper-personalised AI interactions at population scale
            </h3>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center gap-y-8 border max-sm:gap-y-6">
              <div className="">
                <Image
                  src={"/store/image.png"}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src={"/store/nvidia_image.png"}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src={"/store/microsoft_image.png"}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-between items-center max-xl:items-center gap-y-12 px-20 py-24 max-sm:px-8 max-sm:pt-14">
          <div className="flex max-w-[768px] flex-col md:max-w-3xl xl:max-w-full items-center justify-center ">
            <p className="font-semibold leading-6 text-[14px] text-[#43B6B6] py-1 px-3 text-center rounded-[57px] max-sm:text-sm ">
              WHY SMALLEST .AI
            </p>
            <h3 className="text-text-primary font-bold leading-[44px] text-[27px] max-sm:text-3xl font-space-grotesk text-center">
              Small models are the future
            </h3>
            <p className="text-text-tertiary pt-2 leading-[30px] text-slate-600 text-lg max-sm:text-base text-center">
              Small means more flexibility, easier integrations and faster
              fine-tuning cycles
            </p>
          </div>
          <div className="grid [@media_(min-width:1150px)]:grid-cols-2   gap-8 sm:grid-cols-1 max-sm:grid-cols-1 max-why-smallest-ai:gap-8 max-sm:gap-6 w-full">
            {InCards.map((card, key) => {
              return (
                <InCard
                  key={key}
                  icon={card.icon}
                  title={card.title}
                  content={card.content}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full px-10 max-sm:px-0">
        <div className="w-full flex justify-center  items-center flex-col px-10 max-sm:px-0">
          <div className="flex max-w-[768px] flex-col md:max-w-3xl xl:max-w-full items-center justify-center ">
            <p className="font-semibold leading-6 text-[#43B6B6] py-1 px-3 text-center rounded-[57px] max-sm:text-sm ">
              Experience Smallest
            </p>
            <h3 className="text-text-primary font-bold leading-[44px] text-[27px] max-sm:text-3xl font-space-grotesk text-center">
              Unified Al Platform for real-time applications
            </h3>
            <p className="text-text-tertiary pt-2 leading-[30px] text-slate-600 text-lg max-sm:text-base text-center">
              Showcasing the potential of smallest.ai model for individuals and
              businesses
            </p>
          </div>
          <div className="pt-12 flex max-w-[768px] flex-col md:max-w-3xl xl:max-w-full px-5 items-center justify-center ">
            <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10  max-md:flex-col">
              <div className="rounded-[40px] overflow-hidden">
                {" "}
                <img
                  width={604}
                  height={724}
                  src="https://smallest.ai/assets/home/nextImageExportOptimizer/our-products1-opt-640.WEBP"
                  alt=""
                />
              </div>
              <div className="rounded-[40px] overflow-hidden">
                {" "}
                <img
                  width={604}
                  height={724}
                  src="https://smallest.ai/assets/home/nextImageExportOptimizer/our-products1-opt-640.WEBP"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 w-full pb-20 max-sm:px-0">
        <div className="w-full flex justify-center  items-center flex-col px-10 max-sm:px-0">
          <div className="flex max-w-[768px] flex-col md:max-w-3xl xl:max-w-full items-center justify-center ">
            <p className="font-semibold leading-6 text-[#43B6B6] py-1 px-3 text-center rounded-[57px] max-sm:text-sm ">
              Testimonials
            </p>
            <h3 className="text-text-primary font-bold leading-[44px] text-[27px] max-sm:text-3xl font-space-grotesk text-center">
              Real customers, real voices
            </h3>
            <p className="text-text-tertiary pt-2 leading-[30px] text-slate-600 text-lg max-sm:text-base text-center">
              Hear firsthand from satisfied clients about their experience with
              smallest.ai
            </p>
          </div>
          <div className="mt-20">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="fast"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-14  bg-[#F8F8F8]">
        <div className="w-full pb-10  flex justify-center  items-center flex-col max-sm:px-0">
          <div className="flex max-w-[768px] gap-1 flex-col md:max-w-3xl xl:max-w-full items-center justify-center ">
            <p className="font-semibold text-sm leading-6 text-[#43B6B6] py-1 px-3 text-center rounded-[57px] max-sm:text-sm ">
              SMALLEST BLOG
            </p>
            <h3 className="text-text-primary font-bold leading-[44px] text-[27px] max-sm:text-3xl font-space-grotesk text-center">
              Explore our insights
            </h3>
            <p className="text-text-tertiary pt-2 leading-[30px] text-slate-600 text-lg max-sm:text-base text-center">
              Explore our blogs, whitepapers, and case studies to stay informed
              on the latest in AI technology and see how Smallest.ai can enhance
              your business
            </p>
            <button className="px-3 mt-3 py-1 text-sm rounded-3xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
              Read more
            </button>
          </div>
          <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-start px-20 max-sm:px-8 py-20 gap-y-[64px] max-sm:gap-y-7">
            <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:mx-0 lg:grid-cols-3">
              {POSTS.map((post, id) => {
                return (
                  <Post
                    imgUrl={post.imgUrl}
                    title={post.title}
                    subTitle={post.subTitle}
                    key={id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
