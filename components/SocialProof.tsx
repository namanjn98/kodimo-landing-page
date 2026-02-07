"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const customerTypes = [
  {
    icon: "/images/customer-avatar.png",
    title: "General Contractors",
    description: "Submit more competitive bids with confidence. Reduce estimating time by 75% while maintaining accuracy.",
    bullets: [
      "Faster bid turnaround",
      "Higher win rates",
      "Reduced overhead costs",
    ],
  },
  {
    icon: "/images/customer-avatar.png",
    title: "Subcontractors",
    description: "Price your specialized work accurately. Get instant takeoffs for electrical, plumbing, HVAC, and more.",
    bullets: [
      "Trade-specific accuracy",
      "Quick response times",
      "Better profit margins",
    ],
  },
];

export default function SocialProof() {
  return (
    <section id="customers" className="bg-text-primary py-20 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] lg:py-28">
      <div className="mx-auto max-w-[1440px] px-[89px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[14px] font-bold uppercase tracking-widest text-primary-navy">
            CUSTOMERS
          </span>
          <h2 className="mt-4 font-heading text-[40px] font-semibold text-primary-navy">
            We are working for you
          </h2>
          <p className="mx-auto mt-3 max-w-[427px] text-[14px] leading-[25px] text-text-description">
            Trusted by construction professionals across every sector.{" "}
            <span className="font-bold">Tailored solutions for your specific needs.</span>
          </p>
        </motion.div>

        {/* Customer Type Cards */}
        <div className="relative mt-14 flex justify-center gap-[27px]">
          {/* Divider dot and vertical line */}
          <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 flex-col items-center lg:flex">
            <Image
              src="/images/divider-dot.png"
              alt=""
              width={9}
              height={9}
              className="mb-1"
            />
            <div className="h-[379px] w-px bg-border-light" />
          </div>

          {customerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[492px] min-h-[317px]"
            >
              <Card variant="content">
                <div className="flex items-start gap-4">
                  <Image
                    src={type.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="shrink-0 rounded-full"
                  />
                </div>
                <h3 className="mt-4 text-[17px] font-bold text-text-dark">
                  {type.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[26px] text-text-dark">
                  {type.description}
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                  {type.bullets.map((bullet) => (
                    <li key={bullet} className="text-[12px] leading-[26px] text-text-dark">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Book a Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <Button variant="primary" href="#contact">
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
