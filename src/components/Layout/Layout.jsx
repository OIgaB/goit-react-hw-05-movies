import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import { ListContainer } from "./styled";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    color:#b37606;
    &.active {
        color: #f9a504;
    }
`;

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <ListContainer>
                        <li>
                            <StyledLink to="/">Home</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/movies">Movies</StyledLink>
                        </li>
                    </ListContainer>
                </nav>
            </header>
            <main>
                <Suspense fallback={<div>Loadin...</div>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    );
}