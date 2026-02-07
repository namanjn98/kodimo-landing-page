"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-[907px] overflow-hidden pt-[72px]">
      {/* Background: dark base with overlay */}
      <div className="absolute inset-0 bg-primary-dark-alt" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Background image */}
      <div className="absolute left-1/2 top-[5px] w-full max-w-[1920px] -translate-x-1/2">
        <div className="relative aspect-[1920/1080] w-full">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-[107px]">
        <div className="flex flex-col items-start pb-32 pt-[174px]">
          {/* Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-[37px]">
              The power of AI + Human expertise
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[806px] font-serif text-[64px] font-light leading-[1.15]"
          >
            <span className="text-primary-lime">One-click</span>{" "}
            <span className="text-[#efefef]">estimates.</span>
            <br />
            <span className="text-[#efefef]">Faster Bids, </span>
            <span className="text-primary-lime">Higher wins.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-[11px] max-w-[681px] text-[20px] leading-[30px] text-text-secondary"
          >
            Let us handle your estimates so you can focus on winning more bids. Powered by AI, verified by experts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-[67px] flex gap-[19px]"
          >
            <Button variant="primary" href="#contact" className="relative">
              <span className="mr-6">Try it Yourself</span>
              <Image
                src="/images/try-arrow.png"
                alt=""
                width={20}
                height={18}
                className="absolute right-8"
              />
            </Button>
            <Button variant="secondary" href="#demo">
              View Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
