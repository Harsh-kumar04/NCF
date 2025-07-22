export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Eleanor Wright',
    role: 'Executive Director',
    bio: 'Dr. Wright has over 20 years of experience in international development and social work. Before joining Noble Citizen Foundation, she led humanitarian missions across Africa and Asia and served as a policy advisor to major international NGOs. She holds a Ph.D. in International Development from Oxford University.',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      email: 'eleanor@noblecitizen.org',
    },
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Director of Programs',
    bio: 'Marcus oversees all of Noble Citizen\'s project implementations worldwide. With a background in civil engineering and public health, he brings a unique perspective to community development. Previously, he managed large-scale infrastructure projects for Engineers Without Borders in South America and Southeast Asia.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      email: 'marcus@noblecitizen.org',
    },
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Chief Operations Officer',
    bio: 'Amara ensures that Noble Citizen\'s operations run smoothly and efficiently. With an MBA from Harvard Business School and previous experience at major corporations, she brings business acumen and strategic thinking to the nonprofit sector. She is passionate about creating sustainable operational models for maximum impact.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      email: 'amara@noblecitizen.org',
    },
  },
  {
    id: 4,
    name: 'Dr. Raj Patel',
    role: 'Director of Health Programs',
    bio: 'Dr. Patel leads our healthcare initiatives worldwide. A physician with specialization in public health, he previously worked with the World Health Organization addressing health crises in developing regions. His innovative approach to community health has been recognized with numerous international awards.',
    image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      email: 'raj@noblecitizen.org',
    },
  },
  {
    id: 5,
    name: 'Sofia Hernandez',
    role: 'Director of Education',
    bio: 'Sofia brings 15 years of experience in educational program development. Before joining Noble Citizen, she designed literacy programs for underserved communities and advised education ministries in Latin America. She holds a Master\'s in International Education Policy from Harvard University.',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      email: 'sofia@noblecitizen.org',
    },
  },
  {
    id: 6,
    name: 'James Mwangi',
    role: 'Director of Partnerships',
    bio: 'James cultivates and maintains relationships with our corporate partners, foundations, and major donors. With a background in business development and philanthropy, he excels at creating mutually beneficial partnerships that advance our mission while meeting partner objectives.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      email: 'james@noblecitizen.org',
    },
  },
  {
    id: 7,
    name: 'Lisa Kim',
    role: 'Communications Director',
    bio: 'Lisa leads our global communications strategy, ensuring our message reaches supporters, partners, and beneficiaries effectively. With previous experience at major media organizations and international nonprofits, she brings storytelling expertise and media savvy to amplify our impact stories.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      email: 'lisa@noblecitizen.org',
    },
  },
  {
    id: 8,
    name: 'Thomas Mbeki',
    role: 'Director of Sustainability',
    bio: 'Thomas ensures that all Noble Citizen projects integrate environmental sustainability and long-term planning. With a background in environmental science and community development, he develops frameworks that help communities thrive while protecting natural resources for future generations.',
    image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=800',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      email: 'thomas@noblecitizen.org',
    },
  }
];