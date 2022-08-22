import React from 'react'
import Header from '../../components/homepage/header/Header'
import Hero from '../../components/ceu/hero/Hero'
import About from '../../components/ceu/about/About'
import Registration from '../../components/course-registration/Registration'
import Steps from '../../components/steps/Steps'
import Note from '../../components/note/Note'
import Footer from '../../components/homepage/footer/Footer'

const index = () => {

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Registration />
            <Steps />
            <Note />
            <Footer />
        </>
    )
}

export default index