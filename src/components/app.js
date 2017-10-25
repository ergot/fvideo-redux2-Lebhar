import React from 'react';
import SearchBar from '../containers/search-bar'
import MortalityList from './mortality-list'

const DEFAULT_COUNTRY="France"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar defaultCountry={DEFAULT_COUNTRY}/>
        <MortalityList/>
      </div>
    );
  }
}
