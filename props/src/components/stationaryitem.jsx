import Item from "./item";
import style from './stationaryitem.module.css'
const Statitems = ({checked}) => {
  return (
    <>
      {/* <h2 className={`${style.heading} list-group`}>Stationary items</h2> */}
      <h2 className={`${style["heading"]} list-group`}>Stationary items</h2>
      {checked.length=== 0 ? <h3>item not present</h3> : null}
      <ul className="item-group-list">
        {checked.map((ite) => (
          <Item key={ite} Stati={ite}></Item>
        ))}
      </ul>
    </>
  );
};
export default Statitems;
