import Navbar from './Layout/Navbar';
import Hero from '@/Sections/Hero';
import About from '@/Sections/About';
import Projects from '@/Sections/Projects';
import Experience from '@/Sections/Experience';
import Testimonials from '@/Sections/Testimonials';
import Contact from '@/Sections/Contact';
import Footer from './Layout/Footer';

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/> 
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>

    </div>
  )
}

export default App