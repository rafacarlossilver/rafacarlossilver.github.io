"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ContactSection } from "@/components/ContactSection";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-6">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              {profile.name}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4">
              {profile.title}
            </p>
            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed mb-8">
              {profile.shortBio}
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="#experience"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Ver Experiência
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all hover:shadow-lg"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">⭐</span> Destaques Profissionais
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 before:content-['✓'] before:text-green-600 before:font-bold before:mr-3 before:mt-0.5"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-1 h-10 bg-blue-600 rounded mr-4"></span>
            Experiência Profissional
          </h2>
          <p className="text-gray-700 mb-12">
            Trajetória de mais de 10 anos desenvolvendo soluções impactantes
          </p>
          <ExperienceTimeline experiences={profile.experience} />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="text-3xl mr-3">🎓</span> Educação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.education.map((edu, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h3>
                {edu.specialty && (
                  <p className="text-blue-600 font-semibold mb-2">{edu.specialty}</p>
                )}
                <p className="text-gray-700 mb-2">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 flex items-center">
            <span className="text-3xl mr-3">💼</span> Skills Técnicas
          </h2>
          <div className="space-y-12">
            {Object.entries(profile.skills).map(([category, skills]) => (
              <SkillsGrid key={category} title={category} skills={skills} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="text-3xl mr-3">🏆</span> Certificações & Cursos
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start before:content-['→'] before:text-purple-600 before:font-bold before:mr-3 before:mt-0.5 text-gray-700"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ContactSection
            email={profile.email}
            linkedin={profile.linkedin}
            github={profile.github}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
