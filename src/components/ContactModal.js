import React from 'react';
import { Badge, Modal, ModalBody, ModalHeader } from 'reactstrap';

export default ({ modal: { display }, toggle }) => {
  return (
    <div>
      <Modal isOpen={display} toggle={toggle}>
        <ModalHeader toggle={toggle}>Contact Information</ModalHeader>
        <ModalBody>
          <u>ITEEA:</u> <a href="https://www.iteea.org/">Website</a>
          <hr className='my-6' />
          <a href="https://www.iteea.org/stel.aspx">STEL Information</a>
          <hr className='my-6' />
          <u>Project Lead:</u> <span>Matthew Swarts (<a href="https://www.linkedin.com/in/matthew-swarts-b517898/">Linkedin</a>)</span>
          <hr className='my-6' />
          <u>Project Lead:</u> <span>Chuchun Tsai (<a href="https://www.linkedin.com/in/chuchuntsai/">Linkedin</a>)</span>
          <hr className='my-6' />
          <u>Lead Developer:</u> <span>Robbie McClellan (<a href="https://www.linkedin.com/in/robbie-mcclellan-24ba19a2/">Linkedin</a>)</span>
          <hr className="my-6" />
          <div>Copyright (c) 2021 StandardsForTEE</div>
        </ModalBody>
      </Modal>
    </div>
  )
}
