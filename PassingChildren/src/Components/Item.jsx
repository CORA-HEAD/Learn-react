// let item=(props)=>{
//     return(
//     <li  className="list-group-item">{props.itemlist}</li>
// )}
// export default item;
//it can also work fine with the below
// let item =(props)=>{
//     let  {itemlist}=props;
//     return (

//         <li className="list-group-item">{itemlist}</li>
//     )
// }
import styles from "./Item.module.css";
let Item = ({ Stati ,bought, handleByButtonClick}) => {
    // const handleByButtonClick=(e)=>{
    //     console.log(e);
    //     console.log(`${Stati} being bought`)

    // }
  return (
    <>
      <li className={`${styles.Item} list-group-item ${bought ? "active" : ""}`}>
        <span className={styles["kg-span"]}>
          {Stati} <button  className={`${styles.button} btn btn-info`} onClick={handleByButtonClick}>BUY</button>
        </span>
      </li>
    </>
  );
};

export default Item;
