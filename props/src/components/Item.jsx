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
let Item =({Stati})=>{
    return (

        <li className="list-group-item">{Stati}</li>
    )
}

export default Item;