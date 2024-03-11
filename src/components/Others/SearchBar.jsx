
function SearchBar() {
    return (
        <form className="d-flex m-1 rounded" role="search" style={{
            width: `16rem`
        }}>
            <input className="form-control me-2 border" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success border" type="submit">
                <i className="bi-search"></i>
            </button>
        </form>
    )
}

export default SearchBar
