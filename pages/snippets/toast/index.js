import { CodeSection } from 'react-code-section-lib';
import Link from 'next/link';
export default function Index() {
  const example = `import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  function MyApp({ Component, pageProps }) {
    return (
      <>
        <ToastContainer />
        <Component {...pageProps} />
      </>
    );
  }
  
  const logout = async () => {
    await firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
    });
    toast.success("🚀 Logged out successfully!");
    router.push("/login");
  };
  `;
  const usage = `npm i react-toastify
  `;
  const imports = `import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";`;
  const syntax = `toast.success("🚀 Logged out successfully!");
`;
  return (
    <div className="p-24">
      <h3>Toast</h3>
      <div>A simple reusable notification toasts</div>
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
        <Link href="../../../demos/toast/" target="_new">
          Live Demo
        </Link>
        <Link href="/" target="_new">
          Source Code
        </Link>
      </div>
    </div>
  );
}
