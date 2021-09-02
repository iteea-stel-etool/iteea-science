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

const MainCard = ({ item, setModal }) => (
  <Col md='4' className='mb-4'>
    <Card>
      <CardBody>
        <CardTitle><u>Domain:</u> {item["DCI Code"] + " - " + item["Domain"]}</CardTitle>
        <hr className='my-2' />
        <CardText><u>Grade:</u> <Badge color='secondary'>{item["Grade Band"]}</Badge></CardText>
        <hr className='my-2' />
        <CardText><u>Description:</u> {item["Topic"]}</CardText>
        <hr className='my-2' />
        <CardText>{item["Disciplinary Core Ideas (DCI)"]}</CardText>
        <Button onClick={() => setModal({ display: true, item: item })} color='secondary' size='sm' outline>View</Button>
      </CardBody>
    </Card>
  </Col>
)

export default MainCard
