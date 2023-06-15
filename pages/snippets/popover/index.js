import { CodeSection } from 'react-code-section-lib';
import Link from 'next/link';
export default function Index() {
  const example = `import * as React from 'react';
  import * as Popover from '@radix-ui/react-popover';
  
  const PopoverDemo = () => (
    <Popover.Root>
      <Popover.Trigger>More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          Some more info…
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
  
  export default PopoverDemo;`;
  const usage = `npm install @radix-ui/react-popover@latest -E`;
  const imports = `import * as React from 'react';
  import * as Popover from '@radix-ui/react-popover';`;
  const syntax = `const PopoverDemo = () => (
    <Popover.Root>
      <Popover.Trigger>More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          Some more info…
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );`;
  return (
    <div className="p-24">
      <h3>Popover</h3>
      <div>A simple Popover Component</div>
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
        <Link href="../../../demos/popover/" target="_new">
          Live Demo
        </Link>
        <Link href="/" target="_new">
          Source Code
        </Link>
      </div>
    </div>
  );
}
