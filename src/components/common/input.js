export default function InputText(props){
    const {type, placeholder, value, onChange} = props;

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    )
}