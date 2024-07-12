import "./topDeal.css";
import { TopDealsType } from "../../types/types";
import { useQuery } from "react-query";
const TopDeals = () => {
  const getData = async () => {
    try {
      const res = await fetch(
        "https://dashboard-backend-orpin.vercel.app/api/dashboard/topdeals"
      );
      if (!res.ok) throw Error("some thing is worng");
      return await res.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const { isLoading, data, isError, error } = useQuery("topdeals", getData);
  console.log("isError", isError);
  if (isError) return <p>some thing Wrong</p>;
  {
    if (isLoading) return <span className="loader"></span>;
  }
  return (
    <div>
      <h2>Top Deals</h2>
      {data?.length
        ? data?.map((ele: TopDealsType) => (
            <div className="topDealWrap" key={ele.id}>
              <img src={ele.img} alt="img" />
              <div>
                <p>{ele.username} </p>
                <p>{ele.email} </p>
              </div>
              <p>${ele.amount}</p>
            </div>
          ))
        : "No data yet "}
    </div>
  );
};

export default TopDeals;
