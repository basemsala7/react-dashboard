import { RowTitleType } from "../../types/types";
import "./row.css";
const Row = ({ title }: { title: RowTitleType }) => {
  return (
    <div className="tableWraper">
      <div>{title.title1}</div>
      <div>{title.title2} </div>
      <div>{title.title3}</div>
      <div>{title.title4} </div>
      <div>{title.title5} </div>
      <div>{title.title6} </div>
      <div>{title.title7}</div>
      <div>{title.title8} </div>
      <div>{title.title9} </div>
    </div>
  );
};

export default Row;
