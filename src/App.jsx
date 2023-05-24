import { Routes, Route } from "react-router-dom";

import {
  AllMeetupsPage,
  NewMeetupPage,
  FavouritesPage,
} from './pages';

import {
  Layout,
} from './components';


export default function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>
  );
}
