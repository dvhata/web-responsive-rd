import React, { PropsWithChildren } from "react";
import { Data, Detail } from "./Container";
import "./ShowDataList.scss";

const ShowDataList = (props: PropsWithChildren<ShowDataListProps>) => {
  const { data } = props;
  return (
    <div className="show-data">
      <table className="data">
        <thead>
          <tr>
            <th style={{paddingLeft: "20px"}}>STT</th>
            <th>Đơn vị mua hàng</th>
            <th>Danh mục vật tư</th>
            <th>Ngày PO/contract</th>
            <th>Tên NCC</th>
            <th style={{ marginLeft: "8%" }}>Số PO/contract</th>
            <th>Tổng giá trị Đặt hàng</th>
            <th>Tổng giá trị Nhận hàng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: Data) => {
            return (
              <>
                <tr className="cong-ty" key={item.id}>
                  <td colSpan={1} style={{ paddingRight: "60.5%" }}>
                    {item.company}
                  </td>
                  <td colSpan={6} style={{ paddingRight: "7%" }}>
                    {item.orderTotal}
                  </td>
                  <td>{item.receiveTotal}</td>
                </tr>
                {item.detail.map((d: Detail) => {
                  return (
                    <tr className="cong-ty-detail" key={d.id}>
                      <td>{d.id}</td>
                      <td>{d.office}</td>
                      <td>{d.category}</td>
                      <td>{d.POdateContract}</td>
                      <td>{d.provider}</td>
                      <td style={{ paddingRight: "8%" }}>
                        {d.POnumberContract}
                      </td>
                      <td style={{ paddingRight: "9%" }}>{d.orderTotal}</td>
                      <td>{d.receiveTotal}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
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
