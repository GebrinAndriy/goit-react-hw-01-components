export const Profile = props =>(
    <div className="profile">
        <div className="description">
            <img
            src={props.avatar}
            alt="User avatar"
            className="avatar"
            />
            <p className="name">{props.username}</p>
            <p className="tag">@{props.tag}</p>
            <p className="location">{props.location}l</p>
        </div>
        <ul className="stats">
            <li className="stats-item">
                <span className="label">Followers</span>
                <span className="quantity">{props.stats.followers}</span>
            </li>
            <li className="stats-item">
                <span className="label">Views</span>
                <span className="quantity">{props.stats.views}</span>
            </li>
            <li className="stats-item">
                <span className="label">Likes</span>
                <span className="quantity">{props.stats.likes}</span>
            </li>
        </ul>
    </div>
)