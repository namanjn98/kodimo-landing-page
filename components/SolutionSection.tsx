"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { metric: "4x", label: "faster bids" },
  { metric: "24/7", label: "service" },
  { metric: "70%", label: "faster takeoffs" },
  { metric: "30%", label: "revenue increase" },
  { metric: "99%", label: "accuracy" },
];

const steps = [
  {
    step: "STEP 1 - INPUT",
    title: "Upload, Email or Integrate PMS",
    description: "Share construction docs with one-click",
    image: "/images/step1-img.png",
    stepLabelSize: "text-[13.677px]",
  },
  {
    step: "STEP 2 - HYBRID PROCESS",
    title: "AI performs estimation at 4x speeds",
    description: "Human experts verify AI outputs to deliver in time",
    image: "/images/step2-img.png",
    stepLabelSize: "text-[12px]",
  },
  {
    step: "STEP 3 - REVIEW & EXPORT",
    title: "Export spreadsheets in your template",
    description: "Review and export results in XLSX, XLS, or CSV",
    image: "/images/step3-img.png",
    stepLabelSize: "text-[12px]",
  },
];

export default function SolutionSection() {
  // Duplicate stats 4x so the carousel always fills wide viewports
  const duplicatedStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <section
      id="how-it-works"
      className="min-h-screen bg-text-primary shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"
    >
      {/* Stats Bar — dark background bridging Hero → content */}
      <div className="bg-nav-bg pt-12 pb-12 md:pt-8 md:pb-8">
        <div className="mx-auto max-w-[1440px] px-6 md:px-[54px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-[14px] md:text-[16px] text-text-secondary font-medium mb-8"
          >
            Here is what our customers say about us
          </motion.p>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-20"
              animate={{ x: ["0%", "-25%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 shrink-0"
                >
                  <span className="text-[20px] md:text-[24px] text-primary-lime">
                    {stat.metric} {" "}
                    <span className="text-[14px] md:text-[16px] text-offwhite-text font-normal">
                    {stat.label}
                  </span>
                  </span>
                  
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* How Kodimo Works */}
      <div className="py-20 lg:py-28" style={{ overflow: 'visible' }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-[54px]" style={{ overflow: 'visible' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <span className="text-[14px] font-bold uppercase tracking-widest text-primary-navy">
            THE KODIMO WAY
          </span> */}
          <h2 className="mt-4 font-heading text-[28px] md:text-[40px] font-semibold text-primary-navy">
            How <span className="italic">Kodimo</span> Works
          </h2>
          <div className="mx-auto mt-3 max-w-[647px] text-center">
            <p className="text-[14px] leading-[25px] text-text-description">
              Three simple steps to transform your estimating process.{" "}
              </p>
              <p className="text-[14px] font-bold leading-[25px] text-text-description">
                Get started in instantly, see results in hours.
              </p>
            </div>
          </motion.div>

        {/* 3 Step Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3" style={{ overflow: 'visible' }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative min-h-[334px] md:h-[334px] rounded-lg bg-primary-navy p-8"
              style={{ overflow: 'visible' }}
            >
              {/* Text — constrained to left ~55% */}
              <div className="relative z-10 max-w-[55%]">
                <span className={`${step.stepLabelSize} font-bold text-text-light`}>
                  {step.step}
                </span>
                <h3 className="mt-2 font-heading text-[24px] md:text-[32px] leading-tight text-primary-lime">
                  {step.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[25px] text-white">
                  {step.description}
                </p>
              </div>

              {/* Image — vertically centered on the right, overflows card */}
              <div
                className="absolute right-[-10px] top-1/2 -translate-y-1/2"
                style={{ width: '55%', height: '110%', overflow: 'visible' }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 180px, 280px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
