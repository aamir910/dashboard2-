import React from 'react'
import './Card.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
const Card = (props) => {
    const [expanded, setExpanded] = useState(false);


    return (

        <AnimateSharedLayout>

            {
                expanded ?
                    "comning soon "
                    :
                    <CompactCard param={props} />
            }

        </AnimateSharedLayout>

    )



}


function CompactCard({ param }) {
    const Png = param.png;
    return (
        <div className="CompactCard"
        style={{
            background : param.color.backGround , 
            boxShadow : param.color.boxShadow  
        }

        }
        >
            <div className="radialBar">
                <CircularProgressbar value={param.barValue} text= {`${param.barValue}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png /> 
                <span>$ {param.value}</span>
                <span>last 24 hour  </span>
            </div>
        </div>
    )

}

export default Card
