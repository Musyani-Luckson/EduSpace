import Sections from "../sections/Sections"
function HeroSection() {
  const sectionData = {
    idLink: `big`,
    nameClass: `eachSectionComp rounded p-1`
  }
  return (
    <div className="HeroSection entries rounded p-1 m-1">
      <Sections data={sectionData} />
    </div>
  )
}
export default HeroSection;