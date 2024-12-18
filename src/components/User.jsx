import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../userSlice";
const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User: {user.name || "No user"}</h1>
      <p>Age: {user.age || "N/A"}</p>
      <button onClick={() => dispatch(setUser({ name: "Chamal", age: 20 }))}>
        Set User
      </button>
      <button onClick={() => dispatch(clearUser())}>Clear User</button>
    </div>
  );
};

export default User;
