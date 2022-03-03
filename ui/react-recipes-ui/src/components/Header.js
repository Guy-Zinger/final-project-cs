import PropTypes from 'prop-types';
import Button from "./Button"

const Header = ({title}) => {
 
    const onClick = (e) => {
        console.log(e)
    }
    return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text='sign up' color='green' onClick={onClick}/>
    </header>
  )
}

//Use props

// Header.defaultProps = {
//     title: 'Default'
// }

// Header.propTypes ={
// title: PropTypes.string
// }

export default Header