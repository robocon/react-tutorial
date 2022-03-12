const FormComponent = () => {
    return(
        <div>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" name="title" placeholder="ระบุชื่อรายการ"/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="text" name="price" placeholder="ระบุจำนวนเงิน"/>
                </div>
                <div>
                    <button type="submit">บันทึก</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent