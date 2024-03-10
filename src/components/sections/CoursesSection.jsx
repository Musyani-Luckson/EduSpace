
function CoursesSection(props) {
  const { data: { idLink, nameClass } } = props

  return (
    <div className={`${nameClass} tab-pane fade`} id={`${idLink}Courses`}>
      <div className={`${nameClass} Head`}>
        <h3>COURSES</h3>
      </div>

      <div className={`${nameClass} Body`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  )
}

export default CoursesSection
