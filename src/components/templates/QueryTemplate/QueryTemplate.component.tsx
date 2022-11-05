import React from 'react'
import Container from '../../atoms/Container'
//import FilterBox from '../../molecules/FilterBox'

type QueryTemplateComponentInterface = {
  children?: JSX.Element | JSX.Element[]
}

const QueryTemplateComponent: React.FC<QueryTemplateComponentInterface> = ({ children }) => (
  <Container>{children}</Container>
)

export default QueryTemplateComponent