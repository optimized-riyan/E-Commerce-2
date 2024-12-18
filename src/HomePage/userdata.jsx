
import { useLocation } from "react-router-dom";

export default function UserData() {
  const location = useLocation();
  const { id, email, name, address, image } = location.state;
  return (
    <div>
      <h1>Welcome, {name}</h1>
      <p>Email: {email}</p>
      <p>Address: {address.address}, {address.city}, {address.state}</p>
      <img src={image} alt={`${name}`} style={{ width: "100px", borderRadius: "50%" }} />
      <p>User ID: {id}</p>
    </div>
  );
}