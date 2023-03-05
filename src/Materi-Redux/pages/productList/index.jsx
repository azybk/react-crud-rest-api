import { useEffect, useState } from "react"
import { httpService } from "../../utils/service"
import Card from "react-bootstrap/Card"
import { useDispatch, useSelector } from "react-redux"
import {getAll} from '../../store/course/action.js'

const ProductListPage = () => {    
    const {entities} = useSelector((state) => state.course);
    const dispatch = useDispatch();

    const fetchCourse = async () => {
        await dispatch(getAll());
    }
    
    useEffect(() => {
        fetchCourse();
    }, [])

    return (
        <div>
            <h3>R e d u x</h3>
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                {
                    // products.map((item, index) => {
                        entities.map((item, index) => {
                        return (
                            <Card style={{ width: '18rem' }} key={index}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>            
        </div>
    )
}

export default ProductListPage