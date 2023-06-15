import { SNIPPETS } from '../api/snippets';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
export default function Index() {
  return (
    <div>
      <div>
        <div className="p-24">
          <h3 className="text-lg">Deity</h3>
          <p>
            A deity is a divine being or god that is worshipped and revered in
            various religious traditions. Deities are often associated with
            supernatural powers, control over natural elements, and influence
            over human affairs. They are typically considered immortal,
            omniscient, and omnipotent. Deities can take different forms and be
            worshipped in different ways, depending on the specific religious
            beliefs and cultural practices of a particular group or society.
            Examples of deities include gods and goddesses from ancient
            mythologies, such as Zeus in Greek mythology, Shiva in Hinduism, and
            Odin in Norse mythology. Different religions and belief systems have
            their own pantheons of deities, each with their own characteristics,
            roles, and symbolism.
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
