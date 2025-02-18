export default function Current_time(){
    let time=new Date();
    return (
        <>
        <div className="Time-div">The Current Time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</div>
        </>
    )
}