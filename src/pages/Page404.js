import {
    Link,
  } from "react-router-dom";

const Page404 = () => {
    return (
        <main className="wrapper">
            <h1>404</h1>
            <p>Page not founded</p>
            <Link to="/">Home</Link>
        </main>
    );
};

export default Page404;