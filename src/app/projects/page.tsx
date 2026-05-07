import { resumeData } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <>
      <section className="fade-up">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <svg
              className="absolute -bottom-2 left-0 w-full h-6 text-indigo-400"
              viewBox="0 0 200 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                className="draw-path"
                d="M0 12 Q 25 2, 50 12 T 100 12 T 150 12 T 200 12"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <p className="text-xl text-gray-600 dark:text-neutral-300 max-w-3xl mx-auto mt-6">
            A collection of things I've built, focusing on AI and scalable backend systems.
          </p>
        </div>

        <div className="space-y-24">
          {resumeData.projects.map((project, idx) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center fade-up ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Info */}
              <div className={idx % 2 !== 0 ? "md:order-2" : ""}>
                <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                <p className="text-lg text-gray-600 dark:text-neutral-300 mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-neutral-300">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-indigo-500 mt-1 mr-3 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {project.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      href={link.url}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Project Image */}
              <div className={idx % 2 !== 0 ? "md:order-1" : ""}>
                <div className="bg-white dark:bg-neutral-900 rounded-3xl p-4 shadow-xl border border-gray-100 dark:border-neutral-800">
                  <div className="relative aspect-video rounded-2xl overflow-hidden uses-hover-zoom">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
