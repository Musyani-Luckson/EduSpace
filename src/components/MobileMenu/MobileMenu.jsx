import Image from '../Others/Image'
import MidNav from './MidNav';
function MobileMenu() {
    const imageData = {
        nameClass: `profileIcon rounded shadow m-1`,
        src: `../images/profile.jpeg`,
        alt: `profileIcon`,
        style: {
            width: `2.4rem`,
            height: `2.4rem`,
        }
    }
    return (
        <div className='offcanvas offcanvas-start' id='staticBackdrop' data-bs-backdrop="static" tabIndex="1" aria-labelledby="staticBackdropLabel" data-bs-dismiss="offcanvas">
            <div className="offcanvas-header">
                <div className="offcanvas-title" id="staticBackdropLabel">
                    <Image data={imageData} />
                </div>
                <button type="button" className="btn bg-danger border-0" data-bs-dismiss="offcanvas" aria-label="Closex">Dismiss</button>
            </div>
            <div className="offcanvas-body">
                <MidNav data={{ id: `small` }} />
            </div>
        </div>
    )
}
export default MobileMenu