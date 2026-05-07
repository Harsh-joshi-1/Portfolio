import Image from "next/image";
import Link from "next/link";
import { resumeData } from "@/data/resume";
import { Lock, Mail, FileText } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Hero copy */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              I{" "}
              <span className="relative inline-block">
                <span className="relative inline-block">
                  build
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 120 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15 L110 45 M110 15 L10 45"
                      stroke="rgb(239 68 68)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      opacity="1"
                    ></path>
                  </svg>
                </span>
                <span
                  className="absolute -top-10 -right-10 text-5xl text-indigo-500 font-serif italic"
                  style={{ transform: "rotate(-15deg)" }}
                >
                  ship
                </span>
              </span>{" "}
              production-ready products & reliable systems
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-neutral-300 max-w-3xl">
              Developer with experience crafting scalable web applications. I specialize in modern JavaScript ecosystems, backend infrastructure, and applying AI to real-world problems.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <span className="text-sm text-indigo-600 font-semibold mb-1">
                  Experience
                </span>
                <span className="text-gray-600 dark:text-neutral-300 text-sm">
                  Full-stack, UI/UX, Cloud, APIs, Database & ORMs
                </span>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <span className="text-sm text-indigo-600 font-semibold mb-1">
                  Location
                </span>
                <span className="text-gray-600 dark:text-neutral-300 text-sm">
                  Jalandhar, India
                </span>
                <span className="text-gray-500 dark:text-neutral-400 text-xs mt-1">
                  NIT Jalandhar
                </span>
              </div>
            </div>
          </div>
          {/* Right: Profile / contact card */}
          <div className="md:col-span-1 flex items-center">
            <div className="w-full bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow text-center border border-gray-100 dark:border-neutral-800">
              <Image
                src={resumeData.personalInfo.image}
                alt={resumeData.personalInfo.name}
                width={128}
                height={128}
                className="mx-auto w-32 h-32 rounded-full shadow-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">{resumeData.personalInfo.name}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">
                {resumeData.personalInfo.role}
              </p>

              <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-neutral-300">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <Link
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {resumeData.personalInfo.email}
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="inline-flex justify-center items-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Message Me
                </Link>
                <Link
                  href={resumeData.personalInfo.resume}
                  target="_blank"
                  className="inline-flex justify-center items-center gap-2 bg-white dark:bg-neutral-800 text-gray-700 dark:text-neutral-200 border border-gray-200 dark:border-neutral-700 px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  See My Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 fade-up">
        <div className="bg-indigo-600 dark:bg-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Ready to chat?</h2>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href={`mailto:${resumeData.personalInfo.email}`}
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit"
              >
                <Mail className="w-5 h-5" />
                Message Me
              </Link>
              <Link
                href={resumeData.personalInfo.resume}
                target="_blank"
                className="inline-flex items-center gap-2 bg-indigo-500/50 text-white border border-white/20 px-5 py-3 rounded-lg font-semibold hover:bg-indigo-500/70 transition-colors w-fit backdrop-blur-sm"
              >
                <FileText className="w-5 h-5" />
                See My Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
