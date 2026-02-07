"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="bg-text-primary py-20 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] lg:py-28">
      <div className="mx-auto max-w-[1440px] px-[89px]">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pl-5"
          >
            <span className="text-[14px] font-bold uppercase tracking-widest text-primary-navy">
              LET&apos;S CONNECT
            </span>

            <div className="mt-8">
              <p className="text-[40px] leading-tight text-primary-navy">
                See How{" "}
                <span className="font-heading text-[48px] font-bold italic">Accurate </span>
              </p>
              <p>
                <span className="font-heading text-[48px] font-bold italic text-primary-navy">Estimates</span>{" "}
                <span className="text-[40px] text-primary-navy">Help You</span>
              </p>
              <p className="font-heading text-[47px] font-bold italic text-primary-navy">
                Win More Bids
              </p>
            </div>

            <p className="mt-6 max-w-[491px] text-[20px] leading-[30px] text-text-description">
              Schedule a personalised demo and discover how Kodimo can transform your construction estimating process
            </p>

            <div className="mt-4 space-y-1 text-[14px] leading-[30px] text-text-description">
              {[
                "See the platform in action with your own project",
                "Discuss your specific estimating needs",
                "Get a customised pricing proposal",
                "Ask questions about our process",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M1.5 6.5L5.5 10.5L13.5 2" stroke="#959B98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right - Schedule Demo Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="-mt-[152px] flex flex-col items-center max-lg:mt-0"
          >
            <div className="w-full max-w-[595px] rounded-lg border border-border-light bg-text-primary p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex min-h-[678px] flex-col items-center justify-center text-center">
                <div className="mx-auto">
                  <Image
                    src="/images/calendar-icon.png"
                    alt=""
                    width={53}
                    height={53}
                  />
                </div>
                <h3 className="mt-6 text-[20px] font-bold text-text-dark">
                  Schedule Demos
                </h3>
                <p className="mt-2 text-[14px] text-text-muted">
                  Calendly widget will appear here
                </p>
                <p className="mt-1 text-[12px] text-text-muted">
                  Replace the src URL with your actual Calendly link
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
