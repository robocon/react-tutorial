import DataContext from "../data/DataContext";
import { useContext } from "react";
import './ReportComponent.css';
import {formatNumber} from "../Utilities";

const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext);
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>{formatNumber(income-expense)}</h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className="report plus">{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report minus">{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent;