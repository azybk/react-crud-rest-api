import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { useSelector } from "react-redux"

const CheckoutPage = () => {
    const { entities } = useSelector((state) => state.cart)

    const countTotal = (courses) => {
        const result = courses.reduce((prev, curr) => {
            return prev + parseInt(curr.price, 10)
        }, 0)

        return result
    }

    return (
        <Container style={{padding: "24px 0"}}>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <h1>Ringkasan Pembelian</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas animi itaque incidunt numquam 
                        odio placeat neque esse harum sunt consequatur! Ut iste quisquam odio vero nihil quae repellendus 
                        nostrum eveniet.
                    </p>

                    <p>Berikut barang barang anda</p>
                    <Table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Harga</th>
                            </tr>
                        </thead>

                        <tbody>
                            {entities.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>$ {item.price}</td>
                                    </tr>
                                )
                            }                                
                            )}                            
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>$ {countTotal(entities)}.00</td>
                            </tr>
                        </tfoot>
                    </Table>

                    <h5>Metode Pembayaran</h5>
                    <p>Silahkan transfer ke rek ABC an. ABCDE</p>
                    <Button variant={"success"}>Bayar</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CheckoutPage