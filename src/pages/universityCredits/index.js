import React from 'react'
import Header from '../../components/homepage/header/Header'
import Hero from '../../components/uniCredits/hero/Hero'
import About from '../../components/uniCredits/about/About'
import Regitstration from '../../components/course-registration/Registration'
import Steps from '../../components/steps/Steps'
import Footer from '../../components/homepage/footer/Footer'

const index = () => {

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Regitstration />
            <Steps />
            <Footer />
        </>
    )
}

export default index