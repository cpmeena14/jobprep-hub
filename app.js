// JobPrep Hub - Self-Contained App & Data Engine

// ==========================================
// 1. DATASETS DEFINITIONS
// ==========================================

const JOBS_DATA = [
  {
    id: "job-1",
    title: "Frontend Engineer (React/TypeScript)",
    company: "Stripe",
    logoColor: "#635bff",
    location: "San Francisco, CA (Hybrid)",
    salary: "$145,000 - $185,000",
    type: "Full-time",
    experience: "Mid-Senior (3+ years)",
    tags: ["React", "TypeScript", "Tailwind", "CSS Grid"],
    description: "Join our core UI engineering team to build elegant, accessible dashboard experiences for millions of global merchants. You will design, develop, and maintain high-performance web applications that power digital commerce.",
    requirements: [
      "Extensive experience with modern JavaScript, TypeScript, and React.",
      "Expert knowledge of CSS layout engines (Flexbox, Grid) and responsive designs.",
      "Passion for building highly accessible (WCAG compliant) user interfaces.",
      "Strong communication skills and collaborative mindset."
    ]
  },
  {
    id: "job-2",
    title: "Software Engineer - Infrastructure",
    company: "Google",
    logoColor: "#ea4335",
    location: "Mountain View, CA (On-site)",
    salary: "$160,000 - $210,000",
    type: "Full-time",
    experience: "Entry-Mid (1-3 years)",
    tags: ["Go", "C++", "Kubernetes", "Distributed Systems"],
    description: "Work on Google's core search infrastructure. Design and build robust, high-performance services that process billions of user queries daily while optimizing latencies, hardware resource utilization, and reliability.",
    requirements: [
      "BS/MS degree in Computer Science or related fields.",
      "Strong algorithms and systems programming foundation (Go, C++, Java).",
      "Familiarity with containerization (Docker, Kubernetes) and microservices.",
      "Experience analyzing and optimizing high-throughput distributed architectures."
    ]
  },
  {
    id: "job-3",
    title: "Junior Backend Developer",
    company: "Canva",
    logoColor: "#00c4cc",
    location: "Sydney, Australia (Remote)",
    salary: "$95,000 - $120,000",
    type: "Remote",
    experience: "Entry-level (0-2 years)",
    tags: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    description: "Kickstart your career with our backend systems group! Help scale Canva's visual collaboration engine, design clean RESTful endpoints, and participate in database scaling challenges under the guidance of seasoned mentors.",
    requirements: [
      "Solid knowledge of JavaScript (ES6+) and Node.js environment.",
      "Understanding of relational databases (PostgreSQL, MySQL) and ORMs.",
      "Basic understanding of Git version control and modern code review practices.",
      "Willingness to learn and adapt in a fast-paced environment."
    ]
  },
  {
    id: "job-4",
    title: "Senior Fullstack Engineer",
    company: "Microsoft",
    logoColor: "#00a4ef",
    location: "Redmond, WA (Hybrid)",
    salary: "$175,000 - $225,000",
    type: "Full-time",
    experience: "Senior (5+ years)",
    tags: ["C#", ".NET Core", "React", "Azure"],
    description: "Lead the design of next-generation collaborative workflows inside Microsoft 365. You will work across the stack, crafting beautiful frontend components in React and reliable, distributed services in C# .NET.",
    requirements: [
      "5+ years of software development experience shipping web applications.",
      "Deep expertise in C# / .NET Core backend ecosystems.",
      "Proficient in modern frontend architectures (React, Redux/Zustand).",
      "Experience with Microsoft Azure or AWS cloud infrastructures."
    ]
  },
  {
    id: "job-5",
    title: "DevOps Engineer",
    company: "Netflix",
    logoColor: "#e50914",
    location: "Los Gatos, CA (Hybrid)",
    salary: "$190,000 - $250,000",
    type: "Full-time",
    experience: "Mid-Senior (4+ years)",
    tags: ["AWS", "Terraform", "Python", "CI/CD"],
    description: "Support our streaming delivery backbone. Automate deployment pipelines, design self-healing cloud architectures, and optimize continuous integration cycles for high reliability across global Netflix nodes.",
    requirements: [
      "Strong background in AWS Cloud services (EC2, S3, RDS, IAM).",
      "Expertise in Infrastructure as Code (IaC) utilizing Terraform.",
      "Proficient with shell scripting and Python for infrastructure automation.",
      "Solid understanding of Docker and container build orchestration."
    ]
  },
  {
    id: "job-6",
    title: "UI/UX Designer & Frontend Developer",
    company: "Figma",
    logoColor: "#f24e1e",
    location: "New York, NY (Hybrid)",
    salary: "$130,000 - $165,000",
    type: "Full-time",
    experience: "Mid (2+ years)",
    tags: ["Figma", "HTML5", "CSS3", "Interactions"],
    description: "Bridge the gap between design and engineering. Shape features from structural wireframes up to high-fidelity interactions, and translate them directly into production-ready semantic HTML and Vanilla CSS.",
    requirements: [
      "Strong design portfolio demonstrating clean typography, color theory, and UX flow.",
      "Expert knowledge of Figma components, auto-layout, and design systems.",
      "Excellent coding skills in HTML5, Vanilla CSS (variables, grids, animations).",
      "Familiarity with JS interaction triggers and state handling."
    ]
  },
  {
    id: "job-7",
    title: "AI/ML Engineer",
    company: "Meta",
    logoColor: "#0668e1",
    location: "Menlo Park, CA (On-site)",
    salary: "$180,000 - $240,000",
    type: "Full-time",
    experience: "PhD/MS + 2 years",
    tags: ["PyTorch", "Python", "LLMs", "Deep Learning"],
    description: "Train, tune, and deploy next-generation LLM interfaces and recommendation systems. You will optimize inference speed, fine-tune models on proprietary datasets, and implement robust evaluations.",
    requirements: [
      "Strong foundation in deep learning, neural networks, and transformer architectures.",
      "Fluent in PyTorch, Python, NumPy, and HuggingFace ecosystems.",
      "Experience optimizing models for high-scale real-time inference.",
      "Publications in NeurIPS, ICML, CVPR, or equivalent is a plus."
    ]
  },
  {
    id: "job-8",
    title: "Data Analyst",
    company: "Spotify",
    logoColor: "#1db954",
    location: "Boston, MA (Hybrid)",
    salary: "$105,000 - $135,000",
    type: "Full-time",
    experience: "Entry-Mid (1+ years)",
    tags: ["SQL", "Python", "Tableau", "Statistics"],
    description: "Uncover insights in listener behavior and music curation models. You will design, build, and maintain data dashboards, run experiments, and translate complex metrics into actionable product strategies.",
    requirements: [
      "Proficiency writing advanced SQL queries (Window functions, CTEs).",
      "Experience with data manipulation in Python (Pandas) or R.",
      "Expertise building reports and dashboards in Tableau or PowerBI.",
      "Understanding of A/B testing methodology and basic statistical tests."
    ]
  }
];

