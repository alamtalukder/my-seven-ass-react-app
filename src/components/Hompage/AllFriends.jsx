import React, { use } from "react";
import FriendsCard from "../UI/FriendsCard";
import { Link } from "react-router";
const friendsData = fetch("/friendsData.json").then((res) => res.json());
const AllFriends = () => {
  const datafriends = use(friendsData);
  console.log(datafriends);
  return (
    <div>
      <div className = " max-w-11/12 mx-auto">
        <h1 className="p-10 text-2xl font-bold">Your Friends</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {datafriends.map((friend) => (
            <Link to={`/usersDetails/${friend.id}`} key={friend.id}>
              <FriendsCard friend={friend} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFriends;
