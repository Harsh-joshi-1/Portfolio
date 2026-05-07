"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, Briefcase, Code2, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { resumeData } from "@/data/resume";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About Me", href: "/", icon: <User className="w-5 h-5" />, desc: "Get to know my story" },
    { name: "My Work", href: "/projects", icon: <Briefcase className="w-5 h-5" />, desc: "Check out my projects" },
    { name: "Tech Skills", href: "/skills", icon: <Code2 className="w-5 h-5" />, desc: "What I use to build" },
    { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" />, desc: "Let's work together" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, href: resumeData.personalInfo.linkedin },
    { icon: <FaGithub className="w-5 h-5" />, href: resumeData.personalInfo.github },
    { icon: <FaTwitter className="w-5 h-5" />, href: "https://x.com/rHarshJoshi" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "https://www.instagram.com/harsh_existed/" }
  ];

  // Base header that's safe for SSR
  const baseHeader = (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          {resumeData.personalInfo.name.split(" ")[0].toLowerCase()}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {link.name.split(' ').pop()}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Toggle Button (Visible on client only to avoid hydration issues) */}
        {mounted && (
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors z-[60]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        )}
      </nav>
    </header>
  );

  if (!mounted) return baseHeader;

  return (
    <>
      {baseHeader}

      {/* Mobile-only elements (Backdrop & Sidebar) */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[40] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Redesigned Premium Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-gray-50 dark:bg-neutral-950 z-[50] shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header Section */}
          <div className="p-8 pb-6 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-500/20 relative flex-shrink-0">
                <Image
                  src={resumeData.personalInfo.image}
                  alt={resumeData.personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <h2 className="text-lg font-bold dark:text-white truncate">{resumeData.personalInfo.name}</h2>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium truncate">NIT Jalandhar</p>
              </div>
            </div>
          </div>

          {/* Links Section - Dashboard Style */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 transition-all active:scale-95 group ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                style={{ transitionDelay: `${isOpen ? idx * 100 + 150 : 0}ms` }}
              >
                <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-800 dark:text-neutral-100">{link.name}</h3>
                  <p className="text-[10px] text-gray-500 dark:text-neutral-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Social & Footer Section */}
          <div className="p-8 pt-6 border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Connect With Me</p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 dark:bg-neutral-800 rounded-xl text-gray-600 dark:text-neutral-400 hover:text-indigo-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-[10px] text-gray-400 dark:text-neutral-600">
              © 2026 Harsh Joshi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
