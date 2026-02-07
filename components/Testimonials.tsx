"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    quote: `"EstimateAl cut our estimating time by 70% while actually improving accuracy. We're winning more bids and our margins have increased because we can respond to more opportunities."`,
    author: "Michael Richardson",
    title: "Chief Estimator",
    company: "Richardson Construction Group",
  },
  {
    quote: `"EstimateAl cut our estimating time by 70% while actually improving accuracy. We're winning more bids and our margins have increased because we can respond to more opportunities."`,
    author: "Michael Richardson",
    title: "Chief Estimator",
    company: "Richardson Construction Group",
  },
  {
    quote: `"EstimateAl cut our estimating time by 70% while actually improving accuracy. We're winning more bids and our margins have increased because we can respond to more opportunities."`,
    author: "Michael Richardson",
    title: "Chief Estimator",
    company: "Richardson Construction Group",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-primary-dark-alt py-20 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] lg:py-28">
      <div className="mx-auto max-w-[1440px] px-[89px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[14px] font-bold uppercase tracking-widest text-text-light">
            PROVEN TRACK RECORD
          </span>
          <h2 className="mt-4 text-[40px]">
            <span className="font-semibold text-text-light">What do </span>
            <span className="font-heading italic text-primary-lime">people say</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[647px] text-[14px] leading-[30px] text-[#d5d5d5]">
            <span className="font-bold">Real results</span> from professionals who trust Kodimo
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-14 flex justify-center gap-[34px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-[329px] min-h-[378px]"
            >
              <Card variant="testimonial" className="h-full">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Image
                    src="/images/quote-icon.png"
                    alt=""
                    width={49}
                    height={34}
                  />
                </div>

                {/* Quote Text */}
                <p className="text-[12px] leading-[26.5px] text-primary-lime">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="mt-8">
                  <p className="text-[12px] font-bold leading-[18px] text-text-light">
                    {testimonial.author}
                  </p>
                  <p className="text-[12px] leading-[18px] text-text-light">
                    {testimonial.title}
                  </p>
                  <p className="text-[12px] leading-[18px] text-text-light">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
