import Icon from "./Icon";
function IconButton(props) {
    const { data: { icon, nameClass } } = props;
    return (
        <button className={nameClass}>
            <Icon icon={icon} />
        </button>
    )
}
export default IconButton;
