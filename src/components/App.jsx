import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

// Відкладені імпорти. Сторінка не завантажиться, якщо її не відвідати
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));


export const App = () => {
  return (
    <Routes path='/goit-react-hw-05-movies'>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='movies' element={<Movies/>} />
            <Route path='movies/:movieId' element={<MovieDetails/>}>
                <Route path='cast' element={<Cast/>} />
                <Route path='reviews' element={<Reviews/>} />
            </Route>
        </Route>
        <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
};