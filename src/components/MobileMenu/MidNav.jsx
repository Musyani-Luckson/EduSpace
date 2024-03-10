import NavItem from "../Navbars/NavItem"
function MidNav(props) {
    const { data: { id } } = props;
    return (
        <div className="MainNavBarMid navx nav-pills" role="tablist">
            <NavItem data={{
                label: {
                    text: `Home`,
                    id
                },
                icon: `bi-house-door-fill`,
                active: `active`
            }} />
            <NavItem data={{
                label: {
                    text: `Courses`,
                    id
                },
                icon: `bi-collection-fill`,
            }} />
            <NavItem data={{
                label: {
                    text: `Notes`,
                    id
                },
                icon: `bi-journal-bookmark-fill`,
            }} />
            <NavItem data={{
                label: {
                    text: `Todo`,
                    id
                },
                icon: `bi-list-task`,
            }} />
            <NavItem data={{
                label: {
                    text: `Notices`,
                    id
                },
                icon: `bi-bell-fill`,
            }} />
            <NavItem data={{
                label: {
                    text: `Schedule`,
                    id
                },
                icon: `bi-person-lines-fill`,
            }} />
            <NavItem data={{
                label: {
                    text: `Help`,
                    id
                },
                icon: `bi-info-circle-fill`,
            }} />
        </div>
    )
}
export default MidNav
