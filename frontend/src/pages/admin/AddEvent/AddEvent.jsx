import React, { useContext } from 'react'
import './AddEvent.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddEvent = () => {

    const { events, setEvents } = useContext(MainContext)

    return (
        <div className="container-fluid">
            <div className="add__ev">
                <Formik
                    initialValues={{ title: '', image: '', category: '', type: '', date: '', time: '', age: '', miniDesc: '', desc: '', additionalDesc: '', place: '', price: '' }}
                    validate={values => { }}
                    onSubmit={(values, { setSubmitting }) => {
                        axios.post('http://localhost:8080/events', { ...values })
                            .then(res => {
                                setEvents([...res.data])
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
                            <div className="formm">
                                <div className="formm__left">
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
                                    <input
                                        type="text"
                                        name="type"
                                        placeholder='Type'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.type}
                                    />
                                    <input
                                        type="text"
                                        name="date"
                                        placeholder='Date'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date}
                                    />
                                    <input
                                        type="text"
                                        name="time"
                                        placeholder='Time'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.time}
                                    />
                                    <input
                                        type="text"
                                        name="place"
                                        placeholder='Place'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.place}
                                    />
                                    <input
                                        type="text"
                                        name="age"
                                        placeholder='Age'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.age}
                                    />
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder='Ticket price'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                    />
                                    <button type="submit" onsubmit={onsubmit}>
                                        Submit
                                    </button>
                                </div>
                                <div className="formm__right">
                                    
                                    <textarea
                                        name="miniDesc"
                                        placeholder='Mini description'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.miniDesc}
                                    />
                                    <textarea
                                        name="desc"
                                        placeholder='Description'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.desc}
                                    />
                                    <textarea
                                        name="additionalDesc"
                                        placeholder='Additional description'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.additionalDesc}
                                    />
                                    
                                    
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AddEvent