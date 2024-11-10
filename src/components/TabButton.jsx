export default function TabButton(props){
    return (
    <li>
        <button className={props.isSelected ? 'active' : ''} onClick={props.onSelect}>{props.children}</button>
    </li>
    );
    // children refers to the content in between the TabButton tabs
}