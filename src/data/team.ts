export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const advisors: TeamMember[] = [
  {
    id: 1,
    name: "Mr. Anuj Kumar Bhatia",
    role: "Honorary Advisor",
    bio: "Former CSR Head, Valency International",
    image: "/team/1.png",
  },
  {
    id: 2,
    name: "Mr. Shubhro Roy",
    role: "Honorary Advisor",
    bio: "Senior Development Professional",
    image: "/team/2.png",
  },
  {
    id: 3,
    name: "Mr. Byasadev Naik, IES",
    role: "Honorary Advisor",
    bio: "Former Deputy Director, Ministry of Coal, Government of India",
    image: "/team/3.png",
  },
];

export const founders: TeamMember[] = [
  {
    id: 4,
    name: "Mr. Sahil Kaushar",
    role: "CEO & Co-Founder",
    bio: " ",
    image: "/team/4.jpg",
  },
  {
    id: 5,
    name: "Mr. Jestin Anthony",
    role: "Chairperson & Co-Founder",
    bio: "",
    image: "/team/5.png",
  },
];

export const team: TeamMember[] = [
  {
    id: 6,
    name: "Mr. Raushan Kumar",
    role: "Youth Programs & Outreach Officer",
    bio: "",
    image: "/team/6.jpg",
  },
  {
    id: 7,
    name: "Mr. Sourabh Sengupta",
    role: "Program Coordinator",
    bio: "",
    image: "/team/7.jpg",
  },
  {
    id: 8,
    name: "Adv. Madhu Talwar",
    role: "Legal Counselor",
    bio: "Advocate & Mediator, Supreme Court of India",
    image: "/team/8.png",
  },
  {
    id: 9,
    name: "Adv. Shraddha Saxena",
    role: "Legal Advisor",
    bio: "Advocate, Supreme Court of India",
    image: "/team/9.png",
  },
  {
    id: 10,
    name: "CA Vikas Mali",
    role: "Treasurer",
    bio: "Chartered Accountant",
    image: "/team/10.png",
  },
];
