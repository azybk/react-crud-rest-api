import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../../store/course/action"

const ProductListPage = () => {
    const { entities, loading } = useSelector((state) => state.course)
    const dispatch = useDispatch()

    const fetchCourses = async() => {
        await dispatch(getAll())
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    return (
        <div>
            <h3>Redux</h3>
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
                {
                    loading ? "sedang memuat data, mohon ditunggu..." : 
                    entities.length === 0 ? "belum ada data" :
                    entities.map((item, index) => {
                        return (
                            <Card style={{ width: '18rem' }} key={index}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                    <p>${item.price}</p>
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