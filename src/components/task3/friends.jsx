
export const FriendsList = (({friends}) =>{
    return(
        <ul className="friend-list">
            {friends.map(({id,name,isOnline,avatar})=>(
                <li className="item" key={id}>
                    {isOnline ? (
                         <span className="status green"></span> 
                    ) : (
                        <span className="status red"></span> 
                    )}
                         
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </li>
            ))}
        </ul>
        
    )
})