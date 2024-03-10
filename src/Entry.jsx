import HeroSection from "./components/Entries/HeroSection"
import HomeActivity from "./components/Entries/HomeActivity"
import MainNavBar from "./components/Entries/MainNavBar"
import MobileMenu from "./components/MobileMenu/MobileMenu"
function Entry() {
    return (
        <>
            <MainNavBar />
            <HeroSection />
            <HomeActivity />
            <MobileMenu />
        </>
    )
}
export default Entry;