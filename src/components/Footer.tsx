import { TimeTracker } from "./TimeTracker";

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pb-8 mt-12 text-center text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <img 
          src="https://hits.sh/harsh-joshi-portfolio.vercel.app.svg?label=Visitors&color=4f46e5" 
          alt="Visitor Count" 
        />
        <TimeTracker />
      </div>
      <div>
        © {new Date().getFullYear()} Harsh Joshi. Built with Next.js.
      </div>
    </footer>
  );
}
