import { Form, Button, Card, ListGroup, Container, Col, Row } from 'react-bootstrap'
import {useRef, useState} from 'react'
import axios from 'axios'
export const Ipform = (props) => {
    const ipRef = useRef()
    const [info, setInfo] = useState([])
  const getInformations = async (ip) => {
    const url = `http://ip-api.com/json/${ip}`
    await axios.get(url).then(res => {
        setInfo([res.data])
    })
    console.log('info', info)
  }
    return (
        <Container>
                <h2 className='text-center' style={{marginTop: 50}}>IP LOOKUP</h2>

            <Row className='text-center' style={{marginTop: 40}}>
                <Col sm={{ span: 4, offset: 4 }}>
  <Form.Group className="mb-3" controlId="ip">
    <Form.Control type="text" placeholder="IP Address" ref={ipRef}/>
  </Form.Group>
  <Button variant="danger" onClick={() => getInformations(ipRef.current.value)}>
    Lookup
  </Button>
                </Col>
            </Row>
            {info.length > 0 && (
                <Row className="text-center" style={{marginTop: 50}}>
                    <Col sm={{span: 4, offset: 4}}>
                    <Card border="danger" style={{ width: '100%' }}>
                <Card.Header>{info.map((i) => i.query)}</Card.Header>
                <Card.Body>
                  <Card.Title>Informations</Card.Title>
                  <ListGroup>
  <ListGroup.Item>{`Country: ${info.map((i) => i.country)}`}</ListGroup.Item>
  <ListGroup.Item>{`City: ${info.map((i) => i.city)}`}</ListGroup.Item>
  <ListGroup.Item>{`ZIP: ${info.map((i) => i.zip)}`}</ListGroup.Item>
  <ListGroup.Item>{`Region: ${info.map((i) => i.regionName)}`}</ListGroup.Item>
  <ListGroup.Item>{`ISP: ${info.map((i) => i.isp)}`}</ListGroup.Item>
  <ListGroup.Item>{`Longitude: ${info.map((i) => i.lon)}`}</ListGroup.Item>
  <ListGroup.Item>{`Latitude: ${info.map((i) => i.lat)}`}</ListGroup.Item>
</ListGroup>
                </Card.Body>
              </Card>
                    </Col>
                </Row>
                
            )}
        </Container>
    )
}