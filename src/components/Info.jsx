export default function Info({ age }) {
    const border = {
        border: "1px solid green",
    };
    return (
        <div style={border}>
            <h3>Info Component</h3>
            <p>
            Age:<b>{age}</b>
            </p>
        </div>
    );
}
