"use client";

import AnimatedSection from "@/components/AnimatedSection";
import NavItem from "@/components/NavItem";
import PreLoad from "@/components/PreLoad";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import SocialLink from "@/components/SocialLink";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// --- Main App Component ---
export default function PortfolioPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // --- State untuk mengontrol preloader ---
  const [isLoading, setIsLoading] = useState(true);

  // Sembunyikan preloader setelah animasi selesai
  useEffect(() => {
    // Perkiraan durasi preloader. Anda bisa menyesuaikannya jika perlu.
    const totalDuration = 8000;

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, totalDuration);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  // Total delay untuk animasi konten utama masuk
  const contentAnimationDelay = 5000 / 1000;

  return (
    <div className="bg-[#111111] text-gray-200 font-sans">
      <AnimatePresence>{isLoading && <PreLoad />}</AnimatePresence>

      <main
        className={`min-h-screen flex flex-col lg:flex-row ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        {/* Left Side: Info & Navigation */}
        <div className="lg:w-1/2 lg:h-screen lg:flex lg:flex-col justify-between p-8 lg:p-12 sticky top-0">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: isLoading ? contentAnimationDelay : 0,
              }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                アニサ
              </h1>
              <h2 className="text-xl md:text-2xl text-cyan-400 mt-2">
                Frontend Developer & Creative Coder
              </h2>
              <p className="mt-4 text-gray-400 max-w-md">
                Saya mengubah ide-ide kompleks menjadi pengalaman digital yang
                indah, intuitif, dan dapat diakses.
              </p>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: isLoading ? contentAnimationDelay + 0.2 : 0.2,
                duration: 0.5,
              }}
              className="mt-12 hidden lg:block"
            >
              <ul className="space-y-4">
                <li>
                  <NavItem
                    href="#projects"
                    text="Proyek"
                    scrollYProgress={scrollYProgress}
                    range={[0, 0.5]}
                  />
                </li>
                <li>
                  <NavItem
                    href="#skills"
                    text="Keahlian"
                    scrollYProgress={scrollYProgress}
                    range={[0.5, 0.8]}
                  />
                </li>
                <li>
                  <NavItem
                    href="#contact"
                    text="Kontak"
                    scrollYProgress={scrollYProgress}
                    range={[0.8, 1]}
                  />
                </li>
              </ul>
            </motion.nav>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: isLoading ? contentAnimationDelay + 0.4 : 0.4,
              duration: 0.5,
            }}
            className="flex items-center space-x-4 mt-8 lg:mt-0"
          >
            <SocialLink
              href="https://github.com/annisadwiarum"
              icon={<Github size={20} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/annisadwiarum/"
              icon={<Linkedin size={20} />}
            />
            <SocialLink
              href="https://x.com/annisadwiarum"
              icon={<Twitter size={20} />}
            />
            <SocialLink
              href="https://www.instagram.com/annisadwiarum"
              icon={<Instagram size={20} />}
            />
            <SocialLink
              href="https://www.facebook.com/annisa.d.arum"
              icon={<Facebook size={20} />}
            />
          </motion.div>
        </div>

        {/* Right Side: Scrollable Content */}
        <div ref={scrollRef} className="lg:w-1/2 lg:h-screen overflow-y-scroll">
          <div className="p-8 lg:p-12">
            <AnimatedSection id="projects">
              <h3 className="text-2xl font-bold text-white mb-6">
                Proyek Unggulan
              </h3>
              <div className="space-y-8">
                <ProjectCard
                  title="E-commerce Platform"
                  description="Platform marketplace modern dengan fitur real-time chat dan sistem pembayaran terintegrasi."
                  tags={["Next.js", "TypeScript", "Node.js", "Socket.IO"]}
                  liveUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Company Profile Interaktif"
                  description="Website profil perusahaan dengan animasi 3D dan transisi halaman yang mulus menggunakan Framer Motion."
                  tags={["Next.js", "Framer Motion", "Three.js"]}
                  liveUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Sistem Manajemen Proyek"
                  description="Aplikasi berbasis Laravel untuk manajemen tugas dan kolaborasi tim dengan arsitektur modular."
                  tags={["Laravel", "PHP", "Vue.js"]}
                  liveUrl="#"
                  codeUrl="#"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection id="skills">
              <h3 className="text-2xl font-bold text-white mb-6 mt-16">
                Keahlian & Teknologi
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <SkillBadge name="TypeScript" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="React" />
                <SkillBadge name="Node.js" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="Framer Motion" />
                <SkillBadge name="Laravel" />
                <SkillBadge name="Git" />
              </div>
            </AnimatedSection>

            <AnimatedSection id="contact">
              <div className="mt-16 bg-gray-900/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white">
                  Punya Ide Keren?
                </h3>
                <p className="text-gray-400 mt-2">
                  Saya selalu terbuka untuk kolaborasi atau sekadar ngobrol
                  tentang teknologi. Mari terhubung!
                </p>
                <motion.a
                  href="mailto:annisadwiarum710@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 mt-6 bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg"
                >
                  Kirim Email <Mail size={18} />
                </motion.a>
              </div>
            </AnimatedSection>

            <footer className="text-center text-gray-500 text-sm py-8 mt-8">
              Didesain & Dibuat dengan ❤️ oleh アニサ
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
