import './Card.css'

function Card(props){
    const classes='card ' + props.className //get multiple class name for this card component
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Card;