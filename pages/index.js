import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import { POST } from '../components/Post';
import { POSTS } from './api/posts';
import { MYDATA } from './api/mydata';
import Projects from '../components/Projects';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={(styles.container, 'container mx-auto bg-gray-100')}>
      <Hero data={MYDATA[0]} />
      <POST items={POSTS} title="Recent Blogs" />
      <div className="pl-24 p-1">
        <Link href="/blog">See All Blogs</Link>
      </div>
      <Projects data={MYDATA[0].projects} title="Projects" />
      <Projects data={MYDATA[0].projects} title="Upcoming Projects" />
      <Projects data={MYDATA[0].projects} title="Tech Talks and Videos" />

      <POST items={POSTS} title="Life Changelog and Updates" />
    </div>
  );
}
