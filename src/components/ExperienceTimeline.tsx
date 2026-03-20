interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  impact: string;
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          {/* Timeline line and dot */}
          <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -ml-2 mt-1.5 shadow-lg" />

          {index < experiences.length - 1 && (
            <div className="absolute left-0 top-6 w-0.5 h-24 bg-gray-200 -ml-1.5" />
          )}

          {/* Content */}
          <div className="ml-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-blue-600 font-semibold">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 font-medium mt-1 sm:mt-0 inline-block">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 flex items-start before:content-['→'] before:mr-3 before:text-blue-600 before:font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-3 rounded">
              <p className="text-sm text-gray-900 font-semibold">
                <span className="text-blue-600">💡 Impacto:</span> {exp.impact}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
