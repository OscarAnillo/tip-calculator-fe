export default function ButtonCommon(props) {
    const {value, text, className, onClick} = props;

    return (
        <button value={value} className={className} onClick={onClick}>
            {text}%
        </button>
    )
}