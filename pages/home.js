import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import MYDATA from './api/mydata';
import { POSTS } from './api/posts';
export default function Home() {
  return (
    <div>
      <Hero data={MYDATA[0]} />
    </div>
  );
}
