import { CodeSection } from 'react-code-section-lib';
import Link from 'next/link';
export default function Index() {
  const example = `import Link from 'next/link';
  import { AnimatePresence, motion } from 'framer-motion';
  
  export default function Index() {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    let links = [
      {
        name: 'Home',
        link: '#home',
      },
      {
        name: 'About',
        link: '#about',
      },
      {
        name: 'Privacy',
        link: '#privacy',
      },
      {
        name: 'Terms',
        link: '#terms',
      },
    ];
  
    return (
      <div className="mt-20 flex space-x-4 justify-center">
        {links.map((navLink, index) => (
          <Link
            key={navLink.name}
            href={navLink.link}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative  rounded-xl px-4 py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
  
            <span className="relative z-10">{navLink.name}</span>
          </Link>
        ))}
      </div>
    );
  }
  `;
  const usage = `npm i framer-motion
  `;
  const imports = `import { useState } from "react";
  import Link from "next/link";
  import { AnimatePresence, motion } from "framer-motion";
  `;
  const syntax = `<AnimatePresence>
  {hoveredIndex === index && (
    <motion.span
      className="absolute inset-0 rounded-lg bg-gray-100"
      layoutId="hoverBackground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.15 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.15, delay: 0.2 },
      }}
    />
  )}
</AnimatePresence>
`;
  return (
    <div className="p-24">
      <h3>Navbar</h3>
      <div>A simple Navbar hover effect</div>
      <CodeSection theme="dark" lang="react">
        {example}
      </CodeSection>
      <h3>Usage</h3>
      <ol>
        <li>
          <h4>Install react-toastify npm package</h4>
          <CodeSection showLineNumbers theme="dark" lang="react">
            {usage}
          </CodeSection>
        </li>
        <li>
          <h4>Import in the root directory</h4>
          <CodeSection theme="dark" lang="react">
            {imports}
          </CodeSection>
        </li>
        <li>
          <h4>Use toast in your app</h4>
          <CodeSection theme="dark" lang="react">
            {syntax}
          </CodeSection>
        </li>
      </ol>
      <div className="m-1 p-2 text-black-100 font-bold">
        <Link href="../../../demos/navbar/" target="_new">
          Live Demo
        </Link>
        <Link href="/" target="_new">
          Source Code
        </Link>
      </div>
    </div>
  );
}
