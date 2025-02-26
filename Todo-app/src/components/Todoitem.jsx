export default function Todoitem({todoDate,todoitem}){
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-3">{todoitem}</div>
                <div className="col-3">{todoDate}</div>
                <div className="col-3">
                    <button type="button" className="btn btn-danger kg-button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}