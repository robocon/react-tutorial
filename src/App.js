import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect, useReducer } from 'react';
import Transection from './components/Transection';
import FormComponent from './components/FormComponent';
import DataContext from './data/DataContext';

import './App.css';
import ReportComponent from './components/ReportComponent';

const Header=()=><h1>บัญชีรายรับ - รายจ่าย</h1>;

function App() {  

	let initData = [ 
		{id:uuidv4(), title:"ค่าเช่าบ้าน", price:-3000},
        {id:uuidv4(), title:"ค่ารักษาพยาบาล", price:-1000},
        {id:uuidv4(), title:"เงินเดือน", price:50000},
        {id:uuidv4(), title:"ค่าเดินทาง", price:-800}
    ];

	const css = {color:"red",textAlign:"center"};
	const [items, setItems] = useState(initData);
	const [reportIncome, setReportIncome] = useState(0);
	const [reportExpense, setReportExpense] = useState(0);
	const onAddNewItem = (newItem)=>{
		// ข้อมูลที่ส่งมาจาก FormComponent.js
		setItems((prevItem)=>{ // เอาข้อมูลเดิมที่อยู่ใน initdata ในที่นี้ตั้งชื่อเป็น prevItem 
			// เอา newItem ที่เป็นข้อมูลที่ส่งมาจากฟอร์มมาต่อด้านหน้าข้อมูลเดิม
			return [newItem,...prevItem];
		})
	}

	useEffect(()=>{
		const amounts = items.map(items=>items.price);
		const income = amounts.filter(element => element > 0).reduce((sumIncome, element)=>sumIncome+=element, 0);
		const expense = amounts.filter(element => element < 0).reduce((sumIncome, element)=>sumIncome+=element*-1, 0);

		setReportIncome(income);
		setReportExpense(expense);
	},[items, reportIncome, reportExpense])

	// กำหนดให้ count เป็น 0 เมื่อเริ่มต้น
	const [count,setCount] = useState(0);

	// reducer เป็นเหมือน function ตัวหนึ่งที่ซึ่งบอกว่าภายใน reducer จะให้มีการทำงานยังไงบ้าง
	// state		ก็คือ state
	// action		หรือ dispatch เป็นตัวบอกว่าจะให้ take action ยังไงบ้าง
	const reducer = (state,action) => { 
		// ใช้ switch case หรือ if เป็นตัวแยก action
		switch (action.type) {
			case "ADD":
				return state+action.payload;
				
			case "SUB":
				return state-action.payload;
				
			case "CLEAR":
				return 0;
		}
	}

	// เรียกใช้ useReducer โดยโยน function reducer เข้าไป กับค่าของ count
	// dispatch		จะถูกกำหนดจาก event ที่เกิดขึ้นภายใน element ด้านล่าง
	// result		เป็นค่าที่ return ออกมาจาก reducer
	const [result, dispatch] = useReducer(reducer,count);
	return ( 

		<DataContext.Provider value={
			{
				income: reportIncome,
				expense: reportExpense
			}
		}>
			<div className='container'>
				<h1 style={css}>แอพบัญชีรายรับ - รายจ่าย</h1>
				<div><ReportComponent /></div>
				<div><FormComponent onAddItem={onAddNewItem} /></div>
				<div><Transection items={items}/></div>
			</div>
			<div align="center">
				<p>{result}</p>
				<button onClick={()=>dispatch({type:"ADD",payload:10})}>เพิ่ม</button>
				<button onClick={()=>dispatch({type:"SUB",payload:5})}>ลด</button>
				<button onClick={()=>dispatch({type:"CLEAR"})}>ล้าง</button>
			</div>
		</DataContext.Provider>
	);
}

export default App;
