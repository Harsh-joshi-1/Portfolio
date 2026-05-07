import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress,
  SiMysql, SiMongodb, SiPostgresql,
  SiOpenai,
  SiRedis, SiApachekafka,
  SiGit, SiGithub,
  SiRender, SiRailway, SiVercel
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Brain, Network, Webhook, Code, Database, Layers
} from "lucide-react";

export function SkillIcon({ skill, className = "w-6 h-6" }: { skill: string, className?: string }) {
  const s = skill.toLowerCase();
  if (s.includes("c/c++")) return <SiCplusplus className={`${className} text-blue-600`} />;
  if (s.includes("python")) return <SiPython className={`${className} text-yellow-500`} />;
  if (s.includes("javascript")) return <SiJavascript className={`${className} text-yellow-400`} />;
  if (s.includes("typescript")) return <SiTypescript className={`${className} text-blue-500`} />;
  
  if (s.includes("react")) return <SiReact className={`${className} text-cyan-400`} />;
  if (s.includes("next.js")) return <SiNextdotjs className={`${className} dark:text-white`} />;
  if (s.includes("tailwind")) return <SiTailwindcss className={`${className} text-cyan-500`} />;
  
  if (s.includes("node.js")) return <SiNodedotjs className={`${className} text-green-500`} />;
  if (s.includes("express")) return <SiExpress className={`${className} dark:text-white text-black`} />;
  if (s.includes("rest api")) return <Webhook className={`${className} text-indigo-500`} />;
  
  if (s.includes("mysql")) return <SiMysql className={`${className} text-blue-500`} />;
  if (s.includes("mongodb")) return <SiMongodb className={`${className} text-green-500`} />;
  if (s.includes("postgresql")) return <SiPostgresql className={`${className} text-blue-400`} />;
  if (s.includes("database")) return <Database className={`${className} text-gray-500`} />;
  
  if (s.includes("openai")) return <SiOpenai className={`${className} dark:text-white text-black`} />;
  if (s.includes("llm") || s.includes("nlp") || s.includes("ml")) return <Brain className={`${className} text-purple-500`} />;
  
  if (s.includes("thread") || s.includes("system") || s.includes("architecture")) return <Layers className={`${className} text-orange-500`} />;
  if (s.includes("event") || s.includes("kafka")) return <SiApachekafka className={`${className} dark:text-white text-black`} />;
  if (s.includes("websocket")) return <Network className={`${className} text-blue-500`} />;
  if (s.includes("redis")) return <SiRedis className={`${className} text-red-500`} />;
  
  if (s.includes("github")) return <SiGithub className={`${className} dark:text-white text-black`} />;
  if (s.includes("git")) return <SiGit className={`${className} text-orange-600`} />;
  
  if (s.includes("aws")) return <FaAws className={`${className} text-orange-500`} />;
  if (s.includes("render")) return <SiRender className={`${className} dark:text-white text-black`} />;
  if (s.includes("railway")) return <SiRailway className={`${className} dark:text-white text-black`} />;
  if (s.includes("vercel")) return <SiVercel className={`${className} dark:text-white text-black`} />;
  
  return <Code className={`${className} text-gray-400`} />;
}
