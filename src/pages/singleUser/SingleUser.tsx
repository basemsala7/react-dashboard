import "./singleUser.css";
import { useParams } from "react-router-dom";
import BigChartBox from "../../components/bigChart/BigChartBox";
import { useEffect, useState } from "react";
import { UsersType } from "../../types/types";

const SingleUser = () => {
  const [user, setUser] = useState<UsersType>();

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://crazy-flannel-nightgown-ant.cyclic.app/api/users/${id}`,
          {}
        );
        if (!response.ok) throw Error();
        const data = await response.json();
        setUser(data);
        setLoading(false);

        console.log(data, "the data");
      } catch (error) {
        setLoading(false);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);
  console.log(id);

  if (loading) return <div className="loader"></div>;
  if (error)
    return (
      <div className="error">
        <h2>opps !</h2>
        <br></br>
        <p>Some thing wrong</p>
      </div>
    );
  return (
    <div className="singleWraper">
      <div className="info">
        <div className="imgWraper">
          <img src={user?.img} alt="" height={150} width={180} />
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <h3>First name : {user?.firstName}</h3>
        <h3>Last name : {user?.lastName}</h3>
        <h3>Email : {user?.email}</h3>
        <h3>Phone : {user?.phone}</h3>
        <h3 style={{ marginBottom: "30px" }}>
          Status :{user?.verified ? "verified" : "not"}{" "}
        </h3>{" "}
        <hr />
        <br />
        <br />
        <BigChartBox />
      </div>

      <div className="activitiesContainer">
        <h2>Latest Activities</h2>
        <div className="activities">
          {user?.activities.map((ele: any, index) => (
            <h4 key={index}>
              {ele.text} <br /> <span></span> {ele.time}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
