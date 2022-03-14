import "./FormComponent.css"

const FormComponent = () => { 
    const inputTitle = (event)=>{
        console.log(event.target.value)
    }

    const inputPrice = (event)=>{
        console.log(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault()
        
        console.log("บันทีกข้อมูลเรียบร้อย")
    }

    return(
        <div>
            <form method="POST" onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" name="title" placeholder="ระบุชื่อรายการ" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" name="price" placeholder="(+รายรับ, -รายจ่าย)" onChange={inputPrice}/>
                </div>
                <div>
                    <button type="submit" className="btn">บันทึก</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent