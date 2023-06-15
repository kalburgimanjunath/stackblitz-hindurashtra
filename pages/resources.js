import React, { useState } from 'react';
import Projects from '../components/Projects';
import { MYDATA } from './api/mydata';
import { RESOURCES } from './api/resources';
import styles from '../styles/Home.module.css';
// import { useState } from 'react/cjs/react.production.min';
export default function Resources() {
  // const autoData = useState(null);
  const utilities = RESOURCES.filter((auto) =>
    auto.rtype.includes('utilities')
  );
  const ui = RESOURCES.filter((auto) => auto.rtype.includes('userinterface'));
  const everydayuse = RESOURCES.filter((auto) =>
    auto.rtype.includes('everydayuse')
  );
  const freethemes = RESOURCES.filter((auto) =>
    auto.rtype.includes('freethemes')
  );
  const productivity = RESOURCES.filter((auto) =>
    auto.rtype.includes('productivity')
  );
  const Card = ({ item }) => {
    return (
      <div className="m-5 p-10 bg-gray-100 rounded">
        <div>{item.title}</div>
        <div className="absolute">{item.link}</div>
      </div>
    );
  };
  return (
    <div className="p-24">
      <h3>Resources</h3>
      <p>
        Helpful websites that I've been using for years that have helped me in
        developing applications and much more. 🔥
      </p>
      <button type="button" className="primary-button p-5 mt-10 bg-blue-100">
        Know More
      </button>
      <h3>Utilities</h3>
      {utilities &&
        utilities.map((item) => {
          return <Card item={item} />;
        })}
      <h3>User Interface</h3>
      {ui &&
        ui.map((item) => {
          return <Card item={item} />;
        })}
      <h3>Everyday use</h3>
      {everydayuse &&
        everydayuse.map((item) => {
          return <Card item={item} />;
        })}
      <h3>Free Themes</h3>
      {everydayuse &&
        everydayuse.map((item) => {
          return <Card item={item} />;
        })}
      <h3>Productivity</h3>
      <div className="flex grid grid-cols-3">
        {productivity &&
          productivity.map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </div>
  );
}
