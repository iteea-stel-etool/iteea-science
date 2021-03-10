// Form Component
import React from 'react';
import { Col, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default ({ setGrade, setBenchmark, setDiscipline }) => {
  return (
    <Row>
      <Col md='4'>
        <FormGroup row>
          <Label sm={3}>Benchmark:</Label>
          <Col sm={8}>
            <Input onChange={(e) => setBenchmark(e.target.value)} placeholder="Search By Benchmark, Phrase or Keyword (EX: Natural)..." />
          </Col>
        </FormGroup>
      </Col>
      <Col md='4'>
        <FormGroup row>
          <Label sm={3}>Standards:</Label>
          <Col sm={8}>
            <Input onChange={(e) => setDiscipline(e.target.value)} type="select">
              <option hidden>Standards</option>
              <option>All Standards</option>
              <option>STEL-1</option>
              <option>STEL-2</option>
              <option>STEL-3</option>
              <option>STEL-4</option>
              <option>STEL-5</option>
              <option>STEL-6</option>
              <option>STEL-7</option>
              <option>STEL-8</option>
            </Input>
          </Col>
        </FormGroup>
      </Col>
      <Col md='4'>
        <FormGroup row>
          <Label sm={3}>Grade:</Label>
          <Col sm={8}>
            <Input onChange={(e) => setGrade(e.target.value)} type="select">
              <option hidden >Choose Grade</option>
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