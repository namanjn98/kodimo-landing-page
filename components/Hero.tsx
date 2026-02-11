"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  const openDemo = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemo(true);
  }, []);

  const closeDemo = useCallback(() => {
    setShowDemo(false);
  }, []);

  useEffect(() => {
    if (!showDemo) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [showDemo, closeDemo]);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-[72px]">
        <div className="absolute inset-0 bg-primary-dark-alt" />
        <div className="absolute inset-0 bg-black/20" />

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

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-[107px]">
          <div className="flex flex-col items-start pb-32 pt-[100px] md:pt-[174px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-[37px]">
                Get estimates in hours, not days
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-[806px] font-serif text-[36px] md:text-[64px] font-light leading-[1.15]"
            >
              <span className="text-primary-lime">One-click</span>{" "}
              <span className="text-[#efefef]">estimates</span>
              <br />
              <span className="text-[#efefef]">Faster Bids, </span>
              <span className="text-primary-lime">Higher wins</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-[11px] max-w-[681px] text-[16px] md:text-[20px] leading-[30px] text-text-secondary"
            >
              Let us handle your estimates so you can focus on winning more bids
              Powered by AI, verified by expert estimators
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-[67px] flex flex-col sm:flex-row gap-[19px] items-center sm:items-start w-full sm:w-auto"
            >
              <Button
                variant="primary"
                href="https://app.kodimo.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <span>Try it Yourself</span>
              </Button>
              <Button variant="secondary" href="#demo" onClick={openDemo}>
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeDemo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[90vw] max-w-[1100px] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeDemo}
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-3xl font-light transition-colors cursor-pointer"
                aria-label="Close video"
              >
                ✕
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jv6iMCrmfyg?autoplay=1"
                title="Our Secret Sauce - Product Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
