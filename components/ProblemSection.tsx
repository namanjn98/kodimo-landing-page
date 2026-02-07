"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/components/ui/Card";

const problems = [
  {
    icon: "/images/problem-icon-1.png",
    title: "Inaccurate Estimates",
    description: "Manual calculations lead to pricing errors that cost you bids and reduce profit margins.",
  },
  {
    icon: "/images/problem-icon-2.png",
    title: "Lost Bids",
    description: "Pricing errors and delayed responses result in missed opportunities and lower win rates.",
  },
  {
    icon: "/images/problem-icon-3.png",
    title: "Time-Consuming Takeoffs",
    description: "Hours spent on manual quantity takeoffs delay your bid submissions and reduce competitiveness.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative bg-text-primary py-20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] lg:py-28">
      <div className="mx-auto max-w-[1440px] px-[89px]">
        {/* Section Labels */}
        <div className="mb-4 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <span className="text-[14px] font-bold uppercase tracking-widest text-primary-navy">
              THE PROBLEM
            </span>
          </div>
          <div className="text-left">
            <span className="text-[14px] font-bold uppercase tracking-widest text-primary-navy">
              THE SOLUTION
            </span>
          </div>
        </div>

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
            <Image
              src="/images/divider-vertical.png"
              alt=""
              width={3}
              height={432}
              className="h-full w-auto"
            />
          </div>

          {/* Left - The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-left font-heading text-[40px] font-semibold leading-[53px] text-primary-dark">
              Construction Estimating
              <br />
              is slow, costly and risky
            </h2>
            <p className="mt-3 text-left text-[14px] leading-[25px] text-text-description">
              These challenges directly{" "}
              <span className="font-bold">impact the ability to compete and grow, </span>
              making it{" "}
              <span className="font-bold">one of the biggest bottlenecks</span>{" "}
              in construction
            </p>

            <div className="mt-8 space-y-[11px]">
              {problems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="problem" className="h-[138px] w-full max-w-[553px]">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                      <Image
                        src="/images/icon-circle.png"
                        alt=""
                        width={56}
                        height={56}
                        className="absolute inset-0"
                      />
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="relative z-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-text-dark">{item.title}</h3>
                      <p className="mt-1 text-[14px] leading-[25px] text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-left font-heading text-[40px] font-semibold leading-[53px] text-primary-dark">
              Power of AI with
              <br />
              Expert Oversight
            </h2>
            <p className="mt-3 text-left text-[14px] leading-[25px] text-text-description">
              Our hybrid approach combines{" "}
              <span className="font-bold">cutting-edge AI technology</span>{" "}
              with{" "}
              <span className="font-bold">expert human validation</span>{" "}
              to deliver estimates you can trust
            </p>

            {/* Right side image with overlaid feature cards */}
            <div className="relative mt-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/solution-card-img.png"
                  alt="Kodimo solution"
                  width={553}
                  height={436}
                  className="w-full rounded-lg object-cover"
                />
              </div>

              {/* Feature cards overlaid on image */}
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6">
                {/* AI Speed */}
                <div className="flex items-start gap-5">
                  <div className="relative h-14 w-14 shrink-0">
                    <Image
                      src="/images/ai-speed-icon.png"
                      alt=""
                      width={56}
                      height={56}
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-primary-lime">AI Speed</h3>
                    <p className="mt-1 text-[14px] leading-[25px] text-[#EAECEE]">
                      Our AI models process drawings and specifications in minutes, extracting quantities and generating preliminary estimates instantly.
                    </p>
                  </div>
                </div>

                {/* Human Reliability */}
                <div className="flex items-start gap-5">
                  <div className="relative h-14 w-14 shrink-0">
                    <Image
                      src="/images/human-icon.png"
                      alt=""
                      width={56}
                      height={56}
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-primary-lime">Human Reliability</h3>
                    <p className="mt-1 text-[14px] leading-[25px] text-[#EAECEE]">
                      Industry-certified experts review and validate every estimate, ensuring accuracy and catching nuances AI might miss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
