const Guid = (props) => {
    return <li className="li_flat"><a href={`#${props.title}`} className="guid_link">{props.title}</a></li>
}

export default Guid;