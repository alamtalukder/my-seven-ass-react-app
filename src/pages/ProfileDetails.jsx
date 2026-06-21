import React, { useContext } from "react";
import {
  Phone,
  MessageSquare,
  Video,
  Archive,
  Trash2,
  AlarmClock,
} from "lucide-react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { TimelineContext } from "../context/Context";

const ProfileDetails = () => {
  const loadData = useLoaderData();
  const { id } = useParams();
  const user = loadData.find((user) => user.id === parseInt(id));

  const { timeline, setTimeline } = useContext(TimelineContext);

  const handleCall = (type, userDetails) => { 
    toast.success(`Calling ${user.name}...`);
    const newData = { type, ...userDetails };
    setTimeline([...timeline, newData]);
  };

  const handleText = (type, userDetails) => {
    toast.success(`Texting ${user.name}...`);
    const newData = { type, ...userDetails };
    setTimeline([...timeline, newData]);
  };

  const handleVideo = (type, userDetails) => {
    toast.success(`Starting video call with ${user.name}...`);
    const newData = { type, ...userDetails };
    setTimeline([...timeline, newData]);
  };

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="space-y-4">
          {/* Profile Card */}
          <div className="card bg-white shadow-md p-8 items-center text-center">
            <img
              src={user.picture}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover"
            />

            <h2 className="text-3xl font-bold mt-4">{user.name}</h2>

            <div className="badge badge-error mt-3">{user.status}</div>

            <div className="badge badge-success mt-2 uppercase">
              {user.tags[0]}
            </div>

            <p className="italic text-gray-500 mt-6 text-lg">"{user.bio}"</p>

            <p className="text-gray-400 mt-4">Preferred: email</p>
          </div>

          {/* Buttons */}
          <button className="btn bg-white border-none shadow-md w-full text-lg">
            <AlarmClock size={20} />
            Snooze 2 Weeks
          </button>

          <button className="btn bg-white border-none shadow-md w-full text-lg">
            <Archive size={20} />
            Archive
          </button>

          <button className="btn bg-white border-none shadow-md w-full text-lg text-red-500">
            <Trash2 size={20} />
            Delete
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Stats */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="card bg-white shadow-md p-8 text-center">
              <h1 className="text-3xl font-bold text-green-900">
                {user.days_since_contact}
              </h1>
              <p className="text-gray-500 mt-3 text-xl">Days Since Contact</p>
            </div>

            <div className="card bg-white shadow-md p-8 text-center">
              <h1 className="text-3xl font-bold text-green-900">{user.goal}</h1>
              <p className="text-gray-500 mt-3 text-xl">Goal (Days)</p>
            </div>

            <div className="card bg-white shadow-md p-8 text-center">
              <h1 className="text-3xl font-bold text-green-900">
                {user.next_due_date}
              </h1>
              <p className="text-gray-500 mt-3 text-xl">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="card bg-white shadow-md p-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-green-900">
                Relationship Goal
              </h2>

              <button className="btn btn-outline btn-sm">Edit</button>
            </div>

            <p className="text-xl mt-8 text-gray-600">
              Connect every <span className="font-bold">{user.goal} days</span>
            </p>
          </div>

          {/* Quick Check In */}
          <div className="card bg-white shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-900 mb-6">
              Quick Check-In
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => handleCall("call", user)}
                className="btn h-28 bg-base-100 border"
              >
                <div className="flex flex-col items-center gap-2">
                  <Phone size={30} />
                  <span>Call</span>
                </div>
              </button>

              <button
                onClick={() => handleText("text", user)}
                className="btn h-28 bg-base-100 border"
              >
                <div className="flex flex-col items-center gap-2">
                  <MessageSquare size={30} />
                  <span>Text</span>
                </div>
              </button>

              <button
                onClick={() => handleVideo("video", user)}
                className="btn h-28 bg-base-100 border"
              >
                <div className="flex flex-col items-center gap-2">
                  <Video size={30} />
                  <span>Video</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
