"use client";
import React from "react";
import { motion } from "motion/react";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600 fill-gray-600"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    image: string;
    name: string;
    role?: string;
    stars: number;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, stars }: any, i: any) => (
                <div
                  className="p-7 bg-[#111111] rounded-3xl  shadow-lg shadow-primary/10 max-w-xs w-full"
                  key={i}
                >
                  <div className="flex items-center gap-2">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      {/* <div className="leading-5 opacity-60 tracking-tight">{role}</div> */}
                  <StarRating rating={stars} />
                    </div>
                  </div>
                  <div className="mt-5 text-sm text-foreground/80">{text}</div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};