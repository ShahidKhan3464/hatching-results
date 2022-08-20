import React from 'react'
import { Container, Table } from "react-bootstrap"
import TotalCart from '../totalCart/TotalCart'
import Proceed from '../proceed/Proceed'
import './style.css'

const Cart = () => {

    const createData = (course, author, approx, price,) => {
        return { course, author, approx, price };
    }

    const cartData = [
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150),
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150),
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150),
        createData("Advance English for Career Development", "Sandhya Mer", "16 hours", 150),
    ]

    return (
        <section className='Cart main-bg'>
            <Container>
                <div className="title">
                    <h6>Cart Items</h6>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Trainer Name</th>
                            <th>Approx</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.course}</td>
                                    <td>{data.author}</td>
                                    <td>{data.approx}</td>
                                    <td>${data.price}</td>
                                    <td>
                                        <button className='btn btn-danger'>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <TotalCart />
                <Proceed />
            </Container>
        </section>
    )
}

export default Cart