import React, { PropsWithChildren } from "react";
import { Data, Detail } from "./Container";
import "./ShowDataList.scss";

const ShowDataList = (props: PropsWithChildren<ShowDataListProps>) => {
  const { data } = props;
  return (
    <div className="show-data">
      <table className="data">
        <tbody>
          <tr>
            <th style={{ marginLeft: "2%" }}>STT</th>
            <th>Đơn vị mua hàng</th>
            <th>Danh mục vật tư</th>
            <th>Ngày PO/contract</th>
            <th>Tên NCC</th>
            <th style={{ marginLeft: "8%" }}>Số PO/contract</th>
            <th>Tổng giá trị Đặt hàng</th>
            <th>Tổng giá trị Nhận hàng</th>
          </tr>
        </tbody>
      </table>
      {data.map((item: Data) => {
        return (
          <table className="show-data-list" key={item.id}>
            <tbody>
              <tr className="cong-ty" key={item.id}>
                <td style={{ paddingRight: "60%" }}>{item.cong_ty}</td>
                <td style={{ paddingRight: "6%" }}>{item.tong_gia_tri_dat_hang}</td>
                <td>{item.tong_gia_tri_nhan_hang}</td>
              </tr>
              {item.detail.map((d: Detail) => {
                return (
                  <tr className="cong-ty-detail" key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.don_vi}</td>
                    <td>{d.danh_muc}</td>
                    <td>{d.ngayPO_contract}</td>
                    <td>{d.tenNCC}</td>
                    <td style={{ paddingRight: "8%" }}>{d.soPO_contract}</td>
                    <td style={{ paddingRight: "9%" }}>
                      {d.tong_gia_tri_dat_hang}
                    </td>
                    <td>{d.tong_gia_tri_nhan_hang}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

// props cua component
export interface ShowDataListProps {
  data: Data[];
  /* isMulti: boolean; */
}

/* ShowDataList.defaultProps = {
    isMulti: false,
} */

export default ShowDataList;
