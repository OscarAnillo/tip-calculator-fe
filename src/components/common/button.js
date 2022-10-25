export default function ButtonCommon(props) {
    const {value, className} = props;

    return (
        <button className={className}>
            {value}
        </button>
    )
}