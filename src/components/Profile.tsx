import Image from "next/image";
import React from "react";

const Profile = () => {
  const name = "Doolittle (Grit)";
  const role = "Full-stack Developer";
  return (
    <div className="w-full flex space-x-4">
      <div>
        <Image src="/doolittle-profile.jpg" alt="profile" width={60} height={60} className="rounded-full" />
      </div>
      <div>
        <div className="text-2xl font-bold">{name}</div>
        <div>{role}</div>
      </div>
    </div>
  );
};

export default Profile;
