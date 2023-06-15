import { SNIPPETS } from '../api/snippets';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
export default function Index() {
  return (
    <div>
      <div>
        <div className="p-24">
          <h3 className="text-lg">Snippets</h3>
          <p>
            Reusable code snippets that can be easily integrated in your
            application 🧩. The page contains functions and code snippets which
            can be used on your webpage.
          </p>
          <button
            type="button"
            className="primary-button p-5 mt-10 bg-blue-100"
          >
            Know More
          </button>
        </div>
        <div className="grid grid-cols-2 pl-24 pr-24">
          {SNIPPETS &&
            SNIPPETS.map((item) => {
              return (
                <div className="post-item p-10 m-2 bg-pink-100 rounded-lg">
                  <Link href={`./snippets${item.liveurl}`}>
                    <div className="font-bold pb-1">{item.title}</div>
                    <div className="pb-1">{item.description}</div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
