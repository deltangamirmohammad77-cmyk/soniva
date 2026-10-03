import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import PlayerBar from './components/PlayerBar.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'

import Home from './pages/Home.jsx'
import Podcasts from './pages/Podcasts.jsx'
import PodcastDetail from './pages/PodcastDetail.jsx'
import Favorites from './pages/Favorites.jsx'
import Artists from './pages/Artists.jsx'
import ArtistDetail from './pages/ArtistDetail.jsx'
import TrackDetail from './pages/TrackDetail.jsx'
import Genres from './pages/Genres.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

export default function App() {
  return (
    <FavoritesProvider>
      <PlayerProvider>
        <div className="app-shell">
          <Sidebar />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/podcasts/:id" element={<PodcastDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artists/:id" element={<ArtistDetail />} />
              <Route path="/tracks/:id" element={<TrackDetail />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <PlayerBar />
        </div>
      </PlayerProvider>
    </FavoritesProvider>
  )
}
