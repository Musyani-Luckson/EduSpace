import Course from "./Course"

function EventDetails(props) {
    const { details } = props;
    return (
        <div className="rounded">
            {
                details.map(data => (
                    <Course key={data.id} course={data} />
                ))
            }
        </div>
    )
}
export default EventDetails
