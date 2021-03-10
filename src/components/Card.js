// Card Component
import React from 'react'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col
} from 'reactstrap'

export default ({ item, setModal }) => (
  <Col md='4' className='mb-4'>
    <Card>
      <CardBody>
        <CardTitle><u>Benchmark:</u> {item["Benchmark"]} : ({item["Benchmark Id"].split(" ")[1]})</CardTitle>
        <hr className='my-2' />
        <CardText><u>Grade:</u> <Badge color='secondary'>{item["Grade Level"]}</Badge></CardText>
        <hr className='my-2' />
        <CardText><u>Description:</u> {item["Benchmark Detail"]}</CardText>
        <hr className='my-2' />
        <CardText>{item["Disciplinary Standard"]}</CardText>
        <Button onClick={() => setModal({ display: true, item: item })} color='secondary' size='sm' outline>View</Button>
      </CardBody>
    </Card>
  </Col>
)
