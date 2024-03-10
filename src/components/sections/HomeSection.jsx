
function HomeSection(props) {
    const { data: { idLink, nameClass } } = props
    return (
        <div className={`${nameClass} tab-pane`} id={`${idLink}Home`}>
            <div className={`${nameClass} Head`}>
                <h3>HOME</h3>
            </div>
            <div className={`${nameClass} Body`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    )
}

export default HomeSection
