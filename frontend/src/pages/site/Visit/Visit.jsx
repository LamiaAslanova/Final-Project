import React from 'react'
import './Visit.css'
import VisitHero from '../../../components/site/VisitComponents/Hero/Hero'
import VisitBody from '../../../components/site/VisitComponents/Body/Body'
import Map from '../../../components/site/VisitComponents/Map/Map'
import SignUp from '../../../components/site/HomeComponents/SignUp/SignUp'

const Visit = () => {
    return (
        <main>
            <VisitHero />
            <VisitBody />
            <SignUp/>
            <Map/>
        </main>
    )
}

export default Visit