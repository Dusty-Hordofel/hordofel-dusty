import Navbar from "@/components/navbar/navbar";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ui/project-card";
import Footer from "@/components/footer/footer";
import DemoComponent from "@/components/demo/demo-component";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] mx-auto  max-w-2xl  px-5 mb-10 ">
      <Navbar />
      <main className="mt-20">
        <section id="hero">
          <FollowerPointerCard className="mb-5">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span>BAMANA,</span>
                <span>Dusty Hordofel.</span>
              </h1>
            </div>
          </FollowerPointerCard>
          <FollowerPointerCard
            greeting={false}
            title={
              <TitleComponent avatar="https://res.cloudinary.com/dgsc66scx/image/upload/v1724616852/dusty/mk1acm0sjy2i1jjjdhv2.jpg" />
            }
          >
            <h2 className="md:text-xl">
              — a passionate junior developer who transforms ideas into digital
              solutions.
            </h2>
          </FollowerPointerCard>
        </section>
        <section id="projects" className="my-10">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {portfolioData.projects.map((project, id) => (
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </section>

        <section id="upcoming-projects" className="my-10">
          <h2 className="text-3xl font-bold mb-10">Upcoming Projects</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {portfolioData.upcomingProjects.map((project) => (
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </section>
        <section id="components" className="my-10">
          <h2 className="text-3xl font-bold">Components</h2>
          <p className="mt-5 text-xl text-gray-500">
            Available in a few weeks.
          </p>
        </section>
        {/* <DemoComponent
          // key={componentName}
          directory="forms/demo"
          componentName="auth-register-form"
        /> */}
      </main>

      <Footer />
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title?: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="80"
      width="80"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className="text-red-500">{title}</p>
  </div>
);
