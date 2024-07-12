import { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
import { toast } from "react-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import Row from "../../components/row/Row";
import { ProductsType } from "../../types/types";
import "./product.css";
const Product = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dashboard-backend-orpin.vercel.app/api/products`,
        {}
      );
      if (!response.ok) throw Error();
      const data = await response.json();
      setProducts(data);
      setLoading(false);
      console.log(data, loading);
    } catch (error) {
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      const res = await fetch(
        `https://dashboard-backend-orpin.vercel.app/api/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw Error();
      const data = await res.json();
      const success = () => toast.success("Product deleted!");
      success();
      fetchProducts();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const title = {
    title1: "Id",
    title2: "Avatar",
    title3: "Title",
    title4: "color",
    title5: "price",
    title6: "Producer",
    title7: "createdAt",
    title8: "In Stock",
    title9: "action",
  };

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
    <div className="productsContainer">
      <h2>Products</h2>

      <Row title={title} />

      {products?.length == 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>No data yet </h3>
      ) : (
        products.map((ele) => (
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
            <div>{ele.title}</div>
            <div>{ele.color}</div>
            <div>{ele.price} </div>
            <div>{ele.producer}</div>
            <div>{ele.createdAt}</div>
            <div>
              {ele.inStock ? <GoVerified style={{ color: "green" }} /> : "X"}
            </div>
            <div>
              <RiDeleteBin6Line
                style={{ color: "red" }}
                onClick={() => deleteProduct(ele.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
