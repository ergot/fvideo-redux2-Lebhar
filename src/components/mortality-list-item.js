import React from 'react'
const URL_BASE = 'http://www.sciencekids.co.nz/images/pictures/flags680/'
import Flag from './flag'
import { ColumnChart } from 'react-chartkick';
window.Chart = require('chart.js');
const xTitle = "Age"
const yTitle = "% mortalité"


const MortalityListItem = ({mortality}) => {

    const formatedDataMale = formatMortalityData(mortality.male)
    const formatedDataFemale = formatMortalityData(mortality.female)

    function formatMortalityData(mortality) {
        const filteredData = mortality.filter((data)=>{
            if(data.age >= 101){
                return false
            } else {
                return data
            }
        })

        const array = filteredData.map((data)=> {

                return [Number((data.age).toFixed(0)), Number((data.mortality_percent).toFixed(0))]
        })

    return array

    }

    return (
        <tr>
            <td><Flag country={mortality.country} className="flag_medium"/></td>
            <td className="col-md-6"><ColumnChart data={formatedDataMale} xtitle={xTitle} ytitle={yTitle} max={30}/></td>
            <td className="col-md-6"><ColumnChart data={formatedDataFemale} xtitle={xTitle} ytitle={yTitle} max={30}/></td>
        </tr>
    )
}

export default MortalityListItem