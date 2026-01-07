import React, { Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { PROJECTS, TEMPLATES } from "../constants";
import { ProjectCategory } from "../types";

const AuthorityStrip = React.lazy(() => import("../components/AuthorityStrip"));
const About = React.lazy(() => import("../components/About"));
const Footer = React.lazy(() => import("../components/Footer"));
const EngineeringSection = React.lazy(
  () => import("../components/sections/EngineeringSection")
);
const TemplatesSection = React.lazy(
  () => import("../components/sections/TemplatesSection")
);
const DesignSection = React.lazy(
  () => import("../components/sections/DesignSection")
);
import { WhatsAppWidget } from "../components/WhatsAppWidget";
import { HowItWorks } from "../components/HowItWorks";
import { SocialProof } from "../components/SocialProof";
import { FAQ } from "../components/FAQ";
import { Testimonials } from "../components/Testimonials";

import { ROICalculator } from "../components/ROICalculator";
import { BlogPreview } from "../components/BlogPreview";
import { PartnerSection } from "../components/PartnerSection";

export const Home = () => {
  const saasProjects = PROJECTS.filter(
    (p) => p.category === ProjectCategory.SAAS
  );
  const designProjects = PROJECTS.filter(
    (p) => p.category === ProjectCategory.DESIGN
  );

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />

          <Suspense fallback={<div className="h-20" />}>
            <AuthorityStrip />

            <div id="projects" className="py-24 md:py-32">
              <div className="container mx-auto px-6 space-y-40 mb-32">
                <EngineeringSection projects={saasProjects} />

                <ROICalculator />

                <div id="templates" className="scroll-mt-24">
                  <TemplatesSection templates={TEMPLATES} />
                </div>
              </div>

              <HowItWorks />

              <div className="container mx-auto px-6 py-32">
                <DesignSection projects={designProjects} />
              </div>

              <div className="space-y-0">
                <SocialProof />
                <Testimonials />
                <FAQ />
                <BlogPreview />
                <PartnerSection />
              </div>
            </div>

            <About />
            <Footer />
            <WhatsAppWidget />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
