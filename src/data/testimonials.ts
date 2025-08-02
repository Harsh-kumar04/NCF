export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Krishna kumar',
    role: 'Community Member, Clean Water Initiative',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Before the Noble Citizen Foundation came to our village, we had to walk 5 kilometers every day to fetch water that wasn\'t even clean. Now, we have a well right in our community, and my children no longer suffer from waterborne illnesses. This has transformed our daily lives in ways I cannot fully express.',
  },
  {
    id: 2,
    name: 'Rajiv Patel',
    role: 'Teacher, Education For All Program',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'The teacher training program has completely changed how I approach education. I\'ve learned innovative methods that truly engage my students, and the resources provided have made our classroom a vibrant place of learning. I see the difference in my students\' enthusiasm and test scores.',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Volunteer Coordinator',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Volunteering with Noble Citizen has been the most rewarding experience of my life. The organization is incredibly well-structured, and I can see the direct impact of our work. What stands out most is how they truly partner with communities rather than imposing solutions.',
  },
  {
    id: 4,
    name: 'Carlos Mendez',
    role: 'Community Garden Project Participant',
    avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'The community garden has become the heart of our neighborhood. Not only do we grow nutritious food, but it\'s also where we gather, share stories, and build bonds. My children are learning about sustainability, and we\'re eating healthier than ever before.',
  },
  {
    id: 5,
    name: 'Aisha Ndlovu',
    role: 'Youth Leadership Academy Graduate',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'The leadership academy didn\'t just teach me skills—it helped me discover my voice and purpose. With the support of my mentors, I\'ve started an after-school program in my community that helps 50 children weekly. I now see challenges as opportunities to create positive change.',
  },
];