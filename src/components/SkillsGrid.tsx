interface SkillCardProps {
  name: string;
  level: "Junior" | "Intermediate" | "Senior";
}

const levelStyles = {
  Junior: "bg-blue-100 text-blue-800",
  Intermediate: "bg-purple-100 text-purple-800",
  Senior: "bg-green-100 text-green-800",
};

const levelPercentage = {
  Junior: 40,
  Intermediate: 70,
  Senior: 95,
};

export function SkillCard({ name, level }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded ${levelStyles[level]}`}>
          {level}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
          style={{ width: `${levelPercentage[level]}%` }}
        />
      </div>
    </div>
  );
}

interface SkillsGridProps {
  title: string;
  skills: readonly { name: string; level: "Junior" | "Intermediate" | "Senior" }[];
}

export function SkillsGrid({ title, skills }: SkillsGridProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}
