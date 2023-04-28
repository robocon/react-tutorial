import './Transection.css';
import Item from './Item';

let Transection=(props)=>{ 
    const {items} = props;
	return(
		<ul className='item-list'>
			{
            items.map((el)=>{
                return <Item {...el} key={el.id}/>
            })
            }
		</ul>
	);
}

export default Transection;