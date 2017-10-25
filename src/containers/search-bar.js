import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCountries} from "../actions/index";

class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {selectedCountry : this.props.defaultCountry}
    }


    componentWillMount () {
        this.props.getCountries()
    }

    search(e) {
        this.setState({selectedCountry:target.value})
    }

    renderSelectBox (){
        const {countries} = this.props
        if(countries) {
            return (
                <select className="col-lg-12 input-group" value={this.state.selectedCountry} onChange={(e)=> { this.search(e)}}>
                    {
                        countries.map((country)=> {
                            return <option value={country} key={country}>{country}</option>
                        })
                    }
                </select>
            )
        }else{
            return <div>no country</div>
        }
    }

    render() {
        return (
            <div className="search_bar">
                {this.renderSelectBox()}
            </div>
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