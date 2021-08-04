import "./Container.scss";
import ShowDataList from "./ShowDataList";

export interface Detail {
  id: number;
  office: string;
  category: string;
  POdateContract: string;
  provider: string;
  POnumberContract: string;
  orderTotal: number;
  receiveTotal: number;
}
export interface Data {
  id: number;
  company: string;
  orderTotal: number;
  receiveTotal: number;
  detail: Detail[];
}

const DATA_LIST: Data[] = [
  {
    id: 0,
    company: "Công ty xây dựng số 1",
    orderTotal: 1500000000,
    receiveTotal: 1200000000,
    detail: [
      {
        id: 1,
        office: "Công ty xây dựng số 1",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
      {
        id: 2,
        office: "Công ty xây dựng số 1",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
      {
        id: 3,
        office: "Công ty xây dựng số 1",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
    ],
  },
  {
    id: 2,
    company: "Công ty xây dựng số 2",
    orderTotal: 1500000000,
    receiveTotal: 1200000000,
    detail: [
      {
        id: 6,
        office: "Công ty xây dựng số 2",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
      {
        id: 7,
        office: "Công ty xây dựng số 2",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
      {
        id: 8,
        office: "Công ty xây dựng số 2",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
      {
        id: 9,
        office: "Công ty xây dựng số 2",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
      {
        id: 10,
        office: "Công ty xây dựng số 2",
        category: "Thiết bị văn phòng",
        POdateContract: "10/04/2021",
        provider: "Nhà cung cấp số 001",
        POnumberContract: "PO/2021/002",
        orderTotal: 250000000,
        receiveTotal: 150000000,
      },
    ],
  },
];

const Container = () => {
  return (
    <div className="container-block">
      <div className="personal-display">
        <img src="https://img.icons8.com/small/16/000000/appointment-reminders--v1.png" />
        <img src="https://img.icons8.com/ios/30/000000/user-male-circle.png" />
        <div>
          <h4>Vu Tuan</h4>
          <span style={{ fontSize: "10px" }}>Admin</span>
        </div>
      </div>
      <div className="content">
        <span>Báo cáo mua hàng tổng hợp</span>
        <div className="action">
          <div className="search">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzQ1ODVkNiI+PHBhdGggZD0iTTcyLjI0LDEwLjMyYy0zMi4zMzA2MiwwIC01OC40OCwyNi4xNDkzOCAtNTguNDgsNTguNDhjMCwzMi4zMzA2MyAyNi4xNDkzOCw1OC40OCA1OC40OCw1OC40OGMxMS41NDI4MSwwIDIyLjIyNTYzLC0zLjM4NjI1IDMxLjI4MjUsLTkuMTM3NWw0Mi4yNDc1LDQyLjI0NzVsMTQuNjIsLTE0LjYybC00MS43MSwtNDEuNjAyNWM3LjQ5ODEzLC05LjgzNjI1IDEyLjA0LC0yMi4wMjQwNiAxMi4wNCwtMzUuMzY3NWMwLC0zMi4zMzA2MiAtMjYuMTQ5MzcsLTU4LjQ4IC01OC40OCwtNTguNDh6TTcyLjI0LDI0LjA4YzI0Ljc2NTMxLDAgNDQuNzIsMTkuOTU0NjkgNDQuNzIsNDQuNzJjMCwyNC43NjUzMSAtMTkuOTU0NjksNDQuNzIgLTQ0LjcyLDQ0LjcyYy0yNC43NjUzMSwwIC00NC43MiwtMTkuOTU0NjkgLTQ0LjcyLC00NC43MmMwLC0yNC43NjUzMSAxOS45NTQ2OSwtNDQuNzIgNDQuNzIsLTQ0LjcyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
            />
            <input type="text" placeholder="Nhập nội dung tìm kiếm ..." />
          </div>
          <button style={{ backgroundColor: "#3f8cff" }}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABmJLR0QA/wD/AP+gvaeTAAAA0klEQVRIie3TMQrCMBTG8S9iJwcHBy/i5DE8hFdw9SDuQlG6OAjewAM4Org5lQ4OUujfJaDE1ia1goJvS3j5vcdLIv1qGHcDGErqNbAuxpjzywwgoVkkrtWtqHGQNA/oujS3DC8k5ZLSADy352rxvaSJpF0ALknL2gwgAuLAecdA5N0GMAWuNWgOzICnV+dTYAQcK+ATMA5GnQJ9YO3AG2DwFvxQwACZhTPfMXR8kowx6P7UCrtuB28af7w1fNt6F0AKrIK+eQC++Ahs8Y/ez3fFDdY/FoUau+ZaAAAAAElFTkSuQmCC" />
            Nâng Cao
          </button>
          <button style={{ backgroundColor: "#ff8594" }}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABmJLR0QA/wD/AP+gvaeTAAAAlElEQVRIie2USw6DMAxE2eeUtFyE36K9Fr3X68ZRAkLKJHXFBm8sReM3Vmy56+64PIAA9JU1DyCoQoBJBM+mf6qdjFbwKugmRVdt0AwuGfwMPjF4u4Izgzi0zfLsAs4MInjzBsfOP5YXL/Duj48zcAOfvLcZlLai2UBdt2oD0m2R1g1YTT8o4oB6hFLNgHIV7/h7fAHPEyYcqtncRAAAAABJRU5ErkJggg==" />
            Bỏ Lọc
          </button>
          <button style={{ backgroundColor: "#3f8cff" }}>
            Xuất excel chi tiết
          </button>
          <button style={{ backgroundColor: "white", color: "#3f8cff" }}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIie2Rvy+rcRSHn9O+jYG/oIPJPyCG+hFatg4GyZXIXYiExUb8WG7SgYG2i0SCRSJ3ELYrMUn0JdLBJhYjFtzkJoJLmrYfy4u3WlRi7LO8eT/nnCcn5ws1anw70ZTi0ZSy0ZTi1c4EqhSPAn+AVmC7K6npaubso2J8UXX/cywDQxXKG7kAw9lxe3hv/t3NO+YVvs/h+sR5xDqQ9/4HQkX2OuYV/pK8K61mxyFrEPGifybi7qQNUqQHuAYwiDhBjrqTilTylMljSQ2YOEQ0etFpoEB7ZtJ2AdwpOygEaQNOvHq4aLixtMpO93Lz/k0F/14wJ/H6WGInVODn7ozdlC2xpAY9so7o88WrdsdYJmH5ks2vz0n6xBLMuvf0VhIDZMbszr3lh2AWkBePqoGF5x7H19/kfR/NGHEn7HclaQkJK+7Dr2hax4g1oN7nKbn5FXAmoz1TjdiHO2FbMjqBM4zLsoZYQk7LikJfkb6lZUWhWELO5501arzlCcuahPfAovkGAAAAAElFTkSuQmCC" />
            Tác vụ
          </button>
        </div>
        <table className="sort">
          <tbody>
            <tr>
              <th>Đơn vị mua hàng</th>
              <th>Nhân viên phụ trách</th>
              <th>Số PO</th>
              <th>Ngày tạo PO</th>
              <th>Số ĐNMS</th>
              <th>Vật tư</th>
            </tr>
            <tr>
              <td>
                <select>
                  <option>Tất cả</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
              <td>
                <select>
                  <option>Tất cả</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
              <td>
                <input placeholder="Nhập số PO" />
              </td>
              <td>
                <input type="date" />
              </td>
              <td>
                <input placeholder="Nhập số ĐNMS" />
              </td>
              <td>
                <select>
                  <option>Tất cả</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <ShowDataList data={DATA_LIST} />
      </div>
    </div>
  );
};

export default Container;
