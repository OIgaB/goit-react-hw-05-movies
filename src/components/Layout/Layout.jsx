import { Outlet, Link } from "react-router-dom";
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
                <Outlet/>
            </main>
        </>
    );
}

// export default Layout;