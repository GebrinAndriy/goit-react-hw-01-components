
function setBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`
} 
export const Statistics = ({title,stats}) =>{ 
    return( 
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                {stats.map(({id, label, percentage}) =>(
                    <li className="stat-item" key={id} style={{backgroundColor: setBg()}}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

