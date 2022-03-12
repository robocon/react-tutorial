const Item = () => {
    const name = "ซื้อของ"
    const price = 5000
    return(
        <div>
            <li>{name} <span>{price}</span></li>
            <li>เงินเดือน <span>+20,000</span></li>
            <li>ค่าอาหาร <span>-500</span></li>
        </div>
    )
}
export default Item