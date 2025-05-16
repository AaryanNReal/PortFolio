import { EducationItem } from "../types/types";

const educationData: EducationItem[] = [
   {
    id: 1,
    degree: "BSc in Computer Science",
    Gpa : "9.1/10",
    institution: "Guru Nanak Khalsa College",
    year: "2022-2025",
    description: "Completed a Bachelor of Science in Computer Science with a focus on software development, algorithms, and data structures. Participated in various coding competitions and hackathons, enhancing problem-solving skills and teamwork, Full Stack Development, Data Science, and Machine Learning."
  }
];

const certificatesData = [
  {
    id: 1,
    name: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    date: "2023",
    description: "Comprehensive course on Python for data science and machine learning applications , including libraries like Pandas, NumPy, and Scikit-learn."
  },
  {
    id: 2,
    name: "Java and Frameworks",
    issuer: "Udemy",
    date: "2024",
    description: "In-depth course on Java programming and frameworks like Spring and Hibernate, covering object-oriented programming, web development, and database integration, Next JS, React JS"
  },
  {
    id: 3,
    name: "Content Writing",
    issuer: "Udemy",
 
    date: "2025",
    description: "Course on content writing and digital marketing strategies , covering SEO, social media marketing, and effective writing techniques for online platforms, including blogs and articles."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-90"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">My <span className="text-cyan-400">Education</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        
        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="inline-block w-2 h-2 bg-cyan-400 mr-2 rounded-full"></span>
            Academic Background
          </h3>
          <div className="space-y-8">
            {educationData.map((item) => (
              <div 
                key={item.id} 
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400">{item.degree}</h3>
                  <span className="text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full text-sm">
                    GPA: {item.Gpa} 
                  </span>
                  <span className="text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full text-sm">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{item.institution}</h4>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certificates Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="inline-block w-2 h-2 bg-purple-400 mr-2 rounded-full"></span>
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert) => (
              <div 
                key={cert.id}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-purple-400">{cert.name}</h4>
                  <span className="text-gray-300 bg-gray-800/50 px-2 py-1 rounded-full text-xs">
                    {cert.date}
                  </span>
                </div>
                <h5 className="text-sm font-medium text-white mb-2">{cert.issuer}</h5>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;