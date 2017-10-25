import React from 'react'
const URL_BASE = 'http://www.sciencekids.co.nz/images/pictures/flags680/'

import MortalityListItem from '../components/mortality-list-item'


class MortalityList extends React.Component{
    render (){
        return (
            <div>
                <MortalityListItem/>
            </div>
        )
    }


}

export default MortalityList