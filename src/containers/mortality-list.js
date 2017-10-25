import React from 'react'
const URL_BASE = 'http://www.sciencekids.co.nz/images/pictures/flags680/'

import MortalityListItem from '../components/mortality-list-item'
import {getMortality} from "../actions/index";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class MortalityList extends React.Component{

    renderMortalities () {
        const {mortalities} = this.props
        return mortalities.map((data)=> {
            return <MortalityListItem key={data.country}/>
        })
    }

    render (){
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>pays</th>
                        <th className="col-md-6">hommes</th>
                        <th className="col-md-6">femmes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.renderMortalities()
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        mortalities: state.mortality
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return bindActionCreators({getCountries, getMortality}, dispatch)
// }

export default connect(mapStateToProps)(MortalityList)