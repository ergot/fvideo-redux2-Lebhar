import React from 'react'
const URL_BASE = 'http://www.sciencekids.co.nz/images/pictures/flags680/'
import Flag from './flag'
import { ColumnChart } from 'react-chartkick';
window.Chart = require('chart.js');
const xTitle = "Age"
const yTitle = "% mortalité"


const MortalityListItem = () => {
    return (
        <div>
            <Flag country={"France"} className="flag_medium"/>
            <ColumnChart data={[[12,45],[45,85]]} xtitle={xTitle} ytitle={yTitle}/>
        </div>
    )
}

export default MortalityListItem