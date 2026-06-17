
import { Link } from "react-router";

const Erropage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-error">404</h1>

        <h2 className="text-4xl font-bold mt-4">Oops! Page Not Found</h2>

        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8">
          <Link to="/">
            <button className="btn btn-primary">⬅ Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Erropage;
