"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/components/ui/Card";

const features = [
  {
    label: "NAVIGATE",
    titleItalic: "Kodi",
    titleBold: " Vision",
    description: "Search and summarise across construction documents with our best-in-class document understanding AI models",
    tabIcon: "/images/scan-tab-icon.png",
    image: "/images/Frame-46.gif",
  },
  {
    label: "TAKEOFFS",
    titleItalic: "Kodi",
    titleBold: " Drawing Set",
    description: "Count, calculate and measure the drawings with precision accuracy using our best-in-class geometry AI models",
    tabIcon: "/images/takeoff-tab-icon.png",
    image: "/images/Frame-47.gif",
  },
  {
    label: "ESTIMATE",
    titleItalic: "Kodi",
    titleBold: " PriceGPT",
    description: "Fetch up-to-date pricing in your region and connect your historical data to generate personalised estimates",
    tabIcon: "/images/pricing-tab-icon.png",
    image: "/images/Frame-49.gif",
  },
];

const tabs = [
  { name: "Navigate", href: "#feature-navigate" },
  { name: "Takeoffs", href: "#feature-takeoffs" },
  { name: "Estimate", href: "#feature-estimate" },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("navigate");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("feature-", "");
          setActiveTab(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all feature sections
    features.forEach((feature) => {
      const element = document.getElementById(`feature-${feature.label.toLowerCase()}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="secret-sauce" className="bg-primary-dark-alt">
      <div className="mx-auto max-w-[1440px]">
        {/* Sticky Header */}
        <div className="sticky top-[72px] z-40 bg-primary-dark-alt px-6 md:px-[70px] pb-6 pt-16">
          {/* <p className="text-[14px] font-normal text-primary-lime">
            WHY USE THE KODIMO WAY?
          </p> */}
          <h2 className="mt-4 text-[32px] font-semibold leading-[40px]">
            <span className="text-text-light">What is our </span>
            <span className="font-heading italic text-primary-lime">Secret Sauce?</span>
          </h2>

          {/* Tab Navigation */}
          <div className="mt-6 flex items-center gap-6 md:gap-[67px]">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab.name}>
                <a
                  href={tab.href}
                  className={`text-[18px] text-primary-lime transition-colors hover:underline ${activeTab === tab.name.toLowerCase() ? "underline decoration-2 underline-offset-4" : ""}`}
                >
                  {tab.name}
                </a>
                {index < tabs.length - 1 && (
                  <Image
                    src="/images/chevron-right.png"
                    alt=""
                    width={13}
                    height={19}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Feature Sections */}
        <div className="space-y-0 bg-primary-dark-alt">
          {features.map((feature) => (
            <motion.div
              key={feature.label}
              id={`feature-${feature.label.toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative px-4 md:px-[81px] pb-16 pt-8"
            >
              {/* Dark inner card */}
              <Card variant="feature" className="relative mx-auto min-h-[466px] max-w-[1244px] overflow-hidden lg:grid lg:grid-cols-2">
                {/* Text Content */}
                <div className="p-6 md:p-12">
                  <div className="mb-3 flex items-center gap-2">
                    <Image
                      src={feature.tabIcon}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>
                  <span className="text-[14px] leading-[35px] text-text-primary">
                    {feature.label}
                  </span>
                  <h3 className="mt-2 text-[28px] md:text-[40px] leading-[35px]">
                    <span className="font-serif italic text-primary-lime">{feature.titleItalic}<sup className="text-[10px] align-super ml-1">TM</sup></span>
                    <span className="font-bold text-[#efefef]">{feature.titleBold}</span>
                  </h3>
                  <p className="mt-6 max-w-[413px] text-[18px] leading-[35px] text-text-primary">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative flex min-h-[250px] md:min-h-[400px] items-center justify-center overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={`${feature.label} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
