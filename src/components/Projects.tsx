import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: "1",
      title: "TypeScript Blog",
      description:
        "A modern web application taking users through the first steps on using TypeScript .",
      imageUrl: ".public/pics/TSBlog.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Al-Lamb/Hitchhikers-Guide-To-TS",
      demoUrl: "https://hitchhikers-guide-to-type-script-qa2d11duf.vercel.app/",
    },
    {
      id: "2",
      title: "TypeScript Detector",
      description: "Simple, Fun, Creative.",
      imageUrl: ".public/pics/TSDetector.png",
      tags: ["Next.js", "UI/UX", "Typescript"],
      githubUrl: "https://github.com/Al-Lamb/Typescript_Detector",
      demoUrl: "https://famous-monstera-7817d5.netlify.app/",
    },
    {
      id: "3",
      title: "Haringey Council Prototype",
      description:
        "Early stage Figma wireframe prototype for Haringey Council Social workers.",
      imageUrl: ".public/pics/figma.png",
      tags: ["Figma WireFrames", "Figjam", "Design Sprints"],
      githubUrl: "./pics/figma.png",
      demoUrl:
        "https://www.figma.com/design/bkLHmbgLaTDu5rLgYtV2HD/Team-2?node-id=227-747&t=w25oDeAbTMB8buli-1",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
