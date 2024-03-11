import Budge from "../Others/Budge"
import EventDetails from "../Others/EventDetails"
import EventFilter from "../Others/EventFilter"
import SearchBar from "../Others/SearchBar"
import TimeLaps from "../Others/TimeLaps"

function CoursesSection(props) {
  const { data: { idLink, nameClass } } = props;
  const courses = [
    {
      id: 1,
      courseName: "Introduction to Quantum Mechanics",
      venue: "Quantum Hall",
      instructor: "Prof. Smith",
      time: "10:00 - 12:00"
    },
    {
      id: 2,
      courseName: "Artificial Intelligence Ethics",
      venue: "AI Ethics Center",
      instructor: "Dr. Johnson",
      time: "13:00 - 15:00"
    },
    {
      id: 3,
      courseName: "History of Ancient Civilizations",
      venue: "Ancient Studies Museum",
      instructor: "Dr. Williams",
      time: "15:00 - 17:00"
    },
    {
      id: 4,
      courseName: "Creative Writing Workshop",
      venue: "Imagination Institute",
      instructor: "Prof. Anderson",
      time: "09:00 - 11:00"
    },
    {
      id: 5,
      courseName: "Introduction to Astrophysics",
      venue: "Stellar Observatory",
      instructor: "Dr. Brown",
      time: "14:00 - 16:00"
    },
    {
      id: 6,
      courseName: "Digital Marketing Strategies",
      venue: "Digital Hub",
      instructor: "Prof. Thompson",
      time: "11:00 - 13:00"
    },
    {
      id: 7,
      courseName: "Graphic Design Fundamentals",
      venue: "Design Studio",
      instructor: "Dr. Martinez",
      time: "09:30 - 11:30"
    },
    {
      id: 8,
      courseName: "Introduction to Psychology",
      venue: "Mind Sciences Institute",
      instructor: "Prof. Garcia",
      time: "12:30 - 14:30"
    },
    {
      id: 9,
      courseName: "Introduction to Microbiology",
      venue: "Microscopic Lab",
      instructor: "Dr. Clark",
      time: "10:30 - 12:30"
    },
    {
      id: 10,
      courseName: "Financial Planning and Investment",
      venue: "Investment Hub",
      instructor: "Prof. Rodriguez",
      time: "13:30 - 15:30"
    }
  ];

  return (
    <div className={`${nameClass} tab-pane fade`} id={`${idLink}Courses`}>
      <div className="headerCourses borderx rounded p-1">
        <div className="headerCoursesTop p-1 rounded">
          <div className="border rounded p-1">Courses</div>
          <div className="rounded">
            <button type="button" className="btn btn-outline-secondary border">
              <i className="bi-plus-circle-fill"></i>
            </button>
          </div>
        </div>
        <EventFilter />
      </div>
      <EventDetails details={courses} />
    </div>
  )
}

export default CoursesSection
