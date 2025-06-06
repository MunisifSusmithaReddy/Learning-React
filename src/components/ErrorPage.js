
import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log("Error occurred:", error);
  return (
    <div className="about-us">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please check the URL or return to the homepage.</p>
      </div>
    );
}

export default ErrorPage;