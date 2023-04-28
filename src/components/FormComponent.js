import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './FormComponent.css';

const FormComponent = (props)=>{ 

    console.log("Render FormCompoment");
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [formValid, setFormValid] = useState(false);
    const inputTitle = (event)=>{
        setTitle(event.target.value);
    }

    const inputPrice = (event)=>{
        setPrice(event.target.value);
    }

    const saveItem = (event)=>{
        event.preventDefault();
        const itemData = {
            id: uuidv4(),
            title: title,
            price: Number(price)
        };
        props.onAddItem(itemData);

        // reset to 0
        setTitle('');
        setPrice(0);
    }

    useEffect(()=>{

        // return เป็น bool อยู่แล้ว สามารถเอามาใส่ใน setFormValid ได้เลย
        const checkData = title.trim().length>0 && price!==0 ;
        setFormValid(checkData);

    },[title, price]);

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="+รายรับ -รายจ่าย" onChange={inputPrice} value={price}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;