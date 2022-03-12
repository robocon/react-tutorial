//import logo from './logo.svg';
import './App.css';
import Transection from "./components/Transection"
import FormComponent from './components/FormComponent';

const Title = () => <h1 style={{color:"blue",textDecoration:"underline"}}>โปรแกรมบัญชี รายรับ-รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

function App() {
	const design = {color:"red", textSize: "1.5em"}
	return (
		<div className='container'>
			<Title/>
			<h3 style={design}>ทดลองทำบัญชี</h3>
			<Description/>
			<FormComponent/>
			<Transection/>
		</div>
	)
}

export default App
