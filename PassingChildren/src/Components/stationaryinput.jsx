import style from './stationaryitem.module.css'
const Stationary=({handleOnKeyDown})=>{
    return (
        <>
            <input type="text" name="" placeholder='Enter the stationary items here' className={style.Stationary}    onKeyDown={handleOnKeyDown} bought={true} />
      
        </>
    )

}
export default Stationary;