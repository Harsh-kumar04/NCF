export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  goals: string[];
  impact: {
    label: string;
    value: string;
  }[];
  status: 'ongoing' | 'completed';
}

export const projects: Project[] = [
  {
    id: 'clean-water-initiative',
    title: 'Clean Water Initiative',
    category: 'Health',
    location: 'Rural Kenya',
    summary: 'Providing clean drinking water to communities in rural Kenya through sustainable well-drilling and water purification systems.',
    description: 'Access to clean water is a fundamental human right, yet millions around the world still lack this basic necessity. Our Clean Water Initiative focuses on addressing this critical need in rural Kenya, where communities often rely on contaminated water sources that lead to preventable waterborne diseases. Through this program, we drill wells, install water purification systems, and train local community members to maintain these resources, ensuring long-term sustainability. Additionally, we conduct educational workshops on proper hygiene practices to maximize the health benefits of clean water access.',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2231535/pexels-photo-2231535.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    goals: [
      'Drill 50 new wells in areas with limited water access',
      'Install water purification systems in 30 villages',
      'Train 100 community members in system maintenance',
      'Reduce waterborne disease incidence by 70%',
      'Conduct 40 workshops on hygiene practices'
    ],
    impact: [
      { label: 'Communities Served', value: '27' },
      { label: 'People with Access', value: '45,000+' },
      { label: 'Wells Drilled', value: '32' },
      { label: 'Disease Reduction', value: '65%' }
    ],
    status: 'ongoing'
  },
  {
    id: 'education-for-all',
    title: 'Education For All',
    category: 'Education',
    location: 'Urban India',
    summary: 'Ensuring quality education for underprivileged children in urban India through school infrastructure, teacher training, and scholarships.',
    description: 'Education is the cornerstone of development and social mobility. Our Education For All program works to break the cycle of poverty by providing quality education opportunities to underprivileged children in urban India. We focus on a holistic approach that includes improving school infrastructure, providing educational materials, training teachers in modern pedagogical methods, and offering scholarships to promising students who would otherwise be unable to continue their education. Our program also includes after-school support to ensure students receive the assistance they need to succeed academically.',
    image: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    goals: [
      'Renovate 15 schools in underprivileged areas',
      'Provide scholarships to 500 students annually',
      'Train 200 teachers in modern teaching methods',
      'Establish 10 computer labs with internet access',
      'Achieve 95% retention rate for scholarship students'
    ],
    impact: [
      { label: 'Schools Improved', value: '12' },
      { label: 'Students Reached', value: '7,500+' },
      { label: 'Scholarships Awarded', value: '350' },
      { label: 'Graduation Rate', value: '92%' }
    ],
    status: 'ongoing'
  },
  {
    id: 'community-gardens',
    title: 'Community Gardens Project',
    category: 'Environment',
    location: 'Brazil',
    summary: 'Creating sustainable community gardens in urban areas of Brazil to promote food security, environmental education, and community bonding.',
    description: 'The Community Gardens Project addresses multiple challenges simultaneously: food insecurity, environmental degradation, and community disconnection. By transforming unused urban spaces into productive community gardens, we provide fresh, nutritious produce to areas often classified as food deserts. Local residents learn sustainable agricultural practices, environmental stewardship, and gain a renewed sense of community as they work together to cultivate these shared spaces. The gardens also serve as outdoor classrooms for environmental education programs for children and adults alike.',
    image: 'https://images.pexels.com/photos/5212698/pexels-photo-5212698.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/6231990/pexels-photo-6231990.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    goals: [
      'Establish 25 community gardens in urban food deserts',
      'Train 500 community members in sustainable gardening',
      'Produce 10,000 pounds of fresh produce annually',
      'Conduct 60 environmental education workshops',
      'Reduce food insecurity by 30% in target areas'
    ],
    impact: [
      { label: 'Gardens Created', value: '18' },
      { label: 'Participants', value: '450+' },
      { label: 'Produce Harvested', value: '8,700 lbs' },
      { label: 'Workshops Held', value: '42' }
    ],
    status: 'ongoing'
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment Initiative',
    category: 'Social Development',
    location: 'Afghanistan',
    summary: 'Empowering women in Afghanistan through vocational training, microfinance opportunities, and advocacy for gender equality.',
    description: 'Our Women Empowerment Initiative focuses on creating pathways to economic independence and social equality for women in Afghanistan. Through vocational training programs, women develop marketable skills in areas such as textile production, technology, and entrepreneurship. Our microfinance program provides small business loans with favorable terms, allowing women to start or expand their enterprises. Additionally, we work with community leaders and policy makers to advocate for gender equality and create supportive environments where women can thrive both economically and socially.',
    image: 'https://images.pexels.com/photos/6192555/pexels-photo-6192555.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/6192581/pexels-photo-6192581.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6192655/pexels-photo-6192655.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6192632/pexels-photo-6192632.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    goals: [
      'Train 1,000 women in vocational skills annually',
      'Distribute 500 microloans to women entrepreneurs',
      'Achieve 85% business sustainability rate',
      'Conduct 30 gender equality workshops for community leaders',
      'Establish 10 women\'s support networks'
    ],
    impact: [
      { label: 'Women Trained', value: '875' },
      { label: 'Businesses Started', value: '320' },
      { label: 'Avg. Income Increase', value: '240%' },
      { label: 'Community Leaders Engaged', value: '145' }
    ],
    status: 'ongoing'
  },
  {
    id: 'healthcare-access',
    title: 'Healthcare Access Program',
    category: 'Health',
    location: 'Rural Guatemala',
    summary: 'Bringing essential healthcare services to remote communities in Guatemala through mobile clinics, telehealth solutions, and medical training.',
    description: 'The Healthcare Access Program addresses the critical shortage of medical services in rural Guatemala, where many communities are located hours or even days away from the nearest healthcare facility. Our multi-faceted approach includes deploying mobile medical clinics that travel to remote villages on a regular schedule, implementing telehealth solutions that connect patients with specialists remotely, and training local community health workers who can provide basic care and health education year-round. We focus particularly on maternal and child health, preventative care, and management of chronic conditions.',
    image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    goals: [
      'Operate 5 mobile clinics serving 100 remote communities',
      'Train 50 community health workers annually',
      'Establish telehealth connections in 25 villages',
      'Provide prenatal care to 2,000 women',
      'Vaccinate 10,000 children against preventable diseases'
    ],
    impact: [
      { label: 'Communities Served', value: '87' },
      { label: 'Patients Treated', value: '24,500+' },
      { label: 'Health Workers Trained', value: '38' },
      { label: 'Child Mortality Reduction', value: '45%' }
    ],
    status: 'ongoing'
  },
  {
    id: 'youth-leadership',
    title: 'Youth Leadership Academy',
    category: 'Education',
    location: 'South Africa',
    summary: 'Developing the next generation of community leaders in South Africa through leadership training, mentorship, and community service projects.',
    description: 'The Youth Leadership Academy invests in the future by identifying and nurturing promising young people from disadvantaged communities in South Africa. Participants engage in a comprehensive program that develops leadership skills, critical thinking, public speaking, and project management. Each cohort undertakes community service projects they design and implement themselves, applying their learning to address real challenges in their communities. Our mentorship component pairs participants with successful professionals who provide guidance and serve as role models. Graduates of the program form an alumni network that continues to support their development and community engagement.',
    image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    goals: [
      'Train 100 youth leaders annually',
      'Implement 25 youth-led community projects',
      'Establish 50 professional mentorship relationships',
      'Achieve 90% program completion rate',
      'Connect graduates with higher education and employment opportunities'
    ],
    impact: [
      { label: 'Youth Trained', value: '87' },
      { label: 'Projects Completed', value: '21' },
      { label: 'Community Beneficiaries', value: '15,000+' },
      { label: 'Continued Education Rate', value: '78%' }
    ],
    status: 'ongoing'
  }
];