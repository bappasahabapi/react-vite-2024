import Avatar from "./Avatar";
import Info from "./Info";

export default function Profile(props) {

// aS props is an object
  return (
    <div>
      <div style={{display:"flex", gap:'10px'}}>
        <Avatar {...props}/>
        <br />
        <Info age={props.age}/>
      </div>
    </div>
  );
}
