export const blogs = [
  {
  "id": "1",
  "title": "Google AI Ecosystem: Build, Design & Launch Without Heavy Coding",
  "subtitle": "A practical guide to using Gemini and its powerful tools for real-world workflows",
  "date": "2026-05-05",
  "content": `
    <h2>Introduction</h2>
    <p>AI is no longer just about chatting or generating text. It has evolved into a complete ecosystem where you can design, build, research, and even market products using interconnected tools. Google's AI stack brings together multiple specialized tools that allow you to go from idea to execution faster than ever.</p>

    <h2>Core AI Models You Should Know</h2>
    <p><b>Gemini</b> acts as the brain for reasoning, coding, and research tasks. It can analyze data, generate ideas, and assist in problem-solving.</p>
    <p><b>Imagen</b> is used for generating high-quality images from text prompts, useful for thumbnails, UI assets, and marketing creatives.</p>
    <p><b>Veo</b> enables text-to-video generation and can even add realistic sound, making it powerful for content creators.</p>
    <p><b>Gemma</b> provides lightweight open-source models that can run locally, useful for offline or low-cost AI solutions.</p>
    <p><b>Daria</b> focuses on text-to-audio generation, helping create voiceovers and audio content.</p>

    <h2>AI Tools That Actually Get Work Done</h2>

    <h3>Stitch (AI Design Tool)</h3>
    <p>Stitch works like an AI-powered Figma. You can describe an app using prompts and instantly generate UI designs and prototypes. These designs can be exported to tools like Figma or development environments.</p>
    <p><b>Use case:</b> Quickly design your app UI without spending hours on manual design.</p>

    <h3>Pumi (AI Marketing Engine)</h3>
    <p>Pumi analyzes your website or product and automatically generates marketing campaigns, creatives, and branding ideas.</p>
    <p><b>Use case:</b> Generate ads, social media content, and branding strategy instantly.</p>

    <h3>NotebookLM (AI Research Assistant)</h3>
    <p>NotebookLM can process PDFs, videos, and audio files to generate summaries, mind maps, flashcards, and even podcast-style explanations.</p>
    <p><b>Use case:</b> Study faster, do research, or convert learning material into structured notes.</p>

    <h3>Anti-Gravity (AI Coding IDE)</h3>
    <p>Anti-Gravity is an advanced AI-powered development environment that can plan, write, and debug code using multiple AI agents. It can even test UI using a built-in browser.</p>
    <p><b>Use case:</b> Build full-stack applications with AI assistance and automate debugging.</p>

    <h3>Google AI Studio (No-Code App Builder)</h3>
    <p>Google AI Studio allows you to turn designs into working applications. You can generate apps, host them, and integrate APIs without deep coding knowledge.</p>
    <p><b>Use case:</b> Build and deploy apps directly from your ideas or designs.</p>

    <h2>How to Combine These Tools (Real Workflow)</h2>
    <p>You can combine these tools to create a full product pipeline:</p>
    <ul>
      <li>Use <b>NotebookLM</b> to research and define your product idea</li>
      <li>Design the UI using <b>Stitch</b></li>
      <li>Build and deploy using <b>Google AI Studio</b> or <b>Anti-Gravity</b></li>
      <li>Generate marketing content using <b>Pumi</b></li>
    </ul>
    <p>This creates a complete end-to-end workflow powered by AI.</p>

    <h2>Conclusion</h2>
    <p>The biggest shift is that AI is no longer just assisting development—it is becoming the development process itself. With tools handling design, coding, research, and marketing, anyone can build and launch products faster. Learning how to use these tools together can give a massive advantage in projects, startups, and hackathons.</p>
  `
},
{
  "id": "2",
  "title": "Beginner’s Guide to Open Source Contribution Using GitHub & VS Code",
  "subtitle": "A step-by-step roadmap for students to make their first pull request with confidence",
  "date": "2026-05-18",
  "content": `
    <h2>Introduction</h2>
    <p>Open source contribution often feels intimidating for beginners. Many students want to contribute to projects but get confused by GitHub workflows, terminal commands, pull requests, and collaboration processes. This guide simplifies the entire process into beginner-friendly steps so anyone can confidently make their first contribution.</p>

    <p>According to the workshop presentation by Aditya Jain for GirlScript Summer of Code (GSSOC '26), the biggest challenge is not coding itself — it is understanding the workflow and process behind contribution. :contentReference[oaicite:0]{index=0}</p>

    <h2>What is Open Source?</h2>
    <p>Open source refers to projects whose source code is publicly available for everyone to view, learn from, improve, and contribute to. Most of the technologies and platforms we use daily are connected to open source ecosystems.</p>

    <p>One of the biggest advantages of open source is collaboration. Anyone can:</p>
    <ul>
      <li>View the source code</li>
      <li>Learn from real-world projects</li>
      <li>Improve existing features</li>
      <li>Contribute to the community</li>
    </ul>

    <h2>Why Open Source is Important for Students</h2>
    <p>Open source contribution gives students practical exposure that traditional learning often cannot provide.</p>

    <ul>
      <li><b>Improve Coding Skills:</b> Work on real projects instead of only tutorials</li>
      <li><b>Gain Real-World Experience:</b> Learn industry workflows and collaboration</li>
      <li><b>Build Teamwork:</b> Collaborate with developers across the globe</li>
      <li><b>Strengthen Your Resume:</b> Showcase contributions and GitHub activity</li>
      <li><b>Create Networking Opportunities:</b> Connect with maintainers and communities</li>
    </ul>

    <h2>Common Beginner Problems</h2>
    <p>Most beginners face similar roadblocks when starting their open source journey:</p>

    <ul>
      <li>Confusion between forking, cloning, and branching</li>
      <li>Fear of terminal commands</li>
      <li>Uncertainty about creating pull requests</li>
      <li>Fear of making mistakes and breaking code</li>
    </ul>

    <p>The good news is that these fears are completely normal. Open source contribution becomes much easier when broken down into a safe and simple workflow. :contentReference[oaicite:1]{index=1}</p>

    <h2>The Complete Open Source Workflow</h2>

    <p>The contribution workflow can be divided into 8 simple steps:</p>

    <ol>
      <li>Find a repository</li>
      <li>Fork the repository</li>
      <li>Clone it locally</li>
      <li>Create a new branch</li>
      <li>Make your changes</li>
      <li>Commit the changes</li>
      <li>Push your code</li>
      <li>Create a Pull Request (PR)</li>
    </ol>

    <h2>Understanding Pull Requests (PR)</h2>
    <p>A Pull Request is a way to share your changes with the original project maintainers on GitHub. It is essentially asking:</p>

    <blockquote>
      “I made some improvements to the project. Can you review and merge them?”
    </blockquote>

    <p>This creates a collaborative workflow where maintainers can review, discuss, and approve contributions before they become part of the main project.</p>

    <h2>Step-by-Step Contribution Guide</h2>

    <h3>Step 1: Fork the Repository</h3>
    <p>Forking creates your own copy of a GitHub repository under your account.</p>

    <p><b>Why?</b> It allows you to work independently without affecting the original project.</p>

    <h3>Step 2: Clone the Repository</h3>
    <p>Cloning downloads the repository from GitHub to your local computer.</p>

    <pre>
git clone https://github.com/your-username/project-name.git
cd project-name
    </pre>

    <h3>Step 3: Create a New Branch</h3>
    <p>Creating a separate branch keeps your work isolated from the main project.</p>

    <pre>
git checkout -b my-changes
    </pre>

    <p><b>Best Practice:</b> Never make changes directly on the main branch.</p>

    <h3>Step 4: Make Changes</h3>
    <p>Open the project in VS Code or any editor and start contributing.</p>

    <p>Your contribution does not need to be huge. Beginner-friendly contributions include:</p>

    <ul>
      <li>Fixing spelling mistakes</li>
      <li>Improving documentation</li>
      <li>Fixing UI alignment issues</li>
      <li>Solving small bugs</li>
    </ul>

    <h3>Step 5: Commit Your Changes</h3>
    <p>After editing the files, save your work using Git commits.</p>

    <pre>
git add .
git commit -m "Fixed spelling mistake in README"
    </pre>

    <h3>Step 6: Push Your Code</h3>
    <p>Upload your changes from your local machine to GitHub.</p>

    <pre>
git push origin my-changes
    </pre>

    <h3>Step 7: Open a Pull Request</h3>
    <p>Go to your GitHub repository and click on <b>“Compare & Pull Request”</b>.</p>

    <p>Add:</p>

    <ul>
      <li>A clear title</li>
      <li>A proper description</li>
      <li>Explanation of what you changed</li>
    </ul>

    <h2>Essential Git Commands Cheat Sheet</h2>

    <pre>
git clone <url>              → Download repository
cd <folder>                  → Enter project folder
git checkout -b <branch>     → Create a new branch
git add .                    → Stage changes
git commit -m "message"      → Save changes
git push origin <branch>     → Upload code to GitHub
    </pre>

    <h2>Common Mistakes to Avoid</h2>

    <ul>
      <li>Committing directly to the main branch</li>
      <li>Forgetting to sync with the upstream repository</li>
      <li>Writing unclear Pull Request descriptions</li>
    </ul>

    <p>Recommended practices include:</p>

    <ul>
      <li>Always create a new branch before editing</li>
      <li>Pull the latest updates before starting work</li>
      <li>Clearly explain your contribution in the PR</li>
    </ul>

    <h2>You Don’t Need to Be an Expert</h2>

    <p>One of the most important lessons for beginners is this:</p>

    <blockquote>
      “Your first PR does not need to be huge.”
    </blockquote>

    <p>Even small contributions matter in open source. What matters most is taking the first step and learning the process.</p>

    <h2>Conclusion</h2>

    <p>Open source contribution is one of the best ways for students to gain practical experience, improve coding skills, and build a strong developer profile. The process may initially look complex, but once broken into small steps, it becomes approachable and rewarding.</p>

    <p>The key is consistency and confidence. Start with small contributions, learn Git workflows gradually, and focus on collaboration instead of perfection. Your first contribution can be the beginning of a long and impactful journey in the developer community.</p>

  `
}
];