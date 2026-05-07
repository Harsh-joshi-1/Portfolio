import { resumeData } from "@/data/resume";
import { SkillIcon } from "@/components/SkillIcon";

export default function Skills() {
  const allSkills = [
    { title: "Languages", items: resumeData.skills.languages },
    { title: "Frontend", items: resumeData.skills.frontend },
    { title: "Backend", items: resumeData.skills.backend },
    { title: "Databases", items: resumeData.skills.databases },
    { title: "AI/ML", items: resumeData.skills.aiml },
    { title: "Systems", items: resumeData.skills.systems },
    { title: "Tools", items: resumeData.skills.tools },
    { title: "Deployment", items: resumeData.skills.deployment },
  ];

  return (
    <>
      <section className="fade-up">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl font-bold mb-4">Skills & Tools</h1>
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
            I know more programming languages than spoken languages.
          </p>
        </div>

        <div className="space-y-12">
          {allSkills.map((category, idx) => (
            <div key={idx} className="fade-up">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-neutral-50">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="card-hover flex w-[45%] md:w-[30%] lg:w-1/4 xl:w-1/5 bg-white dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden group border border-gray-100 dark:border-neutral-800"
                  >
                    <div className="flex items-center justify-start p-3 sm:p-4 gap-2 sm:gap-3 transition-transform duration-200 w-full">
                      <SkillIcon skill={skill} className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
                      <p className="text-gray-800 dark:text-neutral-200 text-sm sm:text-base font-medium truncate">
                        {skill}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
