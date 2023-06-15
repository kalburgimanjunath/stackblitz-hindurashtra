import Projects from '../components/Projects';
import { MYDATA } from './api/mydata';
import styles from '../styles/Home.module.css';
export default function Project() {
  return (
    <div>
      <div className="p-24">
        <h3>Projects</h3>
        <p>
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (along with course related projects) here. –
          checkout my blog while you're here. I write about technology, learning
          and memes.
        </p>
        <button type="button" className="primary-button p-5 mt-10 bg-blue-100">
          Know More
        </button>
      </div>
      <Projects data={MYDATA[0].projects} title="Full Stack" />
      <Projects data={MYDATA[0].projects} title="Upcoming Projects" />
    </div>
  );
}
