import Icon from "../Others/Icon";
import IconButton from "../Others/IconButton";
import Image from "../Others/Image";
import Label from "../Others/Label";

function NavItem(props) {
    const { data: { label, icon, isImageIcon, isBtn, active } } = props;
    const labelData = {
        nameClass: ` m-1`,
        text: `Username`
    };
    const imageData = {
        nameClass: `profileIcon rounded shadow m-1`,
        src: `../images/profile.jpeg`,
        alt: `profileIcon`,
        style: {
            width: `2rem`,
            height: `2rem`,
        }
    };
    const menuBtnData = {
        icon: `bi-list`, nameClass: `menuBtn btn btn-outline-dark border-0 shadow`
    };
    return (
        <div className="nav-item m-2 border-0 rounded">
            <div className={`navItem nav-link rounded ${active}`} data-bs-toggle="pill" data-bs-target={`#${label.id}${label.text}`}>
                {
                    isImageIcon ? <div className='iconDiv'>
                        <Image data={imageData} />
                    </div> :
                        <div className='iconDiv'>
                            {
                                isBtn ? <IconButton data={menuBtnData} /> :
                                    <Icon icon={icon} />
                            }
                        </div>
                }
                <div className='navLabelDiv'>
                    <Label label={label} />
                </div>
            </div>
        </div>
    )
}
export default NavItem;
