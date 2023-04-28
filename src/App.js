import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Transection from './components/Transection';
import FormComponent from './components/FormComponent';
import './App.css';

const Header=()=><h1>บัญชีรายรับ - รายจ่าย</h1>;

function App() {  

	let initData = [
        // {id:uuidv4(), title:"ค่ารักษาพยาบาล", price:-2000},
        // {id:uuidv4(), title:"เงินเดือน", price:30000},
        // {id:uuidv4(), title:"ค่าเดินทาง", price:-800}
    ];

	const css = {color:"red",textAlign:"center"};

	const [items, setItems] = useState(initData);
	const onAddNewItem = (newItem)=>{
		// ข้อมูลที่ส่งมาจากฟอร์ม
		setItems((prevItem)=>{
			return [newItem,...prevItem];
		})
	}

	return (
	<div className='container'>
		<div style={css}><Header /></div>
		<div><FormComponent onAddItem={onAddNewItem} /></div>
		<div><Transection items={items}/></div>
	</div>
	);
}

export default App;
