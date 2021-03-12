// Form Component
import React from 'react';
import { Col, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default ({ setGrade, setBenchmark, setDiscipline }) => {
  return (
    <Row>
      <Col md='4'>
        <FormGroup row>
          <Label sm={3}>Search:</Label>
          <Col sm={8}>
            <Input onChange={(e) => setBenchmark(e.target.value)} placeholder="By Benchmark, Phrase or Keyword (EX: 1A)..." />
          </Col>
        </FormGroup>
      </Col>
      <Col md='4'>
        <FormGroup row>
          <Label sm={3}>STEL Standards:</Label>
          <Col sm={8}>
            <Input onChange={(e) => setDiscipline(e.target.value)} type="select">
              <option hidden>All Standards</option>
              <option>All Standards</option>
              <option value="STEL-1">1 - Nature and Characteristics</option>
              <option value="STEL-2">2 - Core Concepts</option>
              <option value="STEL-3">3 - Integration of Knowledge</option>
              <option value="STEL-4">4 - Impact of Technology</option>
              <option value="STEL-5">5 - Influence of Society</option>
              <option value="STEL-6">6 - History of Technology</option>
              <option value="STEL-7">7 - Design in TEE</option>
              <option value="STEL-8">8 - Apply, Maintain, Assess</option>
            </Input>
          </Col>
        </FormGroup>
      </Col>
      <Col md='4'>
        <FormGroup row>
          <Label sm={3}>Grade:</Label>
          <Col sm={8}>
            <Input onChange={(e) => setGrade(e.target.value)} type="select">
              <option hidden >All Grades</option>
              <option>All Grades</option>
              <option>Pre-K-2</option>
              <option>3-5</option>
              <option>6-8</option>
              <option>9-12</option>
            </Input>
          </Col>
        </FormGroup>
      </Col>
    </Row>
  );
}