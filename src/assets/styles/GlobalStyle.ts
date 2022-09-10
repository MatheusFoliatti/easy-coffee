import {createGlobalStyle} from 'styled-components'
import coffeeBean from '../images/coffee-beans.svg'

const GlobalStyle = createGlobalStyle`
*{
background: url(coffeeBean);
background-color: #f2dd9e;
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
    background-image: url(${coffeeBean});
    background-size: 800px;
    height: 100vh;
}
`



export default GlobalStyle