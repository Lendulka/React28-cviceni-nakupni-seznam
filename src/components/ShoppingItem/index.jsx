
import './style.css'

const ShoppingItem = (props) => {
    const { name, quantity, unit, bought } = props
    return (
        <div className="list-item">
            <button className="bought-btn">{bought && "✔"}</button>
            <div className="list-item__body">
                <div className="list-item__name">{name}</div>
                <div className="list-item__quantity">{quantity} {unit}</div>
            </div>
        </div>
    )
}

export default ShoppingItem

