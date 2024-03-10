
function TodoSection(props) {
    const { data: { idLink, nameClass } } = props
    return (
        <div className={`${nameClass} tab-pane fade`} id={`${idLink}Todo`}>
            <div className={`${nameClass} Head`}>
                <h3>TODO</h3>
            </div>

            <div className={`${nameClass} Body`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    )
}

export default TodoSection
