import PropTypes from 'prop-types';

function Item(props){ 
    const {title, price} = props;
    const status = price<0 ? "expense" : "income" ;
    const symbol = price<0 ? "-":"+";
    return(
        <li className={status} >{title} <span>{symbol}{Math.abs(price)}</span></li>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Item;