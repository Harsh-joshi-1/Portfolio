import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, Calendar, Trophy } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { resumeData } from "@/data/resume";
import { SkillIcon } from "@/components/SkillIcon";

export default function Home() {
  return (
    <>
      <section id="home" className="fade-up">
        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 items-center">
          <div className="order-2 md:order-1 md:col-span-3">
            <p className="text-sm uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
              {resumeData.personalInfo.role}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
              Hi, I'm{" "}
              <span className="relative inline-block text-indigo-500">
                {resumeData.personalInfo.name.split(" ")[0]}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-4 text-indigo-400/60"
                  viewBox="0 0 100 24"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 12 Q 5 2, 10 12 T 20 12 T 30 12 T 40 12 T 50 12 T 60 12 T 70 12 T 80 12 T 90 12 T 100 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-neutral-300">
              {resumeData.personalInfo.summary}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
              >
                Contact Me
              </Link>
              <div className="flex gap-4">
                <Link
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-100 dark:border-neutral-800"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  aria-label="GitHub"
                  className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-100 dark:border-neutral-800"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link
                  href={`mailto:${resumeData.personalInfo.email}`}
                  aria-label="Email"
                  className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-100 dark:border-neutral-800"
                >
                  <Mail className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/rHarshJoshi"
                  target="_blank"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-100 dark:border-neutral-800"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/harsh_existed/"
                  target="_blank"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-100 dark:border-neutral-800"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-neutral-400 font-medium">
              From real-world projects to technical skills — explore my work or check out my <a href={resumeData.personalInfo.resume} target="_blank" className="text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-700 transition-colors">resume</a>.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-2 relative mt-8 md:mt-0">
            <Image
              src={resumeData.personalInfo.image}
              alt={resumeData.personalInfo.name}
              width={400}
              height={400}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 75vw, 400px"
              className="rounded-full md:rounded-3xl shadow-lg w-[75%] mx-auto md:w-full"
            />
          </div>
        </div>
      </section>

      <section id="experience" className="mt-24 fade-up">
        <div className="relative inline-block mb-8">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <svg
            className="absolute -bottom-2 left-0 w-full h-6 text-indigo-400"
            viewBox="0 0 200 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              className="draw-path"
              d="M0 12 Q 50 2, 100 12 T 200 12"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>

        <div className="relative">
          <div className="absolute left-2 md:left-8 top-0 w-0.5 bg-gray-200 dark:bg-neutral-800 h-full"></div>
          <div
            className="absolute left-2 md:left-8 top-0 w-0.5 bg-linear-to-b from-indigo-500 to-indigo-600 transition-all duration-1000 ease-out"
            style={{ height: "100%" }}
          ></div>
          <div className="space-y-12">
            {resumeData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 md:pl-20 fade-up"
              >
                <div className="absolute left-0 md:left-6 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950 shadow-lg bg-indigo-600"></div>
                <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-50">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                          {exp.company}
                        </p>
                        {exp.companyLink && (
                          <Link
                            href={exp.companyLink}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900 dark:bg-neutral-800 text-white rounded-xl text-sm font-bold hover:bg-black transition-all border border-neutral-700 shadow-lg group"
                          >
                            <svg
                              className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <span className="tracking-wide">Live</span>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-neutral-400 mt-2 md:mt-0">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-neutral-300">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-indigo-500 mt-1 mr-3 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mt-24 fade-up">
        <div className="flex justify-between items-end mb-8">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <svg
              className="absolute -bottom-2 left-0 w-full h-6 text-indigo-400"
              viewBox="0 0 200 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                className="draw-path"
                d="M0 12 Q 50 2, 100 12 T 200 12"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <Link href="/projects" className="hidden sm:inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.projects.slice(0, 2).map((project) => (
            <Link href="/projects" key={project.id} className="group block bg-white dark:bg-neutral-900 rounded-3xl p-4 shadow hover:shadow-xl transition-all card-hover border border-gray-100 dark:border-neutral-800">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.name}</h3>
                <p className="text-gray-600 dark:text-neutral-400 line-clamp-2 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 dark:bg-neutral-800 text-gray-500 rounded text-xs font-medium">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section id="skills" className="mt-24 fade-up">
        <div className="flex justify-between items-end mb-8">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold mb-2">Skills Overview</h2>
            <svg
              className="absolute -bottom-2 left-0 w-full h-6 text-indigo-400"
              viewBox="0 0 200 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                className="draw-path"
                d="M0 12 Q 50 2, 100 12 T 200 12"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <Link href="/skills" className="hidden sm:inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            All Skills <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-4">
          {["React.js", "Next.js", "Node.js", "Tailwind CSS", "C/C++", "Python", "OpenAI API", "Kafka"].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm py-2 px-4 border border-gray-100 dark:border-neutral-800 hover:border-indigo-200 transition-colors">
              <SkillIcon skill={skill} className="w-5 h-5" />
              <span className="font-medium text-sm">{skill}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/skills" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            All Skills <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section id="achievements" className="mt-24 fade-up">
        <div className="relative inline-block mb-8">
          <h2 className="text-3xl font-bold mb-2">Achievements</h2>
          <svg
            className="absolute -bottom-2 left-0 w-full h-6 text-indigo-400"
            viewBox="0 0 200 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              className="draw-path"
              d="M0 12 Q 50 2, 100 12 T 200 12"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <div className="grid gap-4">
          {resumeData.achievements.map((achievement, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-neutral-800 flex items-start gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl shrink-0 text-indigo-600 dark:text-indigo-400">
                <Trophy className="w-6 h-6" />
              </div>
              <p className="text-gray-700 dark:text-neutral-300 leading-relaxed font-medium mt-1">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="mt-24 fade-up">
        <div className="relative inline-block mb-8">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <svg
            className="absolute -bottom-2 left-0 w-full h-6 text-indigo-400"
            viewBox="0 0 200 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              className="draw-path"
              d="M0 10 Q50 0 100 10 T200 10"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow hover:shadow-xl transition-shadow card-hover">
              <h3 className="text-lg font-bold">{edu.institution}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{edu.degree}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-neutral-400">
                <span>{edu.score}</span>
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-24 fade-up">
        <div className="bg-indigo-600 dark:bg-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <svg
            className="absolute -right-10 -top-10 w-40 h-40 text-indigo-500 dark:text-indigo-800 opacity-30"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path d="M0 50 Q50 0 100 50 Q50 100 0 50"></path>
          </svg>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Let's build something amazing together</h2>
            <p className="mt-2 opacity-90">
              Available for freelance, contract, or collaboration. Schedule a quick call or drop me an email.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href={`mailto:${resumeData.personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit"
              >
                <Mail className="w-5 h-5" />
                Message Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
