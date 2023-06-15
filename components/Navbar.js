import Link from 'next/link';
// import { BeakerIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  return (
    <div className="navbar container">
      <ul>
        <li className="hover:bg-gray-100">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/blog">
            Blog <i className="bi bi-1-circle-fill"></i>
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/snippets">Snippets</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/resources">Resources</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/quotes">Quotes</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/project">Projects</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/coverletter">Coverletter</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/mybooks">My Books</Link>
        </li>
      </ul>
    </div>
  );
}
