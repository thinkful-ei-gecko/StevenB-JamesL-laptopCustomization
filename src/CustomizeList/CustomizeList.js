import React from 'react';
import CustomizeListSelections from './CustomizeListSelections';

export default function CustomizeList(props) {
  return (
    <>
      <h2>Customize your Laptop</h2>
      <CustomizeListSelections 
        listOfFeatures={props.featureList} 
        appStateList={props.stateList} 
        changeSelected={ (feature, item) => props.changeState(feature, item) }
        CurrencyFormat= {props.Currency}  />
    </>
  )
}