// Modal Component
import React from 'react'
import { Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

export default ({ modal: { item, display }, toggle }) => (
  <Modal className='modal-dialog modal-lg' isOpen={display} toggle={toggle}>
    <ModalHeader toggle={toggle}><u>Benchmark:</u> {item['Benchmark']}</ModalHeader>
    <ModalBody>
      <u>Suggested Performance Band:</u> <Badge color='secondary' className='mt-1'>{item["Grade Level"]}</Badge>
      <hr className='my-6' />
      <u>Description:</u> {item["Benchmark Detail"]}
      <hr className='my-6' />
      <u>Standard:</u> {item["Disciplinary Standard"]}
      <hr className='my-6' />
      <h6><u>Benchmark Crosswalk:</u></h6>
      <ListGroup flush>
        <ListGroupItem>
          NGSS (2013): {item["NGSS (2013)"]}
        </ListGroupItem>
        <ListGroupItem>
          CCSS MATH: {item["CCSS MATH"]}
        </ListGroupItem>
        <ListGroupItem>
          CCSS ELA: {item["CCSS ELA"]}
        </ListGroupItem>
      </ListGroup>
      <hr className='my-6' />
      <h6><u>Practices For {item["Grade Level"]}:</u></h6>
      <ListGroup flush>
        <ListGroupItem>
          System Thinking: {item["System Thinking"]}
        </ListGroupItem>
        <ListGroupItem>
          Creativity: {item["Creativity"]}
        </ListGroupItem>
        <ListGroupItem>
          Making + Doing: {item["Making and Doing"]}
        </ListGroupItem>
        <ListGroupItem>
          Critical Thinking: {item["Critical Thinking"]}
        </ListGroupItem>
        <ListGroupItem>
          Optimism: {item["Optimism"]}
        </ListGroupItem>
        <ListGroupItem>
          Collaboration: {item["Collaboration"]}
        </ListGroupItem>
        <ListGroupItem>
          Communication {item["Communication"]}
        </ListGroupItem>
        <ListGroupItem>
          Ethics: {item["Ethics"]}
        </ListGroupItem>
      </ListGroup>
      <hr />
      <Button style={{ marginTop: 5 }} onClick={() => toggle()} outline>Close</Button>
    </ModalBody>
  </Modal>
)