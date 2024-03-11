import Icon from "../Others/Icon";
import IconButton from "../Others/IconButton";
import Image from "../Others/Image";
import Label from "../Others/Label";

function HomeHeader() {
    const menuBtnData = {
        icon: `bi-list`,
        nameClass: `menuBtn btn btn-outline-dark border-0 shadow`
    };
    const labelData = {
        nameClass: ` m-1`,
        text: `Username`
    };
    const imageData = {
        nameClass: `profileIcon rounded shadow`,
        src: `../images/profile.jpeg`,
        alt: `profileIcon`,
        style: {
            width: `2.4rem`,
            height: `2.4rem`,
        }
    };
    return (
        <div className="HomeHeader p-4">
            <div className="HomeHeaderLeft">
                <div className="HomeHeaderRightMenu">
                    <Image data={imageData} />
                </div>
            </div>
            <div className="HomeHeaderRight">
                <div className="HomeHeaderRightMenu">
                    <button className="btn btn-outline-dark border-0 shadow" type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#staticBackdrop"
                        controls="staticBackdrop">
                        <Icon icon={`bi-list`} />
                    </button>
                </div>
                <div className="HomeHeaderRightProfile">
                    <Label label={labelData} />
                    <Image data={imageData} />
                </div>
            </div>
        </div >
    )
}

export default HomeHeader;
