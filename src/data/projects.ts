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
  status: "ongoing" | "completed";
}

export const projects: Project[] = [
  {
    id: "csr-ngo-impact-alliance",
    title: "CSR-NGO Impact Alliance",
    category: "Education",
    location: "India",
    summary:
      "One-year mentorship program connecting grassroots NGOs with CSR leaders to build funding readiness and impact.",
    description:
      "The CSR-NGO Impact Alliance by Noble Citizen Foundation is a six months mentorship program designed to strengthen grassroots NGOs by connecting them with experienced CSR professionals. The initiative focuses on building organizational capacity in areas such as documentation, compliance, fundraising, and impact reporting. Through structured sessions and one-on-one mentorship from CSR leaders of the top companies, NGOs gain the tools and confidence needed to become fund-ready and sustainable. The program fosters collaboration, innovation, and trust between the social and corporate sectors, ultimately empowering NGOs to scale their impact and build long-term partnerships for meaningful community development.",
    image: "/projects/Impact Alliance/1.jpg",
    gallery: ["/projects/Impact Alliance/2.jpg",],
    goals: [
      "Build NGO Capacity",
      "Strengthen CSR Collaborations",
      "Promote Transparency and Compliance",
      "Foster Long-Term Sustainability",
    ],
    impact: [
      { label: "NGOs Onboarded", value: "32" },
      { label: "CSR Mentors Engaged", value: "5+" },
      { label: "Sessions Conducted", value: "20+" },
      { label: "Indirect Beneficiaries", value: "500000+" },
    ],
    status: "ongoing",
  },
  // === EDUCATION ===

  {
    id: "anganwadi-play-lab",
    title: "Anganwadi Play Lab",
    category: "Education",
    location: "India",
    summary:
      "Creating joyful learning spaces in Anganwadis through innovative play-based infrastructure and community engagement.",
    description:
      "The Anganwadi Play Lab initiative by Noble Citizen Foundation transforms traditional Anganwadi centers into vibrant, child-friendly learning environments. Through colorful murals, engaging toys, and improved infrastructure, the project fosters early childhood development in a joyful, play-based setting. It enhances cognitive, emotional, and social growth while encouraging active parental involvement. In collaboration with local stakeholders, the initiative creates safe, stimulating spaces that promote foundational learning and well-being. By reimagining early education, the Play Lab aims to bridge developmental gaps and prepare children for formal schooling, laying the groundwork for a brighter, more equitable future.",
    image: "/projects/AnganWadi/IMG_5398.JPEG",
    gallery: ["/projects/AnganWadi/IMG_5399.JPEG",
      "/projects/AnganWadi/IMG_5400.JPEG",
      "/projects/AnganWadi/IMG_5399.JPEG",
      "/projects/AnganWadi/WhatsApp Image 2025-08-13 at 8.02.15 PM.jpeg"
    ],
    goals: [
      "Enhance Early Childhood Education",
      "Foster Learning Through Play",
      "Improve Anganwadi Infrastructure",
      "Promote Community Participation",
    ],
    impact: [
      { label: "Anganwadis Enhanced", value: "1+" },
      { label: "Children Benefited", value: "35+" },
      { label: "Teachers Trained", value: "6" },
      { label: "Indirect Beneficiaries", value: "2000+" },
    ],
    status: "ongoing",
  },

  //park restoration
  {
    id: "park-restoration-smriti-vatika",
    title: "Park Restoration (Smriti Vatika)",
    category: "Environment",
    location: "India",
    summary:
      "Reviving neglected land into green public spaces to foster environmental awareness and community recreation.",
    description:
      "Smriti Vatika is a park rejuvenation project transforming a former garbage dumping ground into a lush, accessible green space. The project, in partnership with SUEZ India and MCG, promotes environmental stewardship, community health, and sustainable urban development.",
      image: "/projects/Park Restoration/1.png",
      gallery: [
      "/projects/Park Restoration/4.png",      
      "/projects/Park Restoration/2.png",
      "/projects/Park Restoration/3.png",
      "/projects/Park Restoration/5.png",
    ],
    goals: [
      "Reclaim Urban Wastelands",
      "Promote Environmental Sustainability",
      "Foster Community Engagement",
      "Improve Public Health",
    ],
    impact: [
      { label: "Parks Restored", value: "1" },
      { label: "Area Transformed", value: "3 acres" },
      { label: "Population Impacted", value: "15,000+" },
      { label: "Volunteers Engaged", value: "300+" },
    ],
    status: "ongoing",
  },
  // === CYBER AWARENESS ===
  {
    id: "cyber-awareness-vivo",
    title: "Cyber Awareness (Vivo)",
    category: "Cyber Awareness",
    location: "Gurugram, India",
    summary:
      "Spreading cyber security awareness among students and communities under Vivo CSR through training and workshops.",
    description:
      "As part of the “Give Back to Gurugram” initiative, Noble Citizen Foundation’s Cyber Awareness Program promotes digital safety and responsible online behavior, especially among youth. In collaboration with Gurugram Cyber Police, the program conducts interactive sessions, workshops, and campaigns to educate students, parents, and communities about cyber threats, privacy, and preventive practices. By simplifying complex cyber issues and encouraging safe digital habits, the initiative strengthens cyber hygiene and reduces vulnerability to online crimes. It also fosters a culture of digital responsibility, ensuring long-term behavioral change and community-wide awareness in an increasingly connected world.",
    image: "/projects/Cyber Awareness Vivo/8.JPG",
    gallery: ["/projects/Cyber Awareness Vivo/2.JPG",
      "/projects/Cyber Awareness Vivo/3.JPG",
      "/projects/Cyber Awareness Vivo/4.JPG",
      "/projects/Cyber Awareness Vivo/5.JPG",
      "/projects/Cyber Awareness Vivo/6.JPG",
      "/projects/Cyber Awareness Vivo/7.JPG",
    ],
    goals: [
      "Promote Cyber Hygiene",
      "Educate Youth and Citizens",
      "Reduce Cybercrime Risks",
      "Encourage Responsible Digital Use",
    ],
    impact: [
      { label: "Total Beneficiaries", value: "300000+" },
      { label: "Workshops Conducted", value: "10+" },
      { label: "Collaborations", value: "5+" },
      { label: "Educational Material Distributed", value: "2,000+" },
    ],
    status: "completed",
  },

  {
    id: "future-leaders-for-sustainability",
    title: "Future Leaders for Sustainability",
    category: "Education",
    location: "India",
    summary:
      "Empowering youth to lead climate action through education, innovation, and hands-on sustainability initiatives in communities.",
    description:
      "Future Leaders for Sustainability is a transformative youth leadership program by Noble Citizen Foundation aimed at empowering students to address environmental challenges through education, innovation, and action. Over 12 weeks, participants engage in expert-led workshops and hands-on initiatives that build leadership skills and environmental awareness. Guided by mentors, students identify local problems, develop sustainable solutions, and implement impactful community projects. The program fosters global perspectives, critical thinking, and a deep sense of responsibility. Active participants and institutions gain recognition, with opportunities to represent on national and international platforms, creating a network of young climate leaders driving real change.",
    image: "/projects/Future Leaders/1.webp ",
    gallery: [
      "/projects/Future Leaders/3.webp",
      "/projects/Future Leaders/4.webp",
      "/projects/Future Leaders/5.JPG",],
    goals: [
      "Cultivate Environmental Awareness",
      "Develop Leadership Skills",
      "Promote Innovative Solutions",
      "Build a Collaborative Network",
      "Empower Participants through experiential learning",
    ],
    impact: [
      { label: "Youth Trained", value: "200+" },
      { label: "Colleges Reached", value: "5" },
      { label: "Workshops Organized", value: "8" },
      { label: "Indirect Beneficiaries", value: "100000+" },
    ],
    status: "ongoing",
  },


  {
    id: "digital-learning",
    title: "Digital Learning",
    category: "Education",
    location: "India",
    summary:
      "Providing free e-learning access to underprivileged students to bridge the digital divide in education.",
    description:
      "Noble Citizen Foundation’s Digital Learning program bridges the education gap by providing free three-year subscriptions to leading e-learning platforms for students in grades 6–10. Targeting underprivileged children affected by the pandemic, the initiative ensures continued access to quality education and fosters digital literacy. By removing financial barriers, it empowers students to learn at their own pace, supports academic growth, and promotes inclusive learning. Focused on long-term impact, the program contributes to SDG 1 (No Poverty) and SDG 4 (Quality Education), enabling marginalized communities to build brighter, more informed futures through technology-driven education.",
    image: "/projects/Digital Learning/2.JPG",
    gallery: [
      "/projects/Digital Learning/1.JPG",
      "/projects/Digital Learning/3.JPG",
      "/projects/Digital Learning/4.JPG",
      "/projects/Digital Learning/5.JPG",
    ],
    goals: [
      "Bridge the Digital Learning Gap",
      "Improve Access to Quality Education",
      "Support SDG 1 & 4",
      "Empower Marginalized Children",
    ],
    impact: [
      { label: "Students Enrolled", value: "1,100" },
      { label: "States Covered", value: "4" },
      { label: "Learning Licenses Distributed", value: "1,100" },
      { label: "Indirect Beneficiaries", value: "5000+" },
    ],
    status: "completed",
  },
  // === HEALTH ===
  {
    id: "health-camps-bihar",
    title: "Health Camps (Bihar)",
    category: "Health",
    location: "Bihar, India",
    summary:
      "Delivering accessible healthcare to underserved rural communities through mobile and on-ground health camps.",
    description:
      "Noble Citizen Foundation’s Health Camps in Bihar provide free medical consultations, essential medicines, and health awareness sessions to underserved rural communities. In collaboration with local doctors and community leaders, the initiative ensures timely and accessible healthcare for those lacking basic services. The camps focus on preventive care, hygiene education, and early diagnosis, addressing common illnesses and promoting overall well-being. By reaching remote areas with limited medical infrastructure, the program not only improves health outcomes but also empowers communities with knowledge and resources to lead healthier lives, fostering a culture of proactive healthcare and community resilience.",
    image: "/projects/Health Camps/2.JPG",
    gallery: [
      "/projects/Health Camps/1.JPG",
      "/projects/Health Camps/3.JPG",
      "/projects/Health Camps/4.JPG",
    ],
    goals: [
      "Provide Primary Healthcare Access",
      "Promote Preventive Health Education",
      "Serve Marginalized Communities",
      "Encourage Medical Volunteering",
    ],
    impact: [
      { label: "States Covered", value: "1 (Bihar)" },
      { label: "Patients Served", value: "1,000+" },
      { label: "Health Camps Conducted", value: "5+" },
      { label: "Total Beneficiaries", value: "5000+" },
    ],
    status: "ongoing",
  },

  // === ENVIRONMENT ===
  // (already added above — not repeated)

  // === LIVELIHOOD ===
  {
    id: "livelihood-electric-vehicles",
    title: "Livelihood Generation through Electric Vehicles",
    category: "Livelihood",
    location: "Madhya Pradesh, India",
    summary:
      "Empowering rural individuals in Madhya Pradesh through EV-based sustainable self-employment opportunities.",
    description:
      "The Livelihood Generation through Electric Vehicles project by Noble Citizen Foundation, supported by Betul Wind Farms Pvt. Ltd., empowers underprivileged individuals in Madhya Pradesh by providing 10 electric vehicles for commercial use. Implemented through a lease-to-own model, the initiative enables beneficiaries to earn a sustainable livelihood while promoting eco-friendly transportation. Comprehensive training in driving, EV maintenance, financial literacy, and customer service ensures effective and responsible use of the vehicles. This green mobility initiative not only fosters economic independence but also contributes to environmental sustainability and rural development through cleaner, more accessible transport solutions.",
    image: "/projects/livehood/1.jpg",
    gallery: [],
    goals: [
      "Create Sustainable Livelihoods through Self-Employment",
      "Promote Green Mobility and Reduce Emissions",
      "Enhance Financial Literacy and Skills",
      "Support Socio-Economic Development in Rural Areas",
    ],
    impact: [
      { label: "EVs Distributed", value: "10" },
      { label: "Beneficiaries Supported", value: "10" },
      { label: "Total Beneficiaries", value: "5000+" },
      { label: "Projected CO₂ Reduction", value: "20+ tons annually" },
    ],
    status: "ongoing",
  },

  {
    id: "cyber-awareness-paytm",
    title: "Cyber Awareness (Paytm)",
    category: "Cyber Awareness",
    location: "Gurugram, India",
    summary:
      "Engaging students in a Cyber Hackathon to raise awareness and foster interest in cyber security.",
    description:
      "Supported by Paytm CSR, the Cyber Hackathon by Noble Citizen Foundation is an innovative initiative aimed at raising cyber awareness and nurturing tech talent among school students. Organized in collaboration with Gurugram Cyber Police, the event combines expert-led training sessions, workshops, and a multi-category competition to educate participants on cyber safety, ethical hacking, and digital responsibility. By engaging over 50 schools, the hackathon fosters interest in cybersecurity careers while promoting safe online practices. The initiative not only builds critical digital skills but also empowers youth to become informed and responsible digital citizens in an increasingly tech-driven world.",
    image: "/projects/Cyber Awareness Paytm/3.jpg",
    gallery: ["/projects/Cyber Awareness Paytm/2.jpg",
      "/projects/Cyber Awareness Paytm/4.jpg",
      "/projects/Cyber Awareness Paytm/5.jpg",
      "/projects/Cyber Awareness Paytm/6.jpg",
    ],
    goals: [
      "Encourage Cyber Skills in Youth",
      "Promote Digital Safety Awareness",
      "Build Competitive Learning Spaces",
      "Foster Tech-Career Aspirations",
    ],
    impact: [
      { label: "Total Beneficiaries", value: "100000" },
      { label: "Students Engaged", value: "10,000+" },
      { label: "Hackathon Categories", value: "5" },
      { label: "Officials Involved", value: "10+" },
    ],
    status: "completed",
  },

  // === GLOBAL VOLUNTEERISM ===
  {
    id: "global-volunteerism",
    title: "Global Volunteerism",
    category: "Global Volunteerism",
    location: "Worldwide",
    summary:
      "Engaging global citizens in meaningful volunteering to drive social change and cross-cultural collaboration.",
    description:
      "Noble Citizen Foundation’s Global Volunteerism initiative engages individuals from around the world in meaningful service across key areas like education, health, environment, and disaster relief. By offering both on-ground and virtual volunteering opportunities, the program fosters cross-cultural collaboration and global citizenship. Volunteers contribute their skills to real-world challenges, participating in structured programs and campaigns that promote empathy, shared responsibility, and sustainable impact. Through partnerships with international organizations, the initiative builds a diverse network of changemakers committed to social good, encouraging personal growth while advancing community development on a global scale.",
    image: "/projects/global volunteerrism/1.jpg",
    gallery: ["/projects/global volunteerrism/2.jpg",
      "/projects/global volunteerrism/3.jpg",
      "/projects/global volunteerrism/4.jpg",
    ],
    goals: [
      "Promote Civic Engagement Across Borders",
      "Foster Cross-Cultural Exchange and Solidarity",
      "Build a Network of Socially Responsible Volunteers",
      "Support Community-Led Development through Volunteer Efforts",
    ],
    impact: [
      { label: "Countries Engaged", value: "7+" },
      { label: "Volunteers Mobilized", value: "1,000+" },
      { label: "Partner Organizations", value: "50+" },
      { label: "Events & Campaigns Conducted", value: "20+" },
    ],
    status: "ongoing",
  },

  // === DISASTER RELIEF ===
  {
    id: "covid-relief-wave-1",
    title: "COVID-19 First Wave Relief",
    category: "Disaster Relief",
    location: "Delhi-NCR, India",
    summary:
      "Providing emergency relief during COVID-19 Wave I through food, essentials, and healthcare outreach.",
    description:
      "During the first wave of COVID-19, Noble Citizen Foundation launched an emergency relief initiative to support vulnerable communities across Delhi-NCR. The program focused on large-scale food distribution, hygiene awareness, and the provision of essential sanitation kits. Through coordinated efforts with volunteers and local partners, over 65,000 individuals received immediate aid. The initiative addressed food insecurity, promoted preventive health practices, and offered emotional reassurance during a time of crisis. By responding swiftly and compassionately, the Foundation played a crucial role in mitigating the pandemic's impact on marginalized populations and fostering resilience in affected communities.",
    image: "/projects/cov/cov-2.jpeg",
    gallery: ["/projects/cov/cov-3.jpeg",
      "/projects/cov/cov-4.jpeg",
      "/projects/cov/cov-5.jpeg",
    ],
    goals: [
      "Address Food Insecurity",
      "Provide Emergency Relief",
      "Promote Hygiene Practices",
      "Support Affected Families",
    ],
    impact: [
      { label: "Food Packets Distributed", value: "65,000" },
      { label: "Beneficiaries Reached", value: "100,000+" },
      { label: "Distribution Drives", value: "20+" },
      { label: "Volunteers Engaged", value: "200+" },
    ],
    status: "completed",
  },
  {
    id: "covid-relief-wave-2",
    title: "COVID-19 Second Wave – Mission Oxygen",
    category: "Disaster Relief",
    location: "Pan India",
    summary:
      "Mobilizing oxygen and medical support across 14 states during India’s devastating second COVID-19 wave.",
    description:
      "Mission Oxygen, launched during the second wave of COVID-19, was Noble Citizen Foundation’s urgent response to the national health crisis. The initiative swiftly delivered oxygen cylinders, concentrators, and essential medical supplies to critically ill patients across 14 states and 25 cities in India. With a dedicated team of volunteers and partners, support reached over 400 patients, often within an average response time of just 2.2 days. Mission Oxygen exemplified compassion-driven efficiency, saving lives and alleviating pressure on overwhelmed healthcare systems. The initiative reinforced the Foundation’s commitment to timely, life-saving intervention during public health emergencies.",
    image: "/projects/cov/cov-8.jpeg",
    gallery: ["/projects/cov/cov-9.jpeg",
      "/projects/cov/cov-11.jpeg",
      "/projects/cov/cov-14.jpeg",

    ],
    goals: [
      "Save Lives During Medical Emergencies",
      "Improve Response Efficiency",
      "Support Remote and Urban Areas",
      "Mobilize Volunteer Networks",
    ],
    impact: [
      { label: "States Covered", value: "14" },
      { label: "Patients Supported", value: "400" },
      { label: "Total Beneficiaries", value: "70,000+" },
      { label: "Avg. Response Time", value: "2.2 Days" },
    ],
    status: "completed",
  },
  {
    id: "delhi-flood-relief",
    title: "Delhi Flood Relief",
    category: "Disaster Relief",
    location: "Delhi, India",
    summary:
      "Rapid response initiative providing essentials and rehabilitation to flood-affected communities in Delhi.",
    description:
      "During the 2023 Delhi floods, Noble Citizen Foundation launched a swift and coordinated relief response to support affected families. Emergency supplies—including food packets, hygiene kits, drinking water, and clothes—were distributed to over 500 households in flood-hit areas. The initiative prioritized timely intervention, reducing response time by 30%, and ensured the dignity and safety of displaced communities. Through collaboration with local authorities and volunteers, the Foundation not only addressed immediate needs but also laid the groundwork for long-term rehabilitation. The effort highlighted the importance of community resilience, preparedness, and compassionate action during natural disasters.",
    image: "/projects/Delhi Flood Relief/3.JPG",
    gallery: ["/projects/Delhi Flood Relief/2.JPG",
      "/projects/Delhi Flood Relief/1.JPG",
      "/projects/Delhi Flood Relief/4.JPG",
      "/projects/Delhi Flood Relief/5.JPG",
    ],
    goals: [
      "Offer Timely Disaster Relief",
      "Rehabilitate Affected Families",
      "Reduce Emergency Response Gaps",
      "Foster Community Resilience",
    ],
    impact: [
      { label: "Families Reached", value: "500+" },
      { label: "Relief Kits Distributed", value: "1,000+" },
      { label: "Total Beneficiaries", value: "25,000+" },
      { label: "Response Time Reduction", value: "30%" },
    ],
    status: "completed",
  },

  // ---------------------------- ENVIRONMENT ----------------------------
  {
    id: "park-restoration-smriti-vatika",
    title: "Park Restoration (Smriti Vatika)",
    category: "Environment",
    location: "India",
    summary:
      "Reviving neglected land into green public spaces to foster environmental awareness and community recreation.",
    description:
      "Smriti Vatika is a park rejuvenation project transforming a former garbage dumping ground into a lush, accessible green space. The project, in partnership with SUEZ India and MCG, promotes environmental stewardship, community health, and sustainable urban development.",
    image: "/projects/Park Restoration/4.png",
    gallery: [
      "/projects/Park Restoration/2.png",
      "/projects/Park Restoration/3.png",
      "/projects/Park Restoration/1.png",
      "/projects/Park Restoration/5.png",
    ],
    goals: [
      "Reclaim Urban Wastelands",
      "Promote Environmental Sustainability",
      "Foster Community Engagement",
      "Improve Public Health",
    ],
    impact: [
      { label: "Parks Restored", value: "1" },
      { label: "Area Transformed", value: "3 acres" },
      { label: "Population Impacted", value: "15,000+" },
      { label: "Volunteers Engaged", value: "300+" },
    ],
    status: "ongoing",
  },

  {
    id: "cleanliness-drive",
    title: "Cleanliness Drive",
    category: "Environment",
    location: "India",
    summary:
      "Mobilizing communities to keep public spaces clean and instill civic responsibility through cleanliness campaigns.",
    description:
      "Noble Citizen Foundation’s Cleanliness Drive initiative mobilizes communities to maintain hygiene and foster cleaner public spaces. Through organized drives, volunteers—especially youth—actively participate in cleaning streets, parks, and public areas, promoting environmental consciousness and civic responsibility. The initiative enhances public health, improves the local environment, and encourages long-term behavioral change. By involving schools, Colleges, local residents, and partner organizations, the project builds collective ownership and pride in maintaining cleanliness. It not only beautifies neighborhoods but also instills a strong sense of social responsibility, making cleanliness a shared community goal rather than an individual effort.",
    image: "/projects/cleanliness/1.jpeg",
    gallery: ["/projects/cleanliness/2.jpeg",
      "/projects/cleanliness/3.jpeg",
      "/projects/cleanliness/4.jpeg",
      "/projects/cleanliness/5.jpeg",
      "/projects/cleanliness/6.jpeg",
    ],
    goals: [
      "Promote Sanitation and Hygiene",
      "Raise Civic Awareness",
      "Encourage Volunteerism",
      "Improve Urban Livability",
    ],
    impact: [
      { label: "Garbage Collected", value: "1,800+ KG" },
      { label: "Cleanliness Drives", value: "15+" },
      { label: "Volunteers Involved", value: "300+" },
      { label: "Individuals Impacted", value: "100000+" },
    ],
    status: "ongoing",
  },
];
