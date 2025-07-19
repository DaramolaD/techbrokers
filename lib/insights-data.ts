export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  type: "article" | "case-study";
  tags: string[];
  content: string;
}

export const insightsData: Insight[] = [
  {
    id: "future-digital-banking-africa-2024",
    title: "The Future of Digital Banking in Africa: 2024 Trends",
    excerpt: "Comprehensive analysis of emerging digital banking trends, regulatory changes, and technological innovations shaping Africa's financial landscape.",
    author: "Wasiu Popoola",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Digital Banking",
    image: "/images/futureofdigitalbanking.jpg",
    type: "article",
    tags: ["Digital Banking", "Fintech", "Africa", "2024 Trends"],
    content: `
      <h2>The Evolution of Digital Banking in Africa</h2>
      <p>Africa's digital banking landscape is undergoing a remarkable transformation, driven by rapid technological adoption, regulatory changes, and shifting consumer expectations. As we move through 2024, several key trends are shaping the future of financial services across the continent.</p>
      
      <h3>1. Regulatory Innovation and Open Banking</h3>
      <p>African regulators are increasingly embracing innovation while maintaining financial stability. Countries like Nigeria, Kenya, and South Africa are implementing open banking frameworks that enable secure data sharing between financial institutions and third-party providers. This regulatory evolution is creating new opportunities for fintech startups and traditional banks alike.</p>
      
      <h3>2. AI and Machine Learning Integration</h3>
      <p>Artificial intelligence is revolutionizing how African banks operate, from customer service chatbots to sophisticated fraud detection systems. Machine learning algorithms are helping banks better understand customer behavior, optimize lending decisions, and provide personalized financial products.</p>
      
      <h3>3. Mobile-First Banking Solutions</h3>
      <p>With mobile penetration exceeding 80% in many African countries, banks are prioritizing mobile-first strategies. This includes developing lightweight banking apps that work on basic smartphones, implementing USSD banking for feature phones, and creating seamless mobile payment experiences.</p>
      
      <h3>4. Financial Inclusion Through Technology</h3>
      <p>Digital banking is playing a crucial role in expanding financial inclusion across Africa. By leveraging mobile technology, biometric identification, and alternative credit scoring, banks are reaching previously underserved populations in rural and urban areas.</p>
      
      <h3>5. Blockchain and Cryptocurrency Adoption</h3>
      <p>While still in early stages, blockchain technology is gaining traction in African banking, particularly for cross-border payments and remittances. Several African countries are exploring central bank digital currencies (CBDCs) to improve payment efficiency and reduce transaction costs.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>Despite the rapid progress, African digital banking faces several challenges, including infrastructure limitations, cybersecurity threats, and regulatory complexity. However, these challenges also present opportunities for innovative solutions and partnerships between traditional banks and fintech startups.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we look to the future, African digital banking will continue to evolve rapidly, driven by technological innovation, regulatory changes, and changing consumer expectations. Banks that embrace these trends and invest in digital transformation will be well-positioned to succeed in this dynamic landscape.</p>
    `
  },
  {
    id: "government-innovation-success-stories",
    title: "Government Innovation: Digital Transformation Success Stories",
    excerpt: "Real-world case studies of African governments successfully implementing digital transformation initiatives.",
    author: "Tech Brokers Team",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Government Innovation",
    image: "/images/governmentinnovation.jpg",
    type: "case-study",
    tags: ["Government", "Digital Services", "Case Studies"],
    content: `
      <h2>Digital Transformation in African Governments</h2>
      <p>African governments are increasingly leveraging technology to improve service delivery, enhance transparency, and drive economic growth. This article explores several successful digital transformation initiatives across the continent.</p>
      
      <h3>Case Study 1: Rwanda's Smart City Initiative</h3>
      <p>Rwanda has emerged as a leader in government digital transformation, with its Smart City initiative in Kigali. The government has implemented a comprehensive digital infrastructure that includes:</p>
      <ul>
        <li>Smart traffic management systems</li>
        <li>Digital citizen services portal</li>
        <li>E-government platforms for business registration</li>
        <li>Digital health records system</li>
      </ul>
      
      <h3>Case Study 2: Kenya's Huduma Centers</h3>
      <p>Kenya's Huduma Centers represent a successful model of integrated government service delivery. These one-stop shops provide citizens with access to multiple government services in a single location, supported by digital systems that streamline processes and reduce corruption.</p>
      
      <h3>Case Study 3: Nigeria's Digital Identity Program</h3>
      <p>Nigeria's National Identity Management Commission (NIMC) has made significant progress in implementing a comprehensive digital identity system. This initiative is enabling better service delivery and financial inclusion across the country.</p>
      
      <h2>Key Success Factors</h2>
      <p>Analysis of successful government digital transformation initiatives reveals several common factors:</p>
      <ul>
        <li>Strong political leadership and commitment</li>
        <li>Public-private partnerships</li>
        <li>Focus on citizen needs and user experience</li>
        <li>Investment in digital infrastructure</li>
        <li>Capacity building and training</li>
      </ul>
      
      <h2>Challenges and Lessons Learned</h2>
      <p>While these initiatives have achieved significant success, they also face challenges including:</p>
      <ul>
        <li>Digital literacy gaps</li>
        <li>Infrastructure limitations</li>
        <li>Cybersecurity concerns</li>
        <li>Resistance to change</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>As African governments continue their digital transformation journeys, we can expect to see more innovative solutions and successful implementations. The key will be learning from existing successes and adapting best practices to local contexts.</p>
    `
  },
  {
    id: "startup-acceleration-scalable-fintech",
    title: "Startup Acceleration: Building Scalable Fintech Solutions",
    excerpt: "Key strategies for fintech startups to scale effectively in the African market and beyond.",
    author: "Tech Brokers Team",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Startup Acceleration",
    image: "/images/startupacceleration.jpg",
    type: "article",
    tags: ["Startup", "Fintech", "Scaling", "Africa"],
    content: `
      <h2>Scaling Fintech Startups in Africa</h2>
      <p>Africa's fintech ecosystem is experiencing unprecedented growth, with startups raising billions in funding and expanding across borders. However, scaling a fintech startup in Africa presents unique challenges and opportunities.</p>
      
      <h3>Understanding the African Market</h3>
      <p>Success in African fintech requires deep understanding of local market dynamics, regulatory environments, and consumer behavior. Startups must adapt their products to meet the specific needs of African consumers while navigating complex regulatory landscapes.</p>
      
      <h3>Technology Infrastructure</h3>
      <p>Building robust, scalable technology infrastructure is crucial for fintech success. This includes cloud-based systems, mobile-first applications, and integration with existing financial infrastructure.</p>
      
      <h3>Partnerships and Collaborations</h3>
      <p>Strategic partnerships with banks, mobile money operators, and other financial institutions can accelerate growth and provide access to existing customer bases.</p>
    `
  },
  {
    id: "ai-fintech-africa-opportunities",
    title: "AI in Fintech: Opportunities and Challenges in Africa",
    excerpt: "Exploring how artificial intelligence is transforming financial services across the African continent.",
    author: "Sarah Johnson",
    date: "March 1, 2024",
    readTime: "10 min read",
    category: "Technology Trends",
    image: "/images/aifintech.jpg",
    type: "article",
    tags: ["AI", "Fintech", "Technology", "Africa"],
    content: `
      <h2>AI Revolution in African Fintech</h2>
      <p>Artificial intelligence is transforming financial services across Africa, from credit scoring to fraud detection. This article explores the opportunities and challenges of AI adoption in African fintech.</p>
      
      <h3>AI Applications in African Fintech</h3>
      <p>AI is being used across various aspects of financial services, including customer service, risk assessment, and product development. These applications are helping fintech companies provide better services while reducing costs.</p>
      
      <h3>Challenges and Considerations</h3>
      <p>While AI offers significant opportunities, its implementation in Africa faces challenges including data quality, infrastructure limitations, and regulatory concerns.</p>
    `
  },
  {
    id: "blockchain-africa-financial-inclusion",
    title: "Blockchain for Financial Inclusion in Africa",
    excerpt: "How blockchain technology is enabling financial inclusion and economic empowerment across Africa.",
    author: "David Okechukwu",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Technology Trends",
    image: "/images/blockchain.jpg",
    type: "article",
    tags: ["Blockchain", "Financial Inclusion", "Technology"],
    content: `
      <h2>Blockchain's Role in Financial Inclusion</h2>
      <p>Blockchain technology is playing a crucial role in expanding financial inclusion across Africa, providing secure, transparent, and cost-effective financial services to underserved populations.</p>
      
      <h3>Use Cases in Africa</h3>
      <p>From cross-border payments to digital identity, blockchain is enabling innovative solutions that address Africa's unique financial challenges.</p>
    `
  },
  {
    id: "mobile-money-evolution-africa",
    title: "The Evolution of Mobile Money in Africa",
    excerpt: "From M-Pesa to modern digital wallets: the journey of mobile money innovation in Africa.",
    author: "Tech Brokers Team",
    date: "February 25, 2024",
    readTime: "9 min read",
    category: "Digital Banking",
    image: "/images/evolutionmobielmoney.jpg",
    type: "article",
    tags: ["Mobile Money", "Digital Banking", "Innovation"],
    content: `
      <h2>Mobile Money's African Journey</h2>
      <p>Mobile money has revolutionized financial services in Africa, starting with M-Pesa in Kenya and evolving into sophisticated digital wallet solutions across the continent.</p>
      
      <h3>Key Innovations</h3>
      <p>The evolution of mobile money has been driven by innovations in technology, regulation, and user experience design.</p>
    `
  },
  {
    id: "regulatory-compliance-fintech-africa",
    title: "Regulatory Compliance in African Fintech",
    excerpt: "Navigating the complex regulatory landscape for fintech companies operating in Africa.",
    author: "Wasiu Popoola",
    date: "February 20, 2024",
    readTime: "11 min read",
    category: "Security & Compliance",
    image: "/images/regulatorycompliance.jpg",
    type: "article",
    tags: ["Regulation", "Compliance", "Fintech"],
    content: `
      <h2>Navigating African Fintech Regulation</h2>
      <p>Regulatory compliance is a critical challenge for fintech companies operating in Africa, requiring careful navigation of complex and evolving regulatory frameworks.</p>
      
      <h3>Key Regulatory Areas</h3>
      <p>From data protection to anti-money laundering, fintech companies must comply with various regulatory requirements across different African jurisdictions.</p>
    `
  },
  {
    id: "smart-cities-africa-digital-transformation",
    title: "Smart Cities: Digital Transformation in African Urban Centers",
    excerpt: "How African cities are leveraging technology to improve infrastructure and citizen services.",
    author: "Tech Brokers Team",
    date: "February 18, 2024",
    readTime: "8 min read",
    category: "Government Innovation",
    image: "/images/smartcities.jpg",
    type: "article",
    tags: ["Smart Cities", "Government", "Technology"],
    content: `
      <h2>Smart Cities in Africa</h2>
      <p>African cities are embracing smart city technologies to improve infrastructure, enhance citizen services, and drive economic growth.</p>
      
      <h3>Technology Applications</h3>
      <p>From traffic management to waste collection, smart city technologies are transforming how African cities operate and serve their citizens.</p>
    `
  },
  {
    id: "investment-trends-african-fintech",
    title: "Investment Trends in African Fintech: 2024 Outlook",
    excerpt: "Analysis of venture capital flows and investment opportunities in Africa's fintech ecosystem.",
    author: "Sarah Johnson",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Startup Ecosystem",
    image: "/images/investortrend.jpg",
    type: "article",
    tags: ["Investment", "Venture Capital", "Fintech"],
    content: `
      <h2>Investment Landscape in African Fintech</h2>
      <p>African fintech is attracting significant investment, with venture capital firms and strategic investors recognizing the continent's potential for financial innovation.</p>
      
      <h3>Key Investment Trends</h3>
      <p>From early-stage funding to large-scale investments, the African fintech ecosystem is experiencing unprecedented growth in investment activity.</p>
    `
  },
  {
    id: "cybersecurity-fintech-africa",
    title: "Cybersecurity Challenges in African Fintech",
    excerpt: "Addressing security threats and building robust cybersecurity frameworks for fintech companies.",
    author: "David Okechukwu",
    date: "February 12, 2024",
    readTime: "9 min read",
    category: "Security & Compliance",
    image: "/images/cybersecurity.jpg",
    type: "article",
    tags: ["Cybersecurity", "Security", "Fintech"],
    content: `
      <h2>Cybersecurity in African Fintech</h2>
      <p>As fintech adoption grows in Africa, cybersecurity has become a critical concern for companies and regulators alike.</p>
      
      <h3>Security Challenges</h3>
      <p>African fintech companies face unique cybersecurity challenges, from infrastructure limitations to sophisticated cyber threats.</p>
    `
  },
  {
    id: "open-banking-africa-opportunities",
    title: "Open Banking: Opportunities and Implementation in Africa",
    excerpt: "How open banking is reshaping financial services and creating new opportunities in Africa.",
    author: "Tech Brokers Team",
    date: "February 10, 2024",
    readTime: "7 min read",
    category: "Digital Banking",
    image: "/images/openbanking.jpg",
    type: "article",
    tags: ["Open Banking", "Digital Banking", "Innovation"],
    content: `
      <h2>Open Banking in Africa</h2>
      <p>Open banking is transforming financial services in Africa, enabling secure data sharing and fostering innovation in the financial sector.</p>
      
      <h3>Implementation Challenges</h3>
      <p>While open banking offers significant opportunities, its implementation in Africa faces various challenges including regulatory complexity and infrastructure requirements.</p>
    `
  },
  {
    id: "digital-identity-africa-financial-inclusion",
    title: "Digital Identity Solutions for Financial Inclusion in Africa",
    excerpt: "Innovative approaches to digital identity that are enabling financial inclusion across the continent.",
    author: "Wasiu Popoola",
    date: "February 8, 2024",
    readTime: "10 min read",
    category: "Technology Trends",
    image: "/images/digitalidentity.jpg",
    type: "article",
    tags: ["Digital Identity", "Financial Inclusion", "Technology"],
    content: `
      <h2>Digital Identity in Africa</h2>
      <p>Digital identity solutions are playing a crucial role in expanding financial inclusion across Africa, providing secure and accessible identification systems.</p>
      
      <h3>Innovation in Identity</h3>
      <p>From biometric identification to blockchain-based identity systems, African countries are pioneering innovative approaches to digital identity.</p>
    `
  }
];

export const categories = [
  "All",
  "Digital Banking",
  "Technology Trends",
  "Startup Acceleration",
  "Government Innovation",
  "Security & Compliance",
  "Startup Ecosystem"
];

export function getRelatedInsights(currentId: string, limit: number = 3): Insight[] {
  const currentInsight = insightsData.find(insight => insight.id === currentId);
  if (!currentInsight) return insightsData.slice(0, limit);
  
  // Get insights with similar categories or tags
  const related = insightsData
    .filter(insight => insight.id !== currentId)
    .filter(insight => 
      insight.category === currentInsight.category ||
      insight.tags.some(tag => currentInsight.tags.includes(tag))
    )
    .slice(0, limit);
  
  // If not enough related, add random ones
  if (related.length < limit) {
    const remaining = insightsData
      .filter(insight => insight.id !== currentId && !related.find(r => r.id === insight.id))
      .slice(0, limit - related.length);
    return [...related, ...remaining];
  }
  
  return related;
} 