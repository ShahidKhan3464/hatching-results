import React from 'react'
import Hero from './components/hero/Hero';
import Description from './components/course-description/Description';
import Aks from './components/aks/Aks';
import Instructor from './components/instructor/Instructor';
import Course from './components/choose-course/Course';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const Homepage = () => {

    return (
        <div>
            <Header />
            <Hero />
            <Description />
            <Aks />
            <Instructor />
            <Course />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage;