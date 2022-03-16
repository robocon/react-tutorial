import { useState } from "react"
import "./FormComponent.css"
const FormComponent = () => { 
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const inputTitle = (event)=>{
        setTitle(event.target.value)//ตอนพิมพ์เก็บค่าไว้ใน state
    }
    const inputPrice = (event)=>{
        setPrice(event.target.value)
    }
    const saveItem = (event) =>{
        event.preventDefault()
        const itemData = {
            title: title,
            price: Number(price)
        }
        console.log("บันทีกข้อมูลเรียบร้อย")
        setTitle('')//clearค่าใน state
        setPrice(0)
    }
    return(
        <div>
            <form method="POST" onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" name="title" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" name="price" placeholder="(+รายรับ, -รายจ่าย)" onChange={inputPrice} value={price}/>
                </div>
                <div>
                    <button type="submit" className="btn">บันทึก</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent