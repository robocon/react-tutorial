import Item from './Item';
import DataContext from '../data/DataContext';
import './Transection.css';

let Transection=(props)=>{ 
    const {items} = props;
	return(
		<div>
            <ul className='item-list'>
			{
            items.map((el)=>{
                return <Item {...el} key={el.id}/>
            })
            }
		</ul>
        <DataContext.Consumer>
            {value=><p>{value}</p>}
        </DataContext.Consumer>
        </div>
	);
}

export default Transection;