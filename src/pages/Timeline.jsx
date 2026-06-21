import React, { useContext } from "react";
import { TimelineContext } from "../context/Context";
import { Phone, MessageSquare, Video } from "lucide-react";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <Phone className="text-green-600" size={22} />;
      case "text":
        return <MessageSquare className="text-blue-600" size={22} />;
      case "video":
        return <Video className="text-purple-600" size={22} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Timeline</h1>

        {timeline.length === 0 ? (
          <div className="card bg-white shadow-md p-10 text-center">
            <h2 className="text-2xl text-gray-500">No activity yet 😔</h2>
          </div>
        ) : (
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <div key={index} className="card bg-white shadow-md p-5">
                <div className="flex items-center gap-4">
                  <img
                    src={item.picture}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="font-bold text-xl">{item.name}</h2>

                    <p className="text-gray-500">{item.email}</p>

                    <p className="mt-2">
                      You performed a{" "}
                      <span className="font-semibold capitalize">
                        {item.type}
                      </span>{" "}
                      action.
                    </p>
                  </div>

                  <div>{getIcon(item.type)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
