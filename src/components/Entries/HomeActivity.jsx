import HomeHeader from "../Headers/HomeHeader";
import Sections from "../sections/Sections";

function HomeActivity() {
    const sectionData = {
        idLink: `small`,
        nameClass: `eachSectionComp rounded`
    }
    return (
        <div className="HomeActivity entries">
            <HomeHeader />
            <div className="m-1" >
                <div className="HomeActivityNotMobile rounded p-1">
                    calender
                </div>
                <div className="HomeActivityIstMobile rounded">
                    <div className="rounded">
                        <Sections data={sectionData} />
                    </div>
                    <div className="rounded">
                    
                    </div>
                </div>
            </div >
        </div>
    )
}
export default HomeActivity