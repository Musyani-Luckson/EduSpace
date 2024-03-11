import Icon from "./Icon";

function Budge(props) {
    const { data: { isIconed, budgeName, budgeValue } } = props;
    return (
        <button type="button" className="btnBudge btn btn-outline-secondary border m-1 btn-sm rounded">
            {
                isIconed ?
                    <Icon icon={budgeName} /> :
                    <div className="text-muted">
                        {budgeName}
                    </div>
            }
            <span className="badge text-dark rounded p-">
                {budgeValue}
            </span>
        </button>
    )
}
export default Budge
