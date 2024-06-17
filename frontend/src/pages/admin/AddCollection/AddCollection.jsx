import React, { useContext } from 'react'
import './AddCollection.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddCollection = () => {

  const { collections, setCollections } = useContext(MainContext)

  return (
    <div className="container-fluid">
      <div className="add__co">
        <Formik
          initialValues={{ title: '', image: '', category: '' }}
          validate={values => { }}
          onSubmit={(values, { setSubmitting }) => {
            axios.post('http://localhost:8080/collections', { ...values })
              .then(res => {
                setCollections([...res.data])
                console.log(res.data)
              })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="formmm">
                <input
                  type="text"
                  name="title"
                  placeholder='Title'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <input
                  type="text"
                  name="image"
                  placeholder='Image'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image}
                />
                <input
                  type="text"
                  name="category"
                  placeholder='Category'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                />
                <button type="submit" onsubmit={onsubmit}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddCollection