import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
    //pros boj contain key value pairs of the attributes

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}$</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
