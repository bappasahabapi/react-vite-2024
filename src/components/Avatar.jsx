export default function Avatar({name,age,size}) {

    const style = {
        "border": "1px solid red",
    }

    return (
        <div style={style}>
            <h3>Avater Component</h3>
            <p> Name is: <b>{name}</b> Age: <b>{age}</b> is <b>{size}</b> </p>
        </div>
    );
}
