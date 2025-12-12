import { Trophy, Medal, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and professional experience in Computer Science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-indigo-600">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600">[Your University] - Expected [Year]</p>
                <p className="text-gray-600 mt-2">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-indigo-600">[Your Position]</h4>
                  <p className="text-gray-600">[Company Name] - [Time Period]</p>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>[Key responsibility or achievement]</li>
                    <li>[Key responsibility or achievement]</li>
                    <li>[Key responsibility or achievement]</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-indigo-600">[Your Position]</h4>
                  <p className="text-gray-600">[Company Name] - [Time Period]</p>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>[Key responsibility or achievement]</li>
                    <li>[Key responsibility or achievement]</li>
                    <li>[Key responsibility or achievement]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Trophy className="text-yellow-500" size={20} />
                  <span>[Your Achievement]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Medal className="text-blue-500" size={20} />
                  <span>[Your Achievement]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-green-500" size={20} />
                  <span>[Your Achievement]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
