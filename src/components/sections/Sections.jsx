import CoursesSection from "./CoursesSection"
import HelpSection from "./HelpSection"
import HomeSection from "./HomeSection"
import NotesSection from "./NotesSection"
import NoticesSection from "./NoticesSection"
import ScheduleSection from "./ScheduleSection"
import TodoSection from "./TodoSection"

function Sections(props) {
    const { data: { idLink, nameClass } } = props;
    return (
        <div className="tab-content rounded">
            <HomeSection data={{ idLink, nameClass }} />
            <CoursesSection data={{ idLink, nameClass }} />
            <NotesSection data={{ idLink, nameClass }} />
            <TodoSection data={{ idLink, nameClass }} />
            <NoticesSection data={{ idLink, nameClass }} />
            <ScheduleSection data={{ idLink, nameClass }} />
            <HelpSection data={{ idLink, nameClass }} />
        </div>
    )
}
export default Sections
