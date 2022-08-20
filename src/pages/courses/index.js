import React from 'react'
import Header from '../../components/homepage/header/Header'
import Skill from '../../components/courses/skill/Skill'
import Popular from '../../components/courses/popular-courses/Popular'
import Footer from '../../components/homepage/footer/Footer'

const index = () => {

    return (
        <>
            <Header />
            <Skill />
            <Popular />
            <Footer />
        </>
    )
}

export default index