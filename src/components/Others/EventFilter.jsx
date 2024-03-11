
function EventFilter() {
    return (
        <div className="rounded">
            <button type="button" className="btn btn-sm border-0 btn-outline-secondary m-1 active">All</button>
            <button type="button" className="btn btn-sm border-0 btn-outline-secondary m-1">Active</button>
            <button type="button" className="btn btn-sm border-0 btn-outline-secondary m-1">Upcoming</button>
            <button type="button" className="btn btn-sm border-0 btn-outline-secondary m-1">Completed</button>
        </div>
    )
}
export default EventFilter
