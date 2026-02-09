"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "STEP 1",
    title: "Upload, Email or Integrate PMS",
    description: "Share construction docs with one-click",
    image: "/images/step1-img.png",
    imageWidth: 238,
    imageHeight: 240,
    stepLabelSize: "text-[13.677px]",
  },
  {
    step: "STEP 2",
    title: "AI process estimation at 4x speeds",
    description: "Human experts verify AI outputs to deliver in time",
    image: "/images/step2-img.png",
    imageWidth: 221,
    imageHeight: 259,
    stepLabelSize: "text-[12px]",
  },
  {
    step: "STEP 3",
    title: "Smooth review experience and easy export",
    description: "We offer top-in-class construction data review platform with exports in desired format or platform",
    image: "/images/step3-img.png",
    imageWidth: 205,
    imageHeight: 289,
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
          <span className="text-[14px] font-bold uppercase tracking-widest text-primary-navy">
            THE KODIMO WAY
          </span>
          <h2 className="mt-4 font-heading text-[28px] md:text-[40px] font-semibold text-primary-navy">
            How It Works ?
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
              {/* <div className="grid gap-6 md:grid-cols-2 display: flex; flex:1;"> */}
                <div className="display: flex; flex:1;">
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

                {/* <div className="" style={{ width: step.imageWidth, height: step.imageHeight }}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    // className="object-contain"
                  />
                </div> */}
              {/* </div> */}

              {/* Step illustration */}
              {/* <div style={{ width: step.imageWidth, height: step.imageHeight }}> */}
                {/* <div data-property-1="Variant2" style={{width: 492, height: 374.48, position: 'relative', background: '#172E46', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', borderRadius: 6.27}}>
                  <div style={{width: 246, left: 43.09, top: 97, position: 'absolute'}}>
                    <span style={{color: '#BFF900', fontSize: 13.68, fontFamily: 'Source Serif Pro', fontWeight: '700', wordWrap: 'break-word'}}>STEP 1<br/></span>
                    <span style={{color: '#BFF900', fontSize: 36.47, fontFamily: 'Source Serif Pro', fontWeight: '400', wordWrap: 'break-word'}}>Upload, email or integrate<br/></span>
                    <span style={{color: '#BFF900', fontSize: 18.80, fontFamily: 'Source Serif Pro', fontWeight: '400', wordWrap: 'break-word'}}><br/></span>
                    <span style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>A little about the step and its <br/>role in the process</span>
                  </div>
                  <img style={{width: 254, height: 256, left: 247, top: 73, position: 'absolute'}} src={step.image} />
                </div> */}
              {/* </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
