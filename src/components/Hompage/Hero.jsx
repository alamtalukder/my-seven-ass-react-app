const Hero = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br /> the relationships that matter most.
        </p>

        <button className="btn btn-success mt-6">+ Add a Friend</button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-4xl font-bold text-green-700">10</h2>
          <p className="text-gray-500 mt-2">Total Friends</p>
        </div>

        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-4xl font-bold text-green-700">3</h2>
          <p className="text-gray-500 mt-2">On Track</p>
        </div>

        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-4xl font-bold text-green-700">6</h2>
          <p className="text-gray-500 mt-2">Need Attention</p>
        </div>

        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-4xl font-bold text-green-700">12</h2>
          <p className="text-gray-500 mt-2">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
