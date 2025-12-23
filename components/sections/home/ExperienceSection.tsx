// import React from 'react';

type Props = {};

export default function ExperienceSection({ }: Props) {

    const experience = [
        {
            company: "Lenna AI (PT. Sinergi Digital Teknologi)",
            role: "Fullstack Developer",
            aspect: "Internship",
            period: "Jan 2025 - Jun 2025",
            description: "Developed an HRIS web application managing employee data for internal use, including attendance tracking and leave approval workflows."
        },
        {
            company: "Wikventory Project | SMK Wikrama Bogor",
            role: "Lead Backend Developer",
            aspect: "Lead Backend",
            period: "Sep 2025",
            description: "Spearheaded backend architecture using Laravel and PostgreSQL, designing complex database schemas for asset tracking and secure RESTful APIs to support the Vue.js frontend."
        }
    ]

    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-3 mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Experience</h2>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[13px] top-0 bottom-0 w-0.5 bg-indigo-500 hidden md:block"></div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative md:pl-12">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-0 h-7 w-7 rounded-full border-4 border-white dark:border-gray-900 bg-indigo-500 shadow-lg hidden md:block"></div>


                                <div className="group rounded-xl border border-gray-200 p-6 bg-white/50 dark:bg-primary/80 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 dark:border-gray-800">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                                {exp.company}
                                            </h3>
                                            <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-1">
                                                {exp.role}
                                            </p>
                                        </div>
                                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 w-fit">
                                            {exp.aspect}
                                        </span>
                                    </div>

                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                                        {exp.period}
                                    </p>

                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}