import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const portfolioData = {
  lastName: "BAMANA",
  firstName: "Dusty Hordofel",
  initials: "BDH",
  url: "https://hordofel-dusty.vercel.app/",
  location: "Bordeaux, FR",
  locationLink: "",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary: "",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hordofel@gmail.com",
    tel: "0760474076",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dusty-Hordofel",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dusty-hordofel-bamana-08389310a",
        icon: Icons.linkedin,

        navbar: true,
      },
      //   X: {
      //     name: "X",
      //     url: "https://dub.sh/dillion-twitter",
      //     icon: Icons.x,

      //     navbar: true,
      //   },
      //   Youtube: {
      //     name: "Youtube",
      //     url: "",
      //     icon: Icons.youtube,
      //     navbar: true,
      //   },
      //   email: {
      //     name: "Send Email",
      //     url: "#",
      //     icon: Icons.email,

      //     navbar: false,
      //   },
    },
  },

  work: [
    {
      company: "",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "",
      end: "",
      description: "",
    },
  ],
  education: [
    {
      school: "",
      href: "",
      degree: "",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Nike-Clone Part1",
      href: "https://nike-clone-2024.vercel.app/",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "Welcome to the captivating world of [Nike-Clone](https://nike-clone-2024.vercel.app/), where performance and style converge to create an unparalleled experience in fashion and sports innovation. This e-commerce website, opens the doors to a haven for sports enthusiasts, passionate athletes, and urban fashion aficionados.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Authjs",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://nike-clone-2024.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dgsc66scx/image/upload/v1732411080/nike/jybsfykqkl5s8dofjele.png",
      video: "",
    },
    {
      title: "Bourgeois Proprete",
      href: "https://www.bourgeois-proprete.fr/",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description:
        "[Bourgeois Propreté](https://www.bourgeois-proprete.fr/) is a company specializing in residential and commercial cleaning services, offering tailored solutions to meet each client’s needs. With advanced expertise and innovative cleaning tools, we ensure spotless environments while respecting the environment.",
      technologies: ["Next.js", "Typescript", "Shadcn UI", "Magic UI"],
      links: [
        {
          type: "Website",
          href: "https://www.bourgeois-proprete.fr/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dgsc66scx/image/upload/v1727386521/bourgeois/pexels-vlad-fonsark-2175898-5100851_myhlje.jpg",
      video: "",
    },

    {
      title: "ESRP Pour tous (Project in progress)",
      href: "https://esrp-pour-tous.vercel.app/",
      dates: "Jun 2024 - Nov 2024",
      active: false,
      description:
        "We simplify the management of the professional integration process for students with disabilities within Professional Rehabilitation Establishments and Services (ESRP). Students can easily find their training programs as well as the available professional rehabilitation centers across France.",
      technologies: [
        "Next.js",
        "Typescript",
        "Shadcn UI",
        "MongoDB",
        "Mongoose",
        "React Table",
        "Authjs",
        "Resend",
      ],
      links: [
        {
          type: "Website",
          href: "https://esrp-pour-tous.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dgsc66scx/image/upload/v1732411926/esrp/xnr5lvwszwoxxjq8sk2g.png",
      video: "",
    },
    {
      title: "Hordofel",
      href: "https://hordofel-dusty.vercel.app/",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "[Hordofel](https://hordofel-dusty.vercel.app/) is a  collection of my work in web development. Dive in to explore my skills, passion, and the innovative ideas I’ve brought to life!",
      technologies: ["Next.js", "Typescript", "Shadcn UI", "Magic UI"],
      links: [
        {
          type: "Website",
          href: "https://hordofel-dusty.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dgsc66scx/image/upload/v1724616852/dusty/mk1acm0sjy2i1jjjdhv2.jpg",
      video: "",
    },
  ],
  upcomingProjects: [
    {
      title: "Nike-Clone",
      href: "https://nike-clone-2024.vercel.app/",
      dates: "Dec 2024 - Dec 2024",
      active: true,
      description:
        "Welcome to the captivating world of [Nike-Clone](https://nike-clone-2024.vercel.app/), where performance and style converge to create an unparalleled experience in fashion and sports innovation. This e-commerce website, opens the doors to a haven for sports enthusiasts, passionate athletes, and urban fashion aficionados.",
      technologies: ["Shopify", "Next.js", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://nike-clone-2024.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dgsc66scx/image/upload/v1732411080/nike/jybsfykqkl5s8dofjele.png",
      video: "",
    },
    {
      title: "HonosEdu",
      href: "#",
      dates: "Junuary 2025 - March 2025",
      active: true,
      description:
        "Simplify school management with HonosEdu – The ultimate tool to track, organize, and excel in education. From managing absences to tracking academic results, handle everything in one place and easily monitor your academic performance. Designed for students, teachers, administrators, and parents, HonosEdu helps all stakeholders in the educational system optimize their operations and create a more efficient and collaborative learning environment.",
      technologies: [
        "Next.js",
        "Typescript",
        "Stripe",
        "Appwrite",
        "Shadcn UI",
        "Magic UI",
        "React Table",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      //   image:
      //     "https://asset.cloudinary.com/dgsc66scx/1867cc0f9c6f73c7176dccf84b1eefb9",
      video:
        "https://cdn.dribbble.com/userupload/16038614/file/original-5adfefbbd718e35621ef7e6b499644fe.mp4",
    },
    {
      title: "SecuTrack",
      href: "#",
      dates: "March 2025 - June 2025",
      active: true,
      description:
        "SecuTrack – Optimize your security team’s management.Track schedules, manage logs, sign contracts, and centralize employee documents effortlessly. An all-in-one solution for efficient and secure administrative management in the private security sector.",
      technologies: [
        "Next.js",
        "Nest.js",
        "Socket.Io",
        "MongoDB",
        "Mongoose",
        "Passport.js",
        "Typescript",
        "Stripe",
        "Appwrite",
        "Shadcn UI",
        "Magic UI",
        "React Table",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.dribbble.com/userupload/15190652/file/original-ed2a101bcbb93f42d5b76ea95d4e3951.mp4",
    },
    {
      title: "Yahonos",
      href: "#",
      dates: "Mai 2025 - July 2025",
      active: true,
      description:
        "Yahonos E-commerce – The all-in-one platform for managing your online store.Easily handle inventory, track orders, process payments, and manage customers. Designed to simplify your e-commerce experience and boost your sales with powerful features for every business need.",
      technologies: [
        "Next.js",
        "Nest.js",
        "Socket.Io",
        "MongoDB",
        "Amazon Aws",
        "Mongoose",
        "Passport.js",
        "Typescript",
        "Stripe",
        "Appwrite",
        "Shadcn UI",
        "Magic UI",
        "React Table",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dgsc66scx/image/upload/v1732415378/original-32cdbfc5b281656e9c2ef017b030170f_dvjnkz.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
