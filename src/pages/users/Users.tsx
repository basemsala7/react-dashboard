import "./users.css";
import { GoVerified } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { ChangeEvent, useEffect, useState } from "react";
import { UsersType } from "../../types/types";
import Row from "../../components/row/Row";
import capitalizeText from "../../utli/capitalizeText";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UsersType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const changeHandleing = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") setFilteredUsers(users);

    const searchData = users.filter(
      (ele) =>
        ele.firstName.includes(capitalizeText(e.target.value.toLowerCase())) ||
        ele.lastName.includes(capitalizeText(e.target.value.toLowerCase()))
    );
    console.log(searchData);
    setFilteredUsers(searchData);

    if (e.target.value.includes(" ")) {
      const index = e.target.value.indexOf(" ");
      const first = e.target.value.slice(0, index);
      const newFirst = first.charAt(0).toUpperCase() + first.slice(1);
      const last = e.target.value.slice(index + 1);
      const newLast = last.charAt(0).toUpperCase() + last.slice(1);

      console.log(newFirst, newLast);

      const searchData = users.filter((ele) => {
        return (
          ele.firstName.includes(newFirst) && ele.lastName.includes(newLast)
        );
      });
      console.log(searchData);
      setFilteredUsers(searchData);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://crazy-flannel-nightgown-ant.cyclic.app/api/users`,
          {}
        );
        if (!response.ok) throw Error();
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
        console.log(data, loading);
      } catch (error) {
        setLoading(false);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div className="loader"></div>;
  if (error)
    return (
      <div className="error">
        <h2>opps !</h2>
        <br></br>
        <p>Some thing wrong</p>
      </div>
    );

  const title = {
    title1: "Id",
    title2: "Avatar",
    title3: "First Name",
    title4: "Last Name",
    title5: "E-mail",
    title6: "Phone",
    title7: "createdAt",
    title8: "verified",
    title9: "action",
  };

  return (
    <div className="usersComponent">
      <h2>Users</h2>
      <input
        type="text"
        placeholder="Filter by name"
        name="name"
        onChange={changeHandleing}
      />
      <Row title={title} />

      {filteredUsers?.length == 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>No data yet </h3>
      ) : (
        filteredUsers.map((ele) => (
          <div className="tableWraper" key={ele.id}>
            <div>{ele.id} </div>
            <div>
              <img
                src={ele.img}
                width={35}
                style={{
                  borderRadius: "50%",
                  alignSelf: "center",
                  marginTop: "-5px",
                }}
                height={35}
              />{" "}
            </div>
            <div>{ele.firstName}</div>
            <div>{ele.lastName}</div>
            <div>{ele.email} </div>
            <div>{ele.phone}</div>
            <div>{ele.createdAt}</div>
            <div>
              {ele.verified ? <GoVerified style={{ color: "green" }} /> : "X"}
            </div>
            <div>
              <Link to={`/users/${ele.id}`}>
                <HiOutlineViewfinderCircle
                  style={{ color: "#008000", marginRight: "8px" }}
                />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
