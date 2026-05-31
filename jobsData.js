// JobPrep Hub - Structured Datasets

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
* **Formula:** $\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$
* **Conversion:** 
  * To convert $\\text{km/h}$ to $\\text{m/s}$, multiply by $\\frac{5}{18}$.
  * To convert $\\text{m/s}$ to $\\text{km/h}$, multiply by $\\frac{18}{5}$.
* **Average Speed:** If an object covers equal distances at speeds $A$ and $B$, the average speed is:
  $$\\text{Average Speed} = \\frac{2AB}{A+B}$$

### 2. Work and Time
* If $A$ can do a piece of work in $n$ days, then $A$'s $1$-day work $= \\frac{1}{n}$.
* If $A$ is $k$ times as efficient as $B$, then:
  * Ratio of work done by $A$ and $B = k : 1$
  * Ratio of times taken by $A$ and $B = 1 : k$

### 3. Percentages & Profit/Loss
* **Profit** = $\\text{Selling Price (SP)} - \\text{Cost Price (CP)}$
* **Loss** = $\\text{Cost Price (CP)} - \\text{Selling Price (SP)}$
* **Profit Percentage:** $\\text{Profit }\\% = \\left(\\frac{\\text{Profit}}{\\text{CP}}\\right) \\times 100$
* **Loss Percentage:** $\\text{Loss }\\% = \\left(\\frac{\\text{Loss}}{\\text{CP}}\\right) \\times 100$
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
* **Constant Time:** $O(1)$ - Array indexing, pushing to stack.
* **Logarithmic Time:** $O(\\log n)$ - Binary Search, operations in Balanced BSTs.
* **Linear Time:** $O(n)$ - Traversing arrays, searching in linked lists.
* **Log-linear Time:** $O(n \\log n)$ - Merge Sort, Quick Sort (avg case), Heap Sort.
* **Quadratic Time:** $O(n^2)$ - Bubble Sort, Insertion Sort, nested loops.
* **Exponential Time:** $O(2^n)$ - Recursive Fibonacci, generating subsets.
* **Factorial Time:** $O(n!)$ - TSP permutation solutions.

### 2. Common Space Complexities
* In-place algorithms: $O(1)$ auxiliary space.
* Recursion stack: $O(d)$ where $d$ is depth of the recursion tree.
* Adjacency list: $O(V + E)$ where $V$ is vertices and $E$ is edges.
        `
      },
      {
        topic: "Common Interview Patterns",
        content: `
### 1. Two Pointers
* **Concept:** Use two indexes tracking positions in an array to reduce time complexity from $O(n^2)$ to $O(n)$.
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
* **Example:** Maximum sum subarray of size $K$.
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
        explanation: "B+ Trees maintain order and have leaves linked sequentially, allowing very fast range scans ($O(\\log N)$ traversal plus sequential leaf scanning)."
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
