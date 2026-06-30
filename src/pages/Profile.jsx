function Profile() {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl">

      <h2 className="text-3xl font-bold mb-5">
        Profile 👤
      </h2>

      <div className="space-y-4 text-lg">
        <p>
          <strong>Name:</strong>{" "}
          {user?.name}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {user?.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;
