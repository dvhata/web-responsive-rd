import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-block">
      <div className="logo">
        <img className="logo-img" src="./epurchase.png" alt="error" />
        <img src="https://img.icons8.com/fluent-systems-regular/20/000000/show-all-views.png" />
      </div>
      <div className="button-function">
        <button className="big-button">
          Mua Sắm
          <span>Báo giá, đề nghị và phương án mua</span>
        </button>
        <button className="big-button">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABAUlEQVQ4jdWRPU7DUBCEv3myOAai9hX46RwJLkBBB1IuEKgciYaXhhPQUCHlDoQOKKC3a6ScAqS8oXFQ4sQhlEy12tmZN28X/j0EUMRqBBoAO1vqvgS3j2U+zBqfgeHtqcyPtlEXsX42XALDecMrQ6P6pIjVtIjVtBer4zUmBshazVcgTcr8EPtODqcOkp3GwO4S3yC0jJPhJ42D5DRTF7+SYNFZ0LfTWBIpuN/mJ2WuZg6KWH8C74sDXX9uQwC9WN8Yrug44/y1ItZu11on2JDiA4Uzp5kkPUzKfC/7XbaYV/c4vUgC6RpWr7AZ9oWsfRQOsM//pIXlRc7rrXfQdYVvjapysZTeHxgAAAAASUVORK5CYII=" />
          Báo cáo
        </button>
        <button className="small-button">
          <img src="https://img.icons8.com/small/16/000000/money.png" />
          Đề nghị mua sắm
        </button>
        <button className="small-button">
          <img src="https://img.icons8.com/small/16/000000/cost.png" />
          Phương án mua
        </button>
        <button className="small-button">
          <img src="https://img.icons8.com/small/16/000000/bill.png" />
          Đơn mua
        </button>
      </div>
    </div>
  );
};

export default Header;
