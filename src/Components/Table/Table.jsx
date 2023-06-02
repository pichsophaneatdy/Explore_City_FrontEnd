import "./Table.scss";

const Table = ({items}) => {
    return (
        <table className="table">
            <tr className="table__header">
                <th className="table__th1">Item name</th>
                <th>Min</th>
                <th>Average</th>
                <th>Max</th>
            </tr>
            {items.map((item) => {
                return (
                    <tr className="table__row">
                        <td className="table__col1">{item.item_name}</td>
                        <td className="table__col">$ {item.usd.min}</td>
                        <td className="table__col">$ {item.usd.avg}</td>
                        <td className="table__col">$ {item.usd.max}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Table