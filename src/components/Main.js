// Main Component
import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import { Row } from 'reactstrap'
import { v4 as uuid } from 'uuid'

// Data Import
import Data from './science'

// Imported Components
import Navbar from './Navbar'
import Card from './Card'
import Modal from './Modal'
import Contact from './ContactModal'
import Form from './Form'

const Wrapper = Styled.div`
  padding-top: 50px;
  @media(min-width: 1200px) {
    width: 85%;
    clear: both;
    margin: 0 auto;
  }
  @media(max-width: 1200px) {
    width: 90%;
    clear: both;
    margin: 0 auto;
  }
`

const Main = () => {
  const [grade, setGrade] = useState('All Grades')
  const [benchmark, setBenchmark] = useState('')
  const [discipline, setDiscipline] = useState('All Standards')
  const [data, setData] = useState(Data)
  const [modal, setModal] = useState({ display: false, item: {} })
  const [contact, setContact] = useState({ display: false })

  const toggle = () => setModal({ display: false, item: {} })
  const contactToggle = () => setContact({ display: false })


  useEffect(() => {
    const results = Data
      .filter(item => grade === 'All Grades' ? true : item["Grade Level"] === grade)
      .filter(item => benchmark === '' ? true : (
        item["Benchmark"].toLocaleLowerCase().includes(benchmark.toLocaleLowerCase()) ||
        item["Benchmark Detail"].toLocaleLowerCase().includes(benchmark.toLocaleLowerCase()) ||
        item["Benchmark Id"].toLocaleLowerCase().includes(benchmark.toLocaleLowerCase())
      ))
      .filter(item => discipline === 'All Standards' ? true : item["Benchmark Id"].toLocaleLowerCase().includes(discipline.replace('-', ' ').toLocaleLowerCase()))

    setData(results)
  }, [grade, benchmark, discipline])

  return (
    <main>
      <Navbar setContact={setContact} />
      <Wrapper>
        <Form setGrade={setGrade} setBenchmark={setBenchmark} setDiscipline={setDiscipline} />
        <Row>
          {data.map(item => <Card key={uuid()} item={item} setModal={setModal} toggle={toggle} />)}
        </Row>
        <Modal modal={modal} toggle={toggle} />
        <Contact modal={contact} toggle={contactToggle} />
      </Wrapper>
    </main>
  )
}

export default Main
