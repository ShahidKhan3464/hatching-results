import React from 'react'
import Header from '../../components/homepage/header/Header';
import Hero from '../../components/homepage/hero/Hero';
import Description from '../../components/homepage/course-description/Description';
import Aks from '../../components/homepage/aks/Aks';
import Instructor from '../../components/homepage/instructor/Instructor';
import Course from '../../components/homepage/choose-course/Course';
import Contact from '../../components/homepage/contact/Contact';
import Footer from '../../components/homepage/footer/Footer';

const Homepage = () => {

    return (
        <>
            <Header />
            <Hero />
            <Description />
            <Aks />
            <Instructor />
            <Course />
            <Contact />
            <Footer />
        </>
    )
}

export default Homepage;