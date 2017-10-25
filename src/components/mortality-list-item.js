import React from 'react'
const URL_BASE = 'http://www.sciencekids.co.nz/images/pictures/flags680/'
import Flag from './flag'
import { ColumnChart } from 'react-chartkick';
window.Chart = require('chart.js');
const xTitle = "Age"
const yTitle = "% mortalité"


const MortalityListItem = () => {
    return (
        <tr>
            <td><Flag country={"France"} className="flag_medium"/></td>
            <td className="col-md-6"><ColumnChart data={[[12,45],[45,85]]} xtitle={xTitle} ytitle={yTitle}/></td>
            <td className="col-md-6"><ColumnChart data={[[12,45],[45,85]]} xtitle={xTitle} ytitle={yTitle}/></td>
        </tr>
    )
}

export default MortalityListItem