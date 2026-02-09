"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const customerTypes = [
  {
    title: "General Contractors",
    image: "/images/men.png",
  },
  {
    title: "Subcontractors",
    image: "/images/women.png",
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
          <span className="text-[18px] font-bold uppercase tracking-widest text-primary-navy">
            CUSTOMERS
          </span>
          <h2 className="mt-4 font-heading text-[40px] font-semibold text-primary-navy">
            Trusted by construction professionals across every sector.
          </h2>
          {/* <p className="mx-auto mt-3 max-w-[427px] text-[14px] leading-[25px] text-text-description">
            {" "}
            <span className="font-bold">Tailored solutions for your specific needs.</span>
          </p> */}
        </motion.div>

        {/* Customer Type Cards */}
        <div className="relative mt-14 flex justify-center gap-[27px]">
          {/* Divider dot and vertical line */}
          {/* <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 flex-col items-center lg:flex">
            <Image
              src="/images/divider-dot.png"
              alt=""
              width={9}
              height={9}
              className="mb-1"
            />
            <div className="h-[280px] w-px bg-border-light" />
          </div> */}

          {customerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex w-full max-w-[360px] flex-col items-center"
            >
              <h3 className="mb-4 text-[17px] font-bold text-primary-navy">
                {type.title}
              </h3>
              <Card variant="content" className="w-full overflow-hidden p-0">
                <Image
                  src={type.image}
                  alt={type.title}
                  width={270}
                  height={180}
                  className="h-auto w-full object-cover"
                />
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
          className="mt-10 flex justify-center"
        >
          <Button variant="primary" href="#contact">
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
