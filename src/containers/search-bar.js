import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCountries} from "../actions/index";

class SearchBar extends React.Component {
    componentWillMount () {
        this.props.getCountries()
    }

    render() {
        return (
            <div></div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({getCountries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)