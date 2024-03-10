
function Image(props) {
    const { data: { nameClass, alt, src, style } } = props;
    return (
        <img className={nameClass} alt={alt} src={src} style={style} />
    )
}
export default Image;