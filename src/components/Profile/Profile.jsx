import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-slate-200 m-4 p-5 rounded-lg">
      <h2 className="text-3xl font-bold">Profile Information</h2>
      <div>
        {user && (
          <>
            <h2 className="text-2xl font-semibold">Name: {user.displayName}</h2>
            <h2 className="tex-xl font-semibold">Email: {user.email}</h2>
            <p>Time: {user.metadata.creationTime}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