const PREP_DATA = {
  aptitude: {
    title: "Aptitude Preparation",
    subtitle: "Quantitative & Logical Reasoning",
    notes: [
      {
        topic: "Quantitative Aptitude: Key Formulas",
        content: `
### 1. Speed, Time, and Distance
* **Formula:** Speed = Distance / Time
* **Conversion:** 
  * To convert km/h to m/s, multiply by 5/18.
  * To convert m/s to km/h, multiply by 18/5.
* **Average Speed:** If an object covers equal distances at speeds A and B, the average speed is:
  Average Speed = 2AB / (A+B)

### 2. Work and Time
* If A can do a piece of work in n days, then A's 1-day work = 1/n.
* If A is k times as efficient as B, then:
  * Ratio of work done by A and B = k : 1
  * Ratio of times taken by A and B = 1 : k

### 3. Percentages & Profit/Loss
* **Profit** = Selling Price (SP) - Cost Price (CP)
* **Loss** = Cost Price (CP) - Selling Price (SP)
* **Profit Percentage:** Profit % = (Profit / CP) * 100
* **Loss Percentage:** Loss % = (Loss / CP) * 100
        `
      },
      {
        topic: "Logical Reasoning: Tips & Tricks",
        content: `
### 1. Blood Relations
* Use diagrammatic trees. Use **circles** for females, **squares** for males, **double lines** for marriage, and **vertical lines** for generation gaps.
* Always resolve from the end of the statement (e.g., "Pointing to a man, she said: 'His brother's father is the only son of my grandfather'").

### 2. Syllogisms
* Draw Venn Diagrams representing the relationships:
  * **All A are B:** Nest A completely inside B.
  * **Some A are B:** Intersect circle A and circle B.
  * **No A is B:** Draw disjoint circles for A and B.
* Check all possible combinations before arriving at a final conclusion.
        `
      }
    ],
    questions: [
      {
        id: "apt-q1",
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        options: ["120 meters", "150 meters", "324 meters", "180 meters"],
        answer: 1, // index of "150 meters"
        explanation: "Speed of train = 60 km/hr = 60 * (5/18) m/s = 50/3 m/s. Length of train = Speed * Time = (50/3) * 9 = 150 meters."
      },
      {
        id: "apt-q2",
        question: "A, B, and C can complete a piece of work in 20, 30, and 60 days respectively. In how many days can A complete the work if he is assisted by B and C on every third day?",
        options: ["12 days", "15 days", "16 days", "18 days"],
        answer: 1, // index of "15 days"
        explanation: "A's 2-day work = 2/20 = 1/10. Work on 3rd day = (A+B+C)'s 1-day work = 1/20 + 1/30 + 1/60 = 6/60 = 1/10. Total work done in 3 days = 1/10 + 1/10 = 1/5. Thus, 1/5 of the work is done in 3 days. Full work will be done in 3 * 5 = 15 days."
      },
      {
        id: "apt-q3",
        question: "Pointing to a photograph, Vipul said, 'She is the daughter of my grandfather's only son.' How is Vipul related to the girl in the photograph?",
        options: ["Father", "Brother", "Cousin", "Uncle"],
        answer: 1, // Brother
        explanation: "Vipul's grandfather's only son is Vipul's father. The daughter of Vipul's father is Vipul's sister. Therefore, Vipul is her brother."
      }
    ]
  },
  dsa: {
    title: "DSA Preparation",
    subtitle: "Data Structures & Algorithms Basics",
    notes: [
      {
        topic: "Big-O Time Complexities Cheatsheet",
        content: `
### 1. Basic Complexities
* **Constant Time:** O(1) - Array indexing, pushing to stack.
* **Logarithmic Time:** O(log n) - Binary Search, operations in Balanced BSTs.
* **Linear Time:** O(n) - Traversing arrays, searching in linked lists.
* **Log-linear Time:** O(n log n) - Merge Sort, Quick Sort (avg case), Heap Sort.
* **Quadratic Time:** O(n^2) - Bubble Sort, Insertion Sort, nested loops.
* **Exponential Time:** O(2^n) - Recursive Fibonacci, generating subsets.
* **Factorial Time:** O(n!) - TSP permutation solutions.

### 2. Common Space Complexities
* In-place algorithms: O(1) auxiliary space.
* Recursion stack: O(d) where d is depth of the recursion tree.
* Adjacency list: O(V + E) where V is vertices and E is edges.
        `
      },
      {
        topic: "Common Interview Patterns",
        content: `
### 1. Two Pointers
* **Concept:** Use two indexes tracking positions in an array to reduce time complexity from O(n^2) to O(n).
* **Example:** Finding two numbers in a sorted array that sum to a target.
* **Snippet:**
  \`\`\`javascript
  let left = 0, right = arr.length - 1;
  while(left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) return [left, right];
      else if (sum < target) left++;
      else right--;
  }
  \`\`\`

### 2. Sliding Window
* **Concept:** Keep track of a contiguous subsegment (window) of data to analyze subarray stats without recomputing.
* **Example:** Maximum sum subarray of size K.
        `
      }
    ],
    questions: [
      {
        id: "dsa-q1",
        question: "What is the worst-case time complexity of lookup, insert, and delete operations in a standard Binary Search Tree (BST)?",
        options: ["O(log N)", "O(N)", "O(1)", "O(N log N)"],
        answer: 1, // O(N)
        explanation: "In the worst case (a skewed/degenerate tree that behaves like a linked list), lookup, insert, and delete all degrade to O(N)."
      },
      {
        id: "dsa-q2",
        question: "Which data structure is internally used to implement depth-first search (DFS) traversal on a graph?",
        options: ["Queue", "Min-Heap", "Stack", "Trie"],
        answer: 2, // Stack
        explanation: "DFS relies on a Last-In-First-Out (LIFO) model. It uses the function call stack (recursively) or an explicit Stack data structure. BFS uses a Queue."
      },
      {
        id: "dsa-q3",
        question: "What is the best average-case time complexity of sorting an array using Quick Sort?",
        options: ["O(N)", "O(N^2)", "O(N log N)", "O(log N)"],
        answer: 2, // O(N log N)
        explanation: "Quick Sort splits arrays around a pivot. On average, splits are balanced, leading to an O(N log N) runtime. The worst-case is O(N^2) on fully sorted arrays."
      }
    ]
  },
  technical: {
    title: "Technical Concepts",
    subtitle: "OS, DBMS, Computer Networks & System Design",
    notes: [
      {
        topic: "DBMS: ACID Properties & Joins",
        content: `
### 1. ACID Properties
* **Atomicity:** "All or nothing". Either the complete transaction commits, or the system rolls back to the initial state.
* **Consistency:** The database transitions from one valid state to another, maintaining constraints and rules.
* **Isolation:** Transactions execute concurrently without interfering with each other's intermediate states.
* **Durability:** Once committed, the changes are permanent and survive system crashes.

### 2. SQL Joins
* **INNER JOIN:** Returns matching rows in both tables.
* **LEFT JOIN:** Returns all rows from the left table, and matching rows from the right. Unmatched right rows get NULLs.
* **FULL OUTER JOIN:** Returns all records when there is a match in either table.
        `
      },
      {
        topic: "System Design: Scaling & Load Balancing",
        content: `
### 1. Vertical vs. Horizontal Scaling
* **Vertical (Scale-up):** Adding resources (RAM, CPU) to a single machine. Limited by hardware caps and introduces single-point-of-failure.
* **Horizontal (Scale-out):** Adding more machines to the system pooling pool. Highly scalable, resilient, but increases architectural complexity.

### 2. Load Balancing (LB)
* Sits between client and servers to distribute incoming traffic.
* **Algorithms:** Round Robin, Weighted Round Robin, Least Connections, IP Hash.
        `
      }
    ],
    questions: [
      {
        id: "tech-q1",
        question: "Which of the following is responsible for resolving domain names (like google.com) into IP addresses?",
        options: ["HTTP", "DNS", "FTP", "DHCP"],
        answer: 1, // DNS
        explanation: "DNS (Domain Name System) acts as the phonebook of the Internet, translating human-readable names into machine-readable IP addresses."
      },
      {
        id: "tech-q2",
        question: "Which of the following index types in relational databases is optimized for range queries?",
        options: ["Hash Index", "B+ Tree Index", "Bitmap Index", "Inverted Index"],
        answer: 1, // B+ Tree
        explanation: "B+ Trees maintain order and have leaves linked sequentially, allowing very fast range scans."
      },
      {
        id: "tech-q3",
        question: "What does the 'I' in ACID stand for in database transaction concepts?",
        options: ["Inheritance", "Integration", "Isolation", "Immutability"],
        answer: 2, // Isolation
        explanation: "Isolation guarantees that concurrently running transactions do not interfere with each other, ensuring consistency."
      }
    ]
  },
  hr: {
    title: "HR & Behavioral Prep",
    subtitle: "Star Methodology & Culture Fit",
    notes: [
      {
        topic: "The STAR Method for Situational Questions",
        content: `
When answering questions like *"Tell me about a time you failed,"* structure your answer with:

1. **S - Situation:** Set the scene. Explain the context, project constraints, or system state. Keep it brief.
2. **T - Task:** Define the challenge or goal you had to achieve. What was the expectation?
3. **A - Action:** Describe *what you did* specifically. Emphasize your personal decisions, coding contributions, and leadership.
4. **R - Result:** Share the quantifiable outcomes. What did you learn? What was the business impact? (e.g., "We boosted performance by 30%").
        `
      },
      {
        topic: "Common HR Questions & Strategy",
        content: `
### 1. "Tell me about yourself"
* **Strategy:** Use the **Present-Past-Future** framework.
  * *Present:* Highlight your current role or studies, and major skills.
  * *Past:* Mention a key project or experience that validates your passion.
  * *Future:* Explain why you are excited about *this specific* job role and company.

### 2. "What are your weaknesses?"
* **Strategy:** Choose a real, minor technical or soft skill you have struggled with, but immediately detail *active steps* you are taking to overcome it (e.g., "I used to take on too much work, but now I use Kanban boards to manage priorities").
        `
      }
    ],
    questions: [
      {
        id: "hr-q1",
        question: "What is the best way to answer: 'Why should we hire you?'",
        options: [
          "Explain that you need a job and are willing to work long hours.",
          "Describe how your specific skills align with the role's needs and show how you can deliver value.",
          "Brag about all your accomplishments and assert that you are the absolute best candidate.",
          "Keep it vague and say that you are a fast learner."
        ],
        answer: 1,
        explanation: "Aligning your actual skills with their specific requirements and demonstrating actionable business value is the most convincing strategy."
      },
      {
        id: "hr-q2",
        question: "If a project requirement changes at the last minute, what is the most professional response?",
        options: [
          "Refuse to make changes and demand the original plan be kept.",
          "Complain to the team about poor planning.",
          "Assess the impact, collaborate with stakeholders to adjust timelines, and adapt to the new design.",
          "Resign immediately."
        ],
        answer: 2,
        explanation: "Adaptability, collaboration, and analyzing engineering/timeline impact is highly valued in modern software engineering teams."
      }
    ]
  }
};

