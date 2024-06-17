import React, { useContext } from 'react'
import './AddShop.css'
import { Formik } from 'formik'
import MainContext from '../../../context/context'
import axios from 'axios'

const AddShop = () => {

    const { shop, setShop } = useContext(MainContext)

    return (
        <div className="container-fluid">
            <div className="add__sh">
                <Formik
                    initialValues={{ title: '', image: '', additionalImage: '', category: '', price: '', about: '', dimensions: '', weight: '' }}
                    validate={values => { }}
                    onSubmit={(values, { setSubmitting }) => {
                        axios.post('http://localhost:8080/shop', { ...values })
                            .then(res => {
                                setShop([...res.data])
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
                            <div className="formmmm">
                                <div className="formmmm__left">
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
                                        name="additionalImage"
                                        placeholder='Additional Image'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.additionalImage}
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
                                <div className="formmmm__right">
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder='Price'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date}
                                    />
                                    <input
                                        type="text"
                                        name="about"
                                        placeholder='About'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.about}
                                    />
                                    <input
                                        type='text'
                                        name="dimensions"
                                        placeholder='Dimensions'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.dimensions}
                                    />
                                    <input
                                        type="number"
                                        name="weight"
                                        placeholder='Weight'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.weight}
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

export default AddShop