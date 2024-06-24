import React, { useContext } from 'react'
import './Free.css'
import Card from './Card'
import MainContext from '../../../../context/context'

const Free = () => {

    const { exhibitions } = useContext(MainContext)

    return (
        <div className="free">
            <div className="custom-container free__cont">
                <div className="row free__title">
                    <div className="col-12 free__title__col">
                        <h2>Free exhibitions and displays</h2>
                    </div>
                </div>
                <div className="row free__cards">
                {
                        exhibitions.filter(item => item.category === 'Free').slice(0, 3).map(exhibition => {
                            return (
                                <Card exhibition={exhibition} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Free