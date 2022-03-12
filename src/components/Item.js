import PropTypes from 'prop-types';
const Item = (props) => {
    const{title, price} = props
    return(
        <li>{title}<span>{price}</span></li>
    )
}

Item.propTypes={
    title:PropTypes.string,
    price:PropTypes.number
}

export default Item