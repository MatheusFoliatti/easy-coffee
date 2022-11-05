import React from 'react'
import Container from '../../atoms/Container'
//import FilterBox from '../../molecules/FilterBox'

type QueryTemplateComponentInterface = {
  listingcomponent?: JSX.Element | JSX.Element[]
  // filtercomponent?: string
}

const QueryTemplateComponent: 
React.FC<QueryTemplateComponentInterface> = ({ listingcomponent } //, filtercomponent 
) => (
  //<FilterBox>{filtercomponent}</FilterBox>
  <Container>{listingcomponent}</Container> 
)

export default QueryTemplateComponent