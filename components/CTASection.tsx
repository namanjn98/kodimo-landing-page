"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-text-primary py-20 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-[89px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pl-5"
          >
            <span className="text-[14px] uppercase tracking-widest text-primary-navy">
              LET&apos;S CONNECT
            </span>

            <div className="mt-4">
              <p className="text-[28px] md:text-[40px] leading-tight text-primary-navy">
                See How{" "}
                <span className="font-heading text-[32px] md:text-[48px] font-bold italic">Accurate </span>
              </p>
              <p>
                <span className="font-heading text-[32px] md:text-[48px] font-bold italic text-primary-navy">Estimates</span>{" "}
                <span className="text-[28px] md:text-[40px] text-primary-navy">Help You</span>
              </p>
              <p className="font-heading text-[32px] md:text-[47px] font-bold italic text-primary-navy">
                Win More Bids
              </p>
            </div>

            <p className="mt-2 max-w-[491px] text-[20px] leading-[30px] text-text-description">
              Schedule a personalised demo and discover how Kodimo can transform your construction estimating process
            </p>

            <div className="mt-4 space-y-1 text-[14px] leading-[30px] text-text-description">
              {[
                "See the platform in action with your own project",
                "Discuss your specific estimating needs",
                // "Get a customised pricing proposal",
                "Ask questions about our process",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  {/* <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M1.5 6.5L5.5 10.5L13.5 2" stroke="#959B98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
<path d="M10.3846 4.5V7.5C10.3846 7.63261 10.3238 7.75978 10.2156 7.85355C10.1074 7.94732 9.9607 8 9.80769 8C9.65468 8 9.50794 7.94732 9.39975 7.85355C9.29155 7.75978 9.23077 7.63261 9.23077 7.5V5.70687L5.60048 8.85375C5.54688 8.9002 5.48325 8.93705 5.41321 8.9622C5.34318 8.98734 5.26811 9.00028 5.19231 9.00028C5.11651 9.00028 5.04144 8.98734 4.97141 8.9622C4.90137 8.93705 4.83774 8.9002 4.78414 8.85375C4.73053 8.80729 4.68802 8.75214 4.65901 8.69145C4.63 8.63075 4.61507 8.5657 4.61507 8.5C4.61507 8.4343 4.63 8.36925 4.65901 8.30855C4.68802 8.24785 4.73053 8.1927 4.78414 8.14625L8.41515 5H6.34616C6.19315 5 6.0464 4.94732 5.93821 4.85355C5.83002 4.75978 5.76923 4.63261 5.76923 4.5C5.76923 4.36739 5.83002 4.24021 5.93821 4.14645C6.0464 4.05268 6.19315 4 6.34616 4H9.80769C9.9607 4 10.1074 4.05268 10.2156 4.14645C10.3238 4.24021 10.3846 4.36739 10.3846 4.5ZM15 6.5C15 7.78558 14.5601 9.04228 13.736 10.1112C12.9119 11.1801 11.7406 12.0132 10.3701 12.5052C8.99968 12.9972 7.49168 13.1259 6.03682 12.8751C4.58197 12.6243 3.2456 12.0052 2.1967 11.0962C1.14781 10.1872 0.433503 9.02896 0.144114 7.76809C-0.145275 6.50721 0.00324965 5.20028 0.570907 4.01256C1.13856 2.82484 2.09986 1.80968 3.33323 1.09545C4.56659 0.381218 6.01664 0 7.5 0C9.48848 0.00181989 11.3949 0.687224 12.801 1.90582C14.2071 3.12441 14.9979 4.77665 15 6.5ZM13.8462 6.5C13.8462 5.4122 13.474 4.34883 12.7766 3.44436C12.0793 2.53989 11.0882 1.83494 9.92857 1.41866C8.76896 1.00238 7.49296 0.893462 6.26193 1.10568C5.0309 1.3179 3.90012 1.84172 3.01259 2.61091C2.12507 3.3801 1.52066 4.36011 1.27579 5.427C1.03092 6.4939 1.1566 7.59976 1.63692 8.60476C2.11725 9.60975 2.93065 10.4687 3.97427 11.0731C5.01789 11.6774 6.24485 12 7.5 12C9.18252 11.9983 10.7956 11.4184 11.9853 10.3873C13.175 9.35617 13.8442 7.95818 13.8462 6.5Z" fill="#172E46"/>
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
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-[595px] overflow-hidden rounded-lg border border-border-light bg-text-primary shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <iframe
                src="https://calendly.com/nj-kodimo/30min?hide_gdpr_banner=1&hide_event_type_details=1"
                width="100%"
                height="700"
                className="max-h-[500px] md:max-h-[700px]"
                frameBorder="0"
                title="Schedule a demo"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
