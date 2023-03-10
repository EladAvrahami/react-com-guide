import './ExpenseDate.css'
function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });//https://www.w3schools.com/jsref/jsref_tolocalestring.asp
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();//js built in function getFullYear

    return (
        <div className='expense-date'>
            <div className='expense-date__month '>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;