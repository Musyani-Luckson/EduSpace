import Image from "./Image";

function getRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

function Course(props) {
    const { course: {
        id, courseName, venue, instructor, time
    } } = props;
    const imageData = {
        nameClass: `courseImage rounded`,
        src: `../images/course${getRandomNumber(5)}.jpeg`,
        alt: `courseImage`,
        style: {
            width: `100%`
        }
    }
    return (
        <div className="courseInCourses borderx rounded m-2x" key={id}>
            <div className="courseInCoursesImageBox rounded m-1 p-1x">
                <Image data={imageData} />
            </div>
            <div className="courseInCoursesMid card m-1 p-2 border-0">
                <div className="courseInCoursesMidName rounded text-md text-dark">
                    {courseName}
                </div>
                <div className="courseInCoursesMidVenue rounded text-muted text-xs">
                    Venue ({venue})
                </div>
                <div className="courseInCoursesMidSuggest rounded text-xs">
                    <div className="text-dark">
                        {instructor}
                    </div>
                    <div className="courseInCoursesMidBottomTime text-muted">
                        {time}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Course