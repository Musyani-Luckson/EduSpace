
function Label(props) {
    const { label: { nameClass, text } } = props;
    return (
        <label className={nameClass}>
            {text}
        </label>
    )
}
export default Label
