import React from 'react'
import Header from '../../components/homepage/header/Header'
import CourseForm from '../../components/checkout/course-form/CourseForm'
import PaymentForm from '../../components/checkout/payment-form/PaymentForm'
import Footer from '../../components/homepage/footer/Footer'

const index = () => {

    return (
        <>
            <Header />
            <CourseForm />
            <PaymentForm />
            <Footer />
        </>
    )
}

export default index