const COMPANIES_DATA = [
  {
    id: "comp-google",
    name: "Google",
    difficulty: "Hard",
    eligibility: "GPA 7.5+ / No active backlogs. Open to CS, IT, and related branches.",
    pattern: [
      { round: "Round 1: Online Assessment (OA)", details: "2 complex coding questions (often Graph, DP, or Trees) in 60-90 minutes on a custom platform." },
      { round: "Round 2: Technical Interview 1", details: "Core DSA (focused on algorithmic efficiency, arrays, strings, two pointers) & space complexity analyses." },
      { round: "Round 3: Technical Interview 2", details: "Advanced structures (Segment Trees, Dynamic Programming, Graphs) & algorithmic design options." },
      { round: "Round 4: Googleyness & Leadership", details: "Behavioral round assessing culture fit, dealing with ambiguity, teamwork, and ethics." }
    ],
    syllabus: ["Graphs (Dijkstra, DFS, BFS)", "Dynamic Programming", "Hard Recursion", "System Design (for Senior roles)"]
  },
  {
    id: "comp-microsoft",
    name: "Microsoft",
    difficulty: "Medium-Hard",
    eligibility: "GPA 7.0+ / Bachelor's or Master's in engineering/related majors.",
    pattern: [
      { round: "Round 1: Online Coding Test", details: "3 codility tasks in 110 minutes, focusing on correct edge cases." },
      { round: "Round 2: Technical Interview 1", details: "Algorithms, Trees, Linked list manipulations, and low-level code accuracy." },
      { round: "Round 3: Technical Interview 2", details: "System Design, Object-Oriented Principles, and database schema design." },
      { round: "Round 4: AA (As Appropriate) Round", details: "Final review with a senior engineering manager focusing on projects, culture, and architecture." }
    ],
    syllabus: ["Linked Lists", "Trees & BT Traversals", "System Design & OOPs", "String Manipulations"]
  },
  {
    id: "comp-amazon",
    name: "Amazon",
    difficulty: "Hard",
    eligibility: "GPA 6.5+ / Strong analytical skills. Open to all engineering streams.",
    pattern: [
      { round: "Round 1: Online Assessment", details: "Debugging section, 2 coding tasks, and a work-style simulation questionnaire." },
      { round: "Round 2: Technical Round 1", details: "Algorithms, heavy emphasis on Space/Time tradeoff, and Amazon's Leadership Principles." },
      { round: "Round 3: Technical Round 2", details: "Data structures (Heaps, Tries, HashMaps) and low-level design." },
      { round: "Round 4: Bar Raiser Interview", details: "Extensive probing on leadership principles alongside core technical architectures." }
    ],
    syllabus: ["Heaps & Priority Queues", "Amazon Leadership Principles", "Trie Data Structure", "Greedy Algorithms"]
  },
  {
    id: "comp-stripe",
    name: "Stripe",
    difficulty: "Hard",
    eligibility: "Strong coding portfolio, open-source work is highly appreciated.",
    pattern: [
      { round: "Round 1: Codility Screening", details: "Practical programming tasks resembling real API interactions or JSON processing." },
      { round: "Round 2: Bug Bug Hunt / Practical Coding", details: "A live pairing session where you debug a real-looking codebase or extend a utility library." },
      { round: "Round 3: System Design / Integration", details: "Design a scalable API structure or payment processing state machine." },
      { round: "Round 4: Behavioral & Culture Fit", details: "Focuses on clean work habits, quality engineering, and cross-functional collaborations." }
    ],
    syllabus: ["API Integration & JSON Parsing", "Concurrency and Threading", "System Architecture & Scale", "Practical Debugging"]
  }
];

