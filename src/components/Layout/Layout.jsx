import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
// import { Header } from '';

export const Layout = () => {
    return (
        <>
            <header>
                {/* <Header/> */}
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Suspense fallback={<div>Loadin...</div>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    );
}