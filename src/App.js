import logo from './logo.svg';
import './App.css';

const Title = () => <h1>โปรแกรมบัญชี รายรับ-รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
const Transection = () => {
	return (
		<ul>
			<li>ค่าเดินทาง <span>-200</span></li>
			<li>เงินเดือน <span>+20,000</span></li>
			<li>ค่าอาหาร <span>-500</span></li>
		</ul>
	)
}
function App() {
	return (
		<div>
			<Title/>
			<Description/>
			<Transection/>
		</div>
	)
}

export default App