const DSA_SHEET = [
  {
    topic: "Arrays",
    problems: [
      { id: "arr-1", title: "Two Sum", difficulty: "Easy", link: "https://leetcode.com/problems/two-sum/" },
      { id: "arr-2", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { id: "arr-3", title: "Maximum Subarray (Kadane's)", difficulty: "Medium", link: "https://leetcode.com/problems/maximum-subarray/" },
      { id: "arr-4", title: "Merge Overlapping Intervals", difficulty: "Medium", link: "https://leetcode.com/problems/merge-intervals/" },
      { id: "arr-5", title: "Find the Duplicate Number", difficulty: "Medium", link: "https://leetcode.com/problems/find-the-duplicate-number/" }
    ]
  },
  {
    topic: "Strings",
    problems: [
      { id: "str-1", title: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
      { id: "str-2", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { id: "str-3", title: "Group Anagrams", difficulty: "Medium", link: "https://leetcode.com/problems/group-anagrams/" },
      { id: "str-4", title: "Longest Palindromic Substring", difficulty: "Medium", link: "https://leetcode.com/problems/longest-palindromic-substring/" }
    ]
  },
  {
    topic: "Linked Lists",
    problems: [
      { id: "ll-1", title: "Reverse a Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-linked-list/" },
      { id: "ll-2", title: "Detect Cycle in a Linked List", difficulty: "Easy", link: "https://leetcode.com/problems/linked-list-cycle/" },
      { id: "ll-3", title: "Merge Two Sorted Lists", difficulty: "Easy", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { id: "ll-4", title: "Remove Nth Node From End of List", difficulty: "Medium", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" }
    ]
  },
  {
    topic: "Trees",
    problems: [
      { id: "tree-1", title: "Invert Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/invert-binary-tree/" },
      { id: "tree-2", title: "Maximum Depth of Binary Tree", difficulty: "Easy", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { id: "tree-3", title: "Binary Tree Level Order Traversal", difficulty: "Medium", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { id: "tree-4", title: "Lowest Common Ancestor of a BST", difficulty: "Medium", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" }
    ]
  },
  {
    topic: "Dynamic Programming",
    problems: [
      { id: "dp-1", title: "Climbing Stairs", difficulty: "Easy", link: "https://leetcode.com/problems/climbing-stairs/" },
      { id: "dp-2", title: "Coin Change", difficulty: "Medium", link: "https://leetcode.com/problems/coin-change/" },
      { id: "dp-3", title: "Longest Increasing Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { id: "dp-4", title: "0/1 Knapsack Problem", difficulty: "Medium", link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" }
    ]
  }
];

// ==========================================
// 2. CORE SPA MECHANICS
// ==========================================

function initApp() {
  try {
    // Helper safe LocalStorage parsing to prevent corrupt state crashing boot
  function safeParseArray(key) {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  // Helper safe object parsing
  function safeParseObject(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || null;
    } catch(e) {
      return null;
    }
  }

  // --- APPLICATION STATE ---
  let state = {
    theme: localStorage.getItem("theme") || "dark",
    currentSection: "jobs",
    appliedJobs: safeParseArray("appliedJobs"),
    completedDSA: safeParseArray("completedDSA"),
    quizAnswers: {}, // key: questionId, value: selectedIndex
    selectedPrepCategory: "aptitude",
    selectedJob: null,
    currentUser: safeParseObject("currentUser")
  };

  // --- SELECTORS ---
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll(".content-section");
  const themeToggleBtn = document.getElementById("theme-toggle");

  // Auth selectors
  const headerAuthBox = document.getElementById("header-auth-box");
  const headerProfileBox = document.getElementById("header-profile-box");
  const btnAuthTrigger = document.getElementById("btn-auth-trigger");
  const headerAuthDropdown = document.getElementById("header-auth-dropdown");
  const tabSigninBtn = document.getElementById("dropdown-tab-signin-btn");
  const tabSignupBtn = document.getElementById("dropdown-tab-signup-btn");
  const signinForm = document.getElementById("dropdown-signin-form");
  const signupForm = document.getElementById("dropdown-signup-form");
  const btnGuestExplore = document.getElementById("dropdown-btn-guest-explore");
  const btnLogout = document.getElementById("btn-logout");
  const userAvatar = document.getElementById("user-avatar");
  const userDisplayName = document.getElementById("user-display-name");
  const userDisplayRole = document.getElementById("user-display-role");
  const btnLockUnlockTrigger = document.getElementById("btn-lock-unlock-trigger");

  // --- INITIALIZE THEME ---
  document.documentElement.setAttribute("data-theme", state.theme);
  updateThemeIcon();
  
  // Job selectors
  const jobsListContainer = document.getElementById("jobs-list");
  const jobSearchInput = document.getElementById("job-search");
  const jobTypeFilter = document.getElementById("job-type-filter");
  const jobExpFilter = document.getElementById("job-exp-filter");
  
  // Modal selectors
  const applyModal = document.getElementById("apply-modal");
  const modalCloseBtn = document.querySelector(".modal-close");
  const applyForm = document.getElementById("apply-form");

  // Prep selectors
  const prepSidebar = document.getElementById("prep-sidebar");
  const prepNotesWindow = document.getElementById("prep-notes-window");
  const quizWindow = document.getElementById("quiz-window");

  // Companies selectors
  const companiesGrid = document.getElementById("companies-grid");

  // DSA selectors
  const dsaAccordion = document.getElementById("dsa-accordion");
  const dsaTotalCountEl = document.getElementById("dsa-total-count");
  const dsaCompletedCountEl = document.getElementById("dsa-completed-count");
  const dsaProgressValEl = document.getElementById("dsa-progress-val");
  const circularProgressEl = document.getElementById("circular-progress");

  // Toast selector
  const toastContainer = document.getElementById("toast-container");

  // Dashboard status widgets
  const widgetJobsCount = document.getElementById("widget-jobs-count");
  const widgetAppliedCount = document.getElementById("widget-applied-count");
  const widgetDsaCompleted = document.getElementById("widget-dsa-completed");

  // --- INIT BOOTSTRAP ---
  renderJobs();
  renderPrepCategories();
  renderPrepContent();
  renderCompanies();
  renderDSAProgress();
  renderDSASheet();
  updateDashboardWidgets();
  initAuthSystem();

  // --- ROUTING / NAVIGATION ---
  const headerTitleEl = document.getElementById("dynamic-header-title");
  const headerSubtitleEl = document.getElementById("dynamic-header-subtitle");

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = item.getAttribute("data-section");
      
      // Update sidebar active classes
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      
      // Show target section, hide rest
      sections.forEach(sec => {
        sec.classList.remove("active-section");
        if (sec.id === `${targetSection}-section`) {
          sec.classList.add("active-section");
        }
      });

      // Dynamic header text updates
      if (headerTitleEl && headerSubtitleEl) {
        if (targetSection === "jobs") {
          headerTitleEl.textContent = "Find Your Next Role";
          headerSubtitleEl.textContent = "Apply to curated high-paying tech openings and level up your coding skills.";
        } else if (targetSection === "prep") {
          headerTitleEl.textContent = "Preparation Zone";
          headerSubtitleEl.textContent = "Interactive notes, equations, and practice tests across Aptitude, DSA, and HR.";
        } else if (targetSection === "companies") {
          headerTitleEl.textContent = "Company Hiring Pathways";
          headerSubtitleEl.textContent = "Learn detailed exam patterns, eligibility specs, and syllabus pathways.";
        } else if (targetSection === "dsa") {
          headerTitleEl.textContent = "Topic-Wise DSA Checklist";
          headerSubtitleEl.textContent = "Track your problem-solving metrics across standard algorithmic sheets.";
        }
      }

      state.currentSection = targetSection;
      
      // Trigger redraws if navigating
      if (targetSection === "dsa") {
        renderDSAProgress();
        renderDSASheet();
      } else if (targetSection === "jobs") {
        updateDashboardWidgets();
        renderJobs();
      }
    });
  });

  // --- THEME SWITCH ENGINE ---
  themeToggleBtn.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem("theme", state.theme);
    updateThemeIcon();
    showToast("Theme switched successfully!", "🌙");
  });

  function updateThemeIcon() {
    const icon = themeToggleBtn.querySelector("span");
    if (state.theme === "dark") {
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    } else {
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
  }

  // --- TOAST NOTIFICATIONS ENGINE ---
  function showToast(message, emoji = "✨") {
    const toast = document.createElement("div");
    toast.className = "toast success";
    toast.innerHTML = `
      <span class="toast-icon">${emoji}</span>
      <span class="toast-msg">${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = "slideIn 0.3s ease reverse forwards";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // --- WIDGET STATISTICS ENGINE ---
  function updateDashboardWidgets() {
    if (widgetJobsCount) widgetJobsCount.textContent = JOBS_DATA.length;
    if (widgetAppliedCount) widgetAppliedCount.textContent = state.appliedJobs.length;
    
    // Total DSA Problems
    const totalDsa = DSA_SHEET.reduce((acc, curr) => acc + curr.problems.length, 0);
    if (widgetDsaCompleted) {
      widgetDsaCompleted.textContent = `${state.completedDSA.length}/${totalDsa}`;
    }
  }

  // --- JOB PORTAL MODULE ---
  function renderJobs() {
    if (!jobsListContainer) return;
    jobsListContainer.innerHTML = "";
    
    const searchVal = jobSearchInput ? jobSearchInput.value.toLowerCase() : "";
    const typeVal = jobTypeFilter ? jobTypeFilter.value : "all";
    const expVal = jobExpFilter ? jobExpFilter.value : "all";

    const filteredJobs = JOBS_DATA.filter(job => {
      const matchQuery = job.title.toLowerCase().includes(searchVal) || 
                         job.company.toLowerCase().includes(searchVal) ||
                         job.tags.some(t => t.toLowerCase().includes(searchVal));
      
      const matchType = typeVal === "all" || job.type === typeVal;
      
      let matchExp = true;
      if (expVal !== "all") {
        if (expVal === "entry" && !job.experience.toLowerCase().includes("entry")) matchExp = false;
        if (expVal === "mid" && !job.experience.toLowerCase().includes("mid")) matchExp = false;
        if (expVal === "senior" && !job.experience.toLowerCase().includes("senior")) matchExp = false;
      }

      return matchQuery && matchType && matchExp;
    });

    if (filteredJobs.length === 0) {
      jobsListContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>No matching job roles found.</h3>
          <p>Try resetting filters or expanding search words.</p>
        </div>
      `;
      return;
    }

    filteredJobs.forEach(job => {
      const isApplied = state.appliedJobs.includes(job.id);
      
      const jobCard = document.createElement("div");
      jobCard.className = "glass-card job-card";
      jobCard.style.setProperty("--company-color", job.logoColor);
      
      jobCard.innerHTML = `
        <div class="job-header">
          <div class="company-logo-badge" style="background-color: ${job.logoColor}">
            ${job.company.charAt(0)}
          </div>
          <div class="job-meta">
            <span class="job-type-tag">${job.type}</span>
          </div>
        </div>
        <h3 class="job-title">${job.title}</h3>
        <p class="company-name">${job.company} &bull; ${job.location}</p>
        
        <div class="job-details-row">
          <span>💼 ${job.experience}</span>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
          ${job.description.substring(0, 120)}...
        </p>

        <div class="job-tags">
          ${job.tags.map(t => `<span class="job-tag">${t}</span>`).join("")}
        </div>

        <div class="job-footer">
          <div class="salary-label">${job.salary}</div>
          <button class="btn-primary btn-apply" data-id="${job.id}">
            ${isApplied ? "Applied ✓" : "Quick Apply"}
          </button>
        </div>
      `;

      // Apply button event
      const applyBtn = jobCard.querySelector(".btn-apply");
      if (isApplied) {
        applyBtn.style.background = "var(--border-color)";
        applyBtn.style.color = "var(--text-muted)";
        applyBtn.style.cursor = "default";
        applyBtn.style.boxShadow = "none";
      } else {
        applyBtn.addEventListener("click", () => openApplyModal(job));
      }

      jobsListContainer.appendChild(jobCard);
    });
  }

  // Hook Search Filters
  if (jobSearchInput) jobSearchInput.addEventListener("input", renderJobs);
  if (jobTypeFilter) jobTypeFilter.addEventListener("change", renderJobs);
  if (jobExpFilter) jobExpFilter.addEventListener("change", renderJobs);

  // --- JOB MODAL INTERACTIONS ---
  function openApplyModal(job) {
    state.selectedJob = job;
    applyModal.querySelector(".job-modal-title").textContent = `Apply to ${job.company}`;
    applyModal.querySelector(".job-modal-subtitle").textContent = `${job.title} — ${job.location}`;
    
    // Requirements display
    const reqList = applyModal.querySelector("#modal-requirements");
    reqList.innerHTML = job.requirements.map(req => `<li>${req}</li>`).join("");

    applyModal.classList.add("active");
  }

  function closeApplyModal() {
    applyModal.classList.remove("active");
    applyForm.reset();
    state.selectedJob = null;
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeApplyModal);
  if (applyModal) applyModal.addEventListener("click", (e) => {
    if (e.target === applyModal) closeApplyModal();
  });

  if (applyForm) {
    applyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!state.selectedJob) return;

      const jobId = state.selectedJob.id;
      if (!state.appliedJobs.includes(jobId)) {
        state.appliedJobs.push(jobId);
        localStorage.setItem("appliedJobs", JSON.stringify(state.appliedJobs));
      }

      closeApplyModal();
      renderJobs();
      updateDashboardWidgets();
      showToast(`Application successfully sent to ${state.selectedJob.company}!`, "🚀");
    });
  }

  // --- PREPARATION MODULE ---
  function renderPrepCategories() {
    if (!prepSidebar) return;
    prepSidebar.innerHTML = "";
    Object.keys(PREP_DATA).forEach(key => {
      const category = PREP_DATA[key];
      const card = document.createElement("div");
      card.className = `prep-topic-card ${state.selectedPrepCategory === key ? "active" : ""}`;
      card.setAttribute("data-category", key);
      
      card.innerHTML = `
        <h3>${category.title}</h3>
        <p>${category.subtitle}</p>
      `;

      card.addEventListener("click", () => {
        state.selectedPrepCategory = key;
        document.querySelectorAll(".prep-topic-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        renderPrepContent();
      });

      prepSidebar.appendChild(card);
    });
  }

  function renderPrepContent() {
    if (!prepNotesWindow || !quizWindow) return;
    prepNotesWindow.innerHTML = "";
    quizWindow.innerHTML = "";
    const activeCategoryData = PREP_DATA[state.selectedPrepCategory];

    // 1. Render notes with dynamic accordions
    activeCategoryData.notes.forEach((note, index) => {
      const accordion = document.createElement("div");
      accordion.className = "notes-accordion";
      
      // Simple parser for custom notes syntax
      let parsedHTML = note.content
        .replace(/### (.*)/g, '<h3>$1</h3>')
        .replace(/\* \*\*(.*?)\*\* (.*)/g, '<li><strong>$1</strong> $2</li>')
        .replace(/\* (.*)/g, '<li>$1</li>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\$\$([\s\S]*?)\$\$/g, '<div style="text-align:center; font-weight:600; padding:10px;">$1</div>')
        .replace(/\$([^\$]+)\$/g, '<strong style="color:var(--accent-purple)">$1</strong>')
        .replace(/```javascript([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

      if (parsedHTML.includes("<li>")) {
        parsedHTML = parsedHTML.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
      }

      accordion.innerHTML = `
        <div class="accordion-header" data-index="${index}">
          <span>${note.topic}</span>
          <span class="accordion-icon">▶</span>
        </div>
        <div class="accordion-content" id="content-${index}">
          ${parsedHTML}
        </div>
      `;

      const header = accordion.querySelector(".accordion-header");
      const content = accordion.querySelector(".accordion-content");
      const icon = accordion.querySelector(".accordion-icon");

      header.addEventListener("click", () => {
        const isExpanded = content.classList.contains("expanded");
        if (isExpanded) {
          content.classList.remove("expanded");
          icon.style.transform = "rotate(0deg)";
        } else {
          content.classList.add("expanded");
          icon.style.transform = "rotate(90deg)";
        }
      });

      prepNotesWindow.appendChild(accordion);
    });

    // 2. Render Quiz Box
    const quizHeader = document.createElement("div");
    quizHeader.className = "quiz-box";
    quizHeader.innerHTML = `
      <h2 style="font-family: var(--font-heading); margin-bottom: 20px;">Section Practice Problems</h2>
    `;
    quizWindow.appendChild(quizHeader);

    activeCategoryData.questions.forEach((q, qIndex) => {
      const qCard = document.createElement("div");
      qCard.className = "quiz-card glass-card";
      qCard.style.marginBottom = "20px";
      
      qCard.innerHTML = `
        <div class="quiz-header">
          <span class="quiz-badge">Challenge ${qIndex + 1}</span>
        </div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oIndex) => `
            <button class="option-btn" data-q-id="${q.id}" data-opt-idx="${oIndex}">
              ${opt}
            </button>
          `).join("")}
        </div>
        <div class="quiz-explanation" id="exp-${q.id}">
          <strong>Explanation:</strong> ${q.explanation}
        </div>
        <div style="display: flex; justify-content: flex-end;">
          <button class="btn-submit-answer" data-q-id="${q.id}" style="display: none;">Submit Answer</button>
        </div>
      `;

      const optionBtns = qCard.querySelectorAll(".option-btn");
      const submitBtn = qCard.querySelector(".btn-submit-answer");
      const expDiv = qCard.querySelector(".quiz-explanation");

      optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (expDiv.style.display === "block") return;

          optionBtns.forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          state.quizAnswers[q.id] = parseInt(btn.getAttribute("data-opt-idx"));
          submitBtn.style.display = "block";
        });
      });

      submitBtn.addEventListener("click", () => {
        const selectedIdx = state.quizAnswers[q.id];
        const correctIdx = q.answer;

        optionBtns.forEach((btn, idx) => {
          btn.classList.remove("selected");
          if (idx === correctIdx) {
            btn.classList.add("correct");
          } else if (idx === selectedIdx) {
            btn.classList.add("wrong");
          }
        });

        expDiv.style.display = "block";
        submitBtn.style.display = "none";
        showToast(selectedIdx === correctIdx ? "Correct Answer! Well done." : "Incorrect Answer, read the explanation.", selectedIdx === correctIdx ? "🎉" : "📚");
      });

      quizWindow.appendChild(qCard);
    });
  }

  // --- COMPANIES HIRING METHODS MODULE ---
  function renderCompanies() {
    if (!companiesGrid) return;
    companiesGrid.innerHTML = "";
    COMPANIES_DATA.forEach(comp => {
      const card = document.createElement("div");
      card.className = "glass-card company-card";
      
      card.innerHTML = `
        <div class="company-meta-row">
          <h2 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 700;">${comp.name}</h2>
          <span class="difficulty-badge ${comp.difficulty.toLowerCase().replace(' ', '-')}">${comp.difficulty}</span>
        </div>
        
        <p style="font-size: 0.85rem; margin-bottom: 12px; color: var(--text-secondary)">
          <strong>Eligibility:</strong> ${comp.eligibility}
        </p>

        <div>
          <strong style="font-size: 0.85rem;">Key Syllabus Focus:</strong>
          <div class="syllabus-pills">
            ${comp.syllabus.map(s => `<span class="syllabus-pill">${s}</span>`).join("")}
          </div>
        </div>

        <div class="hiring-flow-list">
          <h4 style="font-size: 0.95rem; margin-bottom: 8px; border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">Hiring Process Steps:</h4>
          ${comp.pattern.map((p, idx) => `
            <div class="flow-step">
              <div class="step-number">${idx + 1}</div>
              <div class="step-details">
                <h4>${p.round}</h4>
                <p>${p.details}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;

      companiesGrid.appendChild(card);
    });
  }

  // --- DSA TRACKER MODULE ---
  function renderDSASheet() {
    if (!dsaAccordion) return;
    dsaAccordion.innerHTML = "";
    
    DSA_SHEET.forEach(topic => {
      const topicCard = document.createElement("div");
      topicCard.className = "dsa-topic-card";

      const totalProblems = topic.problems.length;
      const completedProblems = topic.problems.filter(p => state.completedDSA.includes(p.id)).length;
      const progressPercent = totalProblems > 0 ? (completedProblems / totalProblems) * 100 : 0;

      topicCard.innerHTML = `
        <div class="dsa-topic-header">
          <h3 class="dsa-topic-title">${topic.topic}</h3>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
              ${completedProblems}/${totalProblems} Solved
            </span>
            <div class="dsa-topic-progress-bar">
              <div class="dsa-topic-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
          </div>
        </div>

        <div class="dsa-problems-list">
          ${topic.problems.map(p => {
            const isCompleted = state.completedDSA.includes(p.id);
            return `
              <div class="dsa-problem-row ${isCompleted ? 'checked-row' : ''}" id="row-${p.id}">
                <div class="dsa-checkbox ${isCompleted ? 'checked' : ''}" data-p-id="${p.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div class="dsa-prob-title">${p.title}</div>
                <div class="dsa-diff-label ${p.difficulty.toLowerCase()}">${p.difficulty}</div>
                <a href="${p.link}" target="_blank" class="leetcode-btn">
                  Solve ↗
                </a>
              </div>
            `;
          }).join("")}
        </div>
      `;

      // Checkboxes events
      topicCard.querySelectorAll(".dsa-checkbox").forEach(box => {
        box.addEventListener("click", () => {
          const probId = box.getAttribute("data-p-id");
          const row = topicCard.querySelector(`#row-${probId}`);
          
          if (state.completedDSA.includes(probId)) {
            state.completedDSA = state.completedDSA.filter(id => id !== probId);
            box.classList.remove("checked");
            row.classList.remove("checked-row");
          } else {
            state.completedDSA.push(probId);
            box.classList.add("checked");
            row.classList.add("checked-row");
          }

          localStorage.setItem("completedDSA", JSON.stringify(state.completedDSA));
          
          renderDSAProgress();
          
          const updatedCompleted = topic.problems.filter(p => state.completedDSA.includes(p.id)).length;
          const updatedPercent = (updatedCompleted / totalProblems) * 100;
          
          topicCard.querySelector(".dsa-topic-progress-fill").style.width = `${updatedPercent}%`;
          topicCard.querySelector(".dsa-topic-header span").textContent = `${updatedCompleted}/${totalProblems} Solved`;
          
          updateDashboardWidgets();
        });
      });

      dsaAccordion.appendChild(topicCard);
    });
  }

  function initAuthSystem() {
    if (!headerAuthBox) return;

    // Embedded Main Forms Selectors
    const mainTabSigninBtn = document.getElementById("main-tab-signin-btn");
    const mainTabSignupBtn = document.getElementById("main-tab-signup-btn");
    const mainSigninForm = document.getElementById("main-signin-form");
    const mainSignupForm = document.getElementById("main-signup-form");
    const mainBtnGuestExplore = document.getElementById("main-btn-guest-explore");

    // A. Check existing session
    if (state.currentUser) {
      if (headerAuthBox) headerAuthBox.style.display = "none";
      if (headerProfileBox) headerProfileBox.style.display = "block";
      document.body.classList.remove("logged-out");
      updateProfileDisplay();
    } else {
      if (headerAuthBox) headerAuthBox.style.display = "block";
      if (headerProfileBox) headerProfileBox.style.display = "none";
      document.body.classList.add("logged-out");
    }

    // Dropdown toggle
    if (btnAuthTrigger && headerAuthDropdown) {
      btnAuthTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        headerAuthDropdown.classList.toggle("active");
      });

      // Close dropdown if clicked outside
      document.addEventListener("click", (e) => {
        if (headerAuthDropdown && !headerAuthDropdown.contains(e.target) && e.target !== btnAuthTrigger && e.target !== btnLockUnlockTrigger) {
          headerAuthDropdown.classList.remove("active");
        }
      });
    }

    if (btnLockUnlockTrigger && headerAuthDropdown) {
      btnLockUnlockTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        headerAuthDropdown.classList.add("active");
      });
    }

    // B. Tab Swapping (Header Dropdown)
    if (tabSigninBtn && tabSignupBtn && signinForm && signupForm) {
      tabSigninBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        tabSignupBtn.classList.remove("active");
        tabSigninBtn.classList.add("active");
        signupForm.classList.remove("active-form");
        signinForm.classList.add("active-form");
      });

      tabSignupBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        tabSigninBtn.classList.remove("active");
        tabSignupBtn.classList.add("active");
        signinForm.classList.remove("active-form");
        signupForm.classList.add("active-form");
      });
    }

    // B2. Tab Swapping (Main Embedded Panel)
    if (mainTabSigninBtn && mainTabSignupBtn && mainSigninForm && mainSignupForm) {
      mainTabSigninBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        mainTabSignupBtn.classList.remove("active");
        mainTabSigninBtn.classList.add("active");
        mainSignupForm.classList.remove("active-form");
        mainSigninForm.classList.add("active-form");
      });

      mainTabSignupBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        mainTabSigninBtn.classList.remove("active");
        mainTabSignupBtn.classList.add("active");
        mainSigninForm.classList.remove("active-form");
        mainSignupForm.classList.add("active-form");
      });
    }

    // C. Explore as Guest (Header Dropdown)
    if (btnGuestExplore) {
      btnGuestExplore.addEventListener("click", () => {
        state.currentUser = {
          name: "Guest Learner",
          email: "guest@jobprephub.com",
          role: "Guest Mode"
        };
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        if (headerAuthBox) headerAuthBox.style.display = "none";
        if (headerProfileBox) headerProfileBox.style.display = "block";
        if (headerAuthDropdown) headerAuthDropdown.classList.remove("active");
        document.body.classList.remove("logged-out");
        updateProfileDisplay();
        showToast("Logged in as Guest Explorer!", "👀");
      });
    }

    // C2. Explore as Guest (Main Embedded Panel)
    if (mainBtnGuestExplore) {
      mainBtnGuestExplore.addEventListener("click", () => {
        state.currentUser = {
          name: "Guest Learner",
          email: "guest@jobprephub.com",
          role: "Guest Mode"
        };
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        if (headerAuthBox) headerAuthBox.style.display = "none";
        if (headerProfileBox) headerProfileBox.style.display = "block";
        document.body.classList.remove("logged-out");
        updateProfileDisplay();
        showToast("Logged in as Guest Explorer!", "👀");
      });
    }

    // D. Sign In Submission (Header Dropdown)
    if (signinForm) {
      signinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailVal = document.getElementById("dropdown-signin-email").value;
        const namePart = emailVal.split("@")[0];
        
        state.currentUser = {
          name: namePart.charAt(0).toUpperCase() + namePart.slice(1),
          email: emailVal,
          role: "Active Learner"
        };
        
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        if (headerAuthBox) headerAuthBox.style.display = "none";
        if (headerProfileBox) headerProfileBox.style.display = "block";
        if (headerAuthDropdown) headerAuthDropdown.classList.remove("active");
        document.body.classList.remove("logged-out");
        updateProfileDisplay();
        showToast("Successfully Signed In!", "👋");
      });
    }

    // D2. Sign In Submission (Main Embedded Panel)
    if (mainSigninForm) {
      mainSigninForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailVal = document.getElementById("main-signin-email").value;
        const namePart = emailVal.split("@")[0];
        
        state.currentUser = {
          name: namePart.charAt(0).toUpperCase() + namePart.slice(1),
          email: emailVal,
          role: "Active Learner"
        };
        
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        if (headerAuthBox) headerAuthBox.style.display = "none";
        if (headerProfileBox) headerProfileBox.style.display = "block";
        document.body.classList.remove("logged-out");
        updateProfileDisplay();
        showToast("Successfully Signed In!", "👋");
      });
    }

    // E. Sign Up Submission (Header Dropdown)
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameVal = document.getElementById("dropdown-signup-name").value;
        const emailVal = document.getElementById("dropdown-signup-email").value;
        const roleVal = document.getElementById("dropdown-signup-role").value;

        state.currentUser = {
          name: nameVal,
          email: emailVal,
          role: roleVal
        };

        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        if (headerAuthBox) headerAuthBox.style.display = "none";
        if (headerProfileBox) headerProfileBox.style.display = "block";
        if (headerAuthDropdown) headerAuthDropdown.classList.remove("active");
        document.body.classList.remove("logged-out");
        updateProfileDisplay();
        showToast(`Welcome aboard, ${nameVal}!`, "🎉");
      });
    }

    // E2. Sign Up Submission (Main Embedded Panel)
    if (mainSignupForm) {
      mainSignupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameVal = document.getElementById("main-signup-name").value;
        const emailVal = document.getElementById("main-signup-email").value;
        const roleVal = document.getElementById("main-signup-role").value;

        state.currentUser = {
          name: nameVal,
          email: emailVal,
          role: roleVal
        };

        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        if (headerAuthBox) headerAuthBox.style.display = "none";
        if (headerProfileBox) headerProfileBox.style.display = "block";
        document.body.classList.remove("logged-out");
        updateProfileDisplay();
        showToast(`Welcome aboard, ${nameVal}!`, "🎉");
      });
    }

    // F. Logout Event
    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        state.currentUser = null;
        if (headerAuthBox) headerAuthBox.style.display = "block";
        if (headerProfileBox) headerProfileBox.style.display = "none";
        document.body.classList.add("logged-out");
        
        // Reset dropdown forms
        if (signinForm) signinForm.reset();
        if (signupForm) signupForm.reset();
        
        // Reset embedded main forms
        if (mainSigninForm) mainSigninForm.reset();
        if (mainSignupForm) mainSignupForm.reset();
        
        // Return dropdown tabs to sign-in defaults
        if (tabSigninBtn && tabSignupBtn && signinForm && signupForm) {
          tabSignupBtn.classList.remove("active");
          tabSigninBtn.classList.add("active");
          signupForm.classList.remove("active-form");
          signinForm.classList.add("active-form");
        }

        // Return main embedded tabs to sign-in defaults
        if (mainTabSigninBtn && mainTabSignupBtn && mainSigninForm && mainSignupForm) {
          mainTabSignupBtn.classList.remove("active");
          mainTabSigninBtn.classList.add("active");
          mainSignupForm.classList.remove("active-form");
          mainSigninForm.classList.add("active-form");
        }

        showToast("Logged out successfully!", "↩");
      });
    }
  }

  function updateProfileDisplay() {
    if (!state.currentUser) return;
    
    if (userDisplayName) userDisplayName.textContent = state.currentUser.name;
    if (userDisplayRole) userDisplayRole.textContent = state.currentUser.role;
    
    if (userAvatar) {
      const initials = state.currentUser.name
        .split(" ")
        .map(n => n.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();
      userAvatar.textContent = initials || "G";
    }
  }

  function renderDSAProgress() {
    if (!dsaTotalCountEl || !dsaCompletedCountEl || !dsaProgressValEl || !circularProgressEl) return;
    
    const totalProblems = DSA_SHEET.reduce((acc, curr) => acc + curr.problems.length, 0);
    const completedProblems = state.completedDSA.length;
    const progressPercent = totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0;

    dsaTotalCountEl.textContent = totalProblems;
    dsaCompletedCountEl.textContent = completedProblems;
    dsaProgressValEl.textContent = `${progressPercent}%`;

    const degrees = (progressPercent / 100) * 360;
    circularProgressEl.style.background = `conic-gradient(var(--accent-purple) ${degrees}deg, var(--border-color) ${degrees}deg)`;
  }
  } catch (error) {
    console.error("Initialization error:", error);
    const errorBanner = document.createElement("div");
    errorBanner.style.position = "fixed";
    errorBanner.style.top = "20px";
    errorBanner.style.left = "20px";
    errorBanner.style.right = "20px";
    errorBanner.style.backgroundColor = "#ef4444";
    errorBanner.style.color = "white";
    errorBanner.style.padding = "20px";
    errorBanner.style.borderRadius = "12px";
    errorBanner.style.zIndex = "99999";
    errorBanner.style.fontFamily = "monospace";
    errorBanner.style.fontSize = "14px";
    errorBanner.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    errorBanner.innerHTML = `
      <h3 style="margin-bottom: 8px; font-weight: bold;">⚠️ JobPrep Hub Load Error:</h3>
      <p style="margin-bottom: 8px;">The application encountered an error while booting up:</p>
      <pre style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 6px; overflow-x: auto; white-space: pre-wrap;">${error.stack || error.message || error}</pre>
    `;
    document.body.appendChild(errorBanner);
  }
}

// ==========================================
// 3. SECURE APPLICATION BOOTSTRAPPER
// ==========================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
