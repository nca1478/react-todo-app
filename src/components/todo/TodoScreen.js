import React from 'react'
import { Form } from './Form'
import { List } from './List'
import { Navbar } from '../ui/Navbar'
import { Footer } from '../ui/Footer'

export const TodoScreen = () => {
  return (
    <>
      <Navbar />
      <div className="mb-auto">
        <div className="container my-2">
          <div className="row">
            <div className="col">
              <Form />
              <List />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
