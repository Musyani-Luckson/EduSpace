import Budge from "../Others/Budge"
import SearchBar from "../Others/SearchBar"
import TimeLaps from "../Others/TimeLaps"

function NotesSection(props) {
    const { data: { idLink, nameClass } } = props
    return (
        <div className={`${nameClass} tab-pane fade`} id={`${idLink}Notes`}>
            <div className={`${nameClass} notesHead p-0`}>
                <div className="notesHeadHeader rounded">
                    <div className="h5 rounded p-1 m-1">
                        Notes
                    </div>
                    <SearchBar />
                </div>
                <div className="notesBudgesBtns rounded">
                    <Budge data={{
                        isIconed: true,
                        budgeName: `bi-folder-fill`,
                        budgeValue: 23
                    }} />
                    <Budge data={{
                        isIconed: true,
                        budgeName: `bi-journal-bookmark-fill`,
                        budgeValue: 238
                    }} />
                </div>
            </div>
            <div className="p-1 rounded">
                <TimeLaps />
            </div>
            <div className={`${nameClass} border p-1`}>
                content
            </div>
        </div>
    )
}
export default NotesSection
