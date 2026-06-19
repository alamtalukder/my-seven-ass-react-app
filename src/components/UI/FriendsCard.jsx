import React from "react";

const FriendsCard = ({ friend }) => {
  return (
    <div className="card bg-white shadow-xl rounded-3xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
      {/* Profile Image */}
      <div className="flex justify-center pt-6">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-green-200"
        />
      </div>

      {/* Card Body */}
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>

        <p className="text-sm text-gray-500">
          {friend.days_since_contact} days ago
        </p>

        {/* Bio */}
        <p className="text-gray-600 text-sm">{friend.bio}</p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-success badge-outline px-3 py-3"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mt-5">
          <span
            className={`badge px-4 py-4 text-white font-semibold ${
              friend.status === "active"
                ? "badge-success"
                : friend.status === "overdue"
                  ? "badge-error"
                  : "badge-warning"
            }`}
          >
            {friend.status}
          </span>
        </div>

        {/* Button */}
        <button className="btn btn-primary mt-5 rounded-full px-8">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default FriendsCard;
