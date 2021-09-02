// Modal Component
import React from 'react'
import { Badge, Button, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem } from 'reactstrap'
import { v4 as uuid } from 'uuid'

const ModalCard =  ({ modal: { item, display }, toggle }) => {
  let groups

  const practices = item["practices"]
  const concepts = item["concepts"]

  if(item["practices"]) {
    groups = (
      <>
      <hr className='my-6' />
        <h6><u>Science and Engineering Practices:</u></h6>
        <ListGroup flush>
          {practices.map(practice => (
            <ListGroupItem key={uuid()}>
              <u>{practice["title"]}:</u> {practice["info"]}
            </ListGroupItem>  
          ))}
        </ListGroup>
        <hr className='my-6' />
        <h6><u>Crosscutting Concepts</u></h6>
        <ListGroup flush>
          {concepts.map(practice => (
            <ListGroupItem key={uuid()}>
              <u>{practice["title"]}:</u> {practice["info"]}
            </ListGroupItem>  
          ))}
        </ListGroup>
      </>
    )
  }

  return (
    <Modal className='modal-dialog modal-lg' isOpen={display} toggle={toggle}>
      <ModalHeader toggle={toggle}><u>Domain:</u> {item['Domain']} - {item["DCI Code"]}</ModalHeader>
      <ModalBody>
        <u>Grade:</u> <Badge color='secondary' className='mt-1'>{item["Grade Band"]}</Badge>
        <hr className='my-6' />
        <u>Disciplinary Core Ideas (DCI):</u> {item["Disciplinary Core Ideas (DCI)"]}
        <hr className='my-6' />
        <u>Title:</u> {item["Title"]}
        <hr className='my-6' />
        <h6><u>Products:</u></h6>
        <ListGroup flush>
          <ListGroupItem>
            Product 1: {item["Product 1:"]}
          </ListGroupItem>
          <ListGroupItem>
            Product 2: {item["Product 2:"]}
          </ListGroupItem>
          <ListGroupItem>
            Product 3: {item["Product 3:"]}
          </ListGroupItem>
        </ListGroup>
        {groups}
        
        <hr />
        <Button style={{ marginTop: 5 }} onClick={() => toggle()} outline>Close</Button>
      </ModalBody>
    </Modal>
  )
}

export default ModalCard