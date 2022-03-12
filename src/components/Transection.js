import Item from "./Item"
import "./Transection.css"
import { v4 as uuidv4 } from 'uuid'

const Transection = () => { 
    const data = [
        {title: "ค่ารักษาพยาบาล", price: 2000},
        {title: "เงินเดือน", price: 35000},
        {title: "ค่าเช่า", price: 2800},
        {title: "ค่าเดินทาง", price: 2000},
        {title: "ประกันสังคม", price: 500}
    ]
	return (
		<ul className="item-list">
            {data.map((el)=>{
                return <Item {...el} key={uuidv4()}/>
            })}
		</ul>
	)
}

export default Transection