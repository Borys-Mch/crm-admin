import {
    Link,
  } from "react-router-dom";

const Page404 = () => {
    return (
        <>
            <h1>404</h1>
            <p>Page not founded</p>
            <Link to="/">Home</Link>
        </>
    );
};

export default Page404;