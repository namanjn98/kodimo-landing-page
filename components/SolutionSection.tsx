"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "STEP 1 - INPUT",
    title: "Upload, Email or Integrate PMS",
    description: "Share construction docs with one-click",
    image: "/images/step1-img.png",
    imageWidth: 300,
    imageHeight: 303,
    stepLabelSize: "text-[13.677px]",
  },
  {
    step: "STEP 2 - HYBRID PROCESS",
    title: "AI performs estimation at 4x speeds",
    description: "Human experts verify AI outputs to deliver in time",
    image: "/images/step2-img.png",
    imageWidth: 300,
    imageHeight: 352,
    stepLabelSize: "text-[12px]",
  },
  {
    step: "STEP 3 - REVIEW & EXPORT",
    title: "Export spreadsheets in your template",
    description: "Review and export results in XLSX, XLS, or CSV",
    image: "/images/step3-img.png",
    imageWidth: 300,
    imageHeight: 423,
    stepLabelSize: "text-[12px]",
  },
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="flex items-center min-h-screen bg-text-primary py-20 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[54px]">
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
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative min-h-[334px] md:h-[334px] overflow-visible rounded-lg bg-primary-navy p-8"
            >
              {/* Text — constrained to left ~60% */}
              <div className="relative z-10 max-w-[60%]">
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

              {/* Image — absolutely positioned bottom-right, overflows card */}
              <div className="absolute bottom-20 -right-10">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={step.imageWidth}
                  height={step.imageHeight}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
