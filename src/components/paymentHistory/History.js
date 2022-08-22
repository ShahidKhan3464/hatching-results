import React from 'react'
import { Container, Table } from "react-bootstrap"
import './style.css'

const History = () => {

    const createData = (course, author, approx, transaction, date) => {
        return { course, author, approx, transaction, date };
    }

    const cartData = [
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150, "10.10.2020  2:43 PM"),
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150, "10.10.2020  2:43 PM"),
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150, "10.10.2020  2:43 PM"),
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150, "10.10.2020  2:43 PM"),
    ]

    return (
        <section className='History main-bg'>
            <Container>
                <div className="title">
                    <h6>Payment History</h6>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Trainer Name</th>
                            <th>Approx</th>
                            <th>Transaction Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.course}</td>
                                    <td>{data.author}</td>
                                    <td>{data.approx}</td>
                                    <td>${data.transaction}</td>
                                    <td>{data.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </section>
    )
}

export default History