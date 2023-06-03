import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
// import Home from './pages/Home/Home';
// import Movies from './pages/Movies/Movies';
// import MovieDetails from './pages/MovieDetails/MovieDetails';
// import Cast from './pages/Cast/Cast';
// import Reviews from './pages/Reviews/Reviews';

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

//ендпоінти
// /trending/get-trending               список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies                пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details            запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits            запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews            запит оглядів для сторінки кінофільму.

//маршрути
// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.