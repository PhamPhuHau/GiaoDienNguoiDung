import ClickSP from "./ClickSP";
import GiaSP from "./GiaSP";
import HinhSP from "./HinhSP";
import TenSP from "./TenSP";
import { NavLink } from "react-router-dom";

function Sanpham(item) {
    return (
        
        <>
            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                    <div className="product-img">
                    <NavLink to={`/ChiTiet/${item.data.id}`} className="Nav-Link active">
                        <HinhSP anh = {item.data?.hinh_anh[0]?.url}/>
                       
                        <ClickSP />
                    </NavLink>
                    </div>
                    <div className="product-content">
                        <TenSP ten = { item.data.ten}/>
                        <GiaSP gia = { item.data.gia_ban }/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sanpham;