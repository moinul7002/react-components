import PropTypes from 'prop-types'

const Header = ({ title }) => {
   
    return (
        <heaader>
            <h1>
                {title}
            </h1>
        </heaader>
    )
}

Header.defaultProps = {
    title: 'Hello',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
