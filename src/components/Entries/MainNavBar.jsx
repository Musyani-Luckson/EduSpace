import MidNav from "../MobileMenu/MidNav";
import NavItem from "../Navbars/NavItem";
function MainNavBar() {

  return (
    <div className="MainNavBar entries">
      <div className="MainNavBarTop">
        <NavItem data={{
          label: {
            text: `EduSpace`,
            nameClass: `h5 rounded p-2`
          },
          icon: `bi-list`,
          isBtn: true,
        }} />
      </div>
      <MidNav data={{ id: `big` }} />
      <div className="MainNavBarBottom">
        <NavItem data={{
          label: {
            text: `Username`,
            nameClass: `h5 rounded p-1`
          },
          isImageIcon: true
        }} />
      </div>
    </div>
  )
}
export default MainNavBar;
