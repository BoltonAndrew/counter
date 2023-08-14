import { useState } from "react";
import styles from "../App.module.css";

function Counter() {
  const [product, setProduct] = useState({
    name: "Fruits",
    count: 0,
  });

  function handlerMinus() {
    // let tempObj = { ...product };
    // tempObj.count = tempObj.count - 1;
    // setProduct(tempObj);
    setProduct({ ...product, count: product.count - 1 });
  }

  function handlerPlus() {
    // setProduct((prevProduct) => {
    //   return {
    //     name: prevProduct.name,
    //     count: prevProduct.count + 1,
    //   };
    // });
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        count: prevProduct.count + 1,
      };
    });
  }
  return (
    <>
      <h2>{product.name}</h2>
      <button className={styles.bttns} onClick={handlerMinus}>
        -
      </button>
      <span className={styles.product}>{product.count}</span>
      <button className={styles.bttns} onClick={handlerPlus}>
        +
      </button>
      {/* <input
        placeholder={product}
        onChange={(event) => setProduct(event.target.value)}
      /> */}
    </>
  );
}
export default Counter;
