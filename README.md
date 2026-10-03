# Soniva

A dark, neon-styled music web app built with React and React Router. Browse
real artists (Billie Eilish, Taylor Swift, Cardi B, Adele, Dua Lipa, The
Weeknd, Ariana Grande, Bad Bunny) and their real song titles, click into any
of them for a detail page, play a preview through a persistent bottom
player bar, jump out to the real recording on Spotify, save favorites, and
sign up / log in through form-validated pages.

## Stack

- React 18
- React Router (`react-router-dom`)
- Vite (dev server / bundler)
- Plain CSS with custom properties — no UI framework

## Project structure

```
src/
  components/
    Sidebar.jsx        nav with active-route highlighting
    Cards.jsx           TrackCard, ArtistCard, PodcastCard, GenreCard
    Avatar.jsx           generated neon cover art (no external images)
    PlayerBar.jsx        fixed bottom audio player
  context/
    FavoritesContext.jsx    shared "favorite tracks" state
    PlayerContext.jsx        shared "now playing" audio state
  utils/
    avatar.js            deterministic name -> gradient/initials
  data/
    musicData.js         real artists + real track titles + podcasts/genres
  pages/
    Home.jsx
    Podcasts.jsx / PodcastDetail.jsx
    Favorites.jsx
    Artists.jsx / ArtistDetail.jsx
    TrackDetail.jsx
    Genres.jsx
    Login.jsx
    Signup.jsx
  App.jsx                route definitions
  main.jsx                entry point, wraps App in BrowserRouter
  index.css               design tokens + all styling
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Why there are no celebrity photos or real audio files

Two things a hand-built app genuinely can't do on its own:

- **Photos of real people.** Hotlinking celebrity photos runs into likeness
  and licensing issues, so instead every artist/track/podcast gets a
  generated cover (`src/utils/avatar.js` — a gradient plus initials derived
  from the name). Nothing is fetched from an external image host, so
  there's nothing that can show up broken.
- **Real copyrighted recordings.** The app can't host or stream Billie
  Eilish's actual master recording, for example. So the in-app Play button
  plays a short freely-licensed demo clip (SoundHelix — standard
  placeholder audio used in web dev projects) just so the player itself
  works end-to-end, and every track also has a **"Listen on Spotify"**
  link that opens the real recording in a new tab.

If your assignment wants actual photos, drop real image files into
`src/assets/` and swap them into `musicData.js` yourself — same for audio,
if you have the rights to use it.

## How the pieces fit together

- **Playback** — clicking a track's play button (on a card, on the artist
  page, or on the track's own detail page) calls `play()` from
  `PlayerContext`, which drives a single shared `<audio>` element. The bar
  at the bottom of the screen shows what's playing, play/pause, and a
  seekable progress bar.
- **Favorites** — kept in memory via `FavoritesContext`, so they reset on
  page reload. If you want them to persist across visits, look into
  `localStorage`.
- **Detail pages** — `/artists/:id`, `/tracks/:id`, and `/podcasts/:id`
  read the `id` from the URL with React Router's `useParams` and look up
  the matching record in `musicData.js`.

## Notes for your submission

- Login and Signup don't call a real backend — they validate the form
  client-side and simulate success, which is normal for a front-end-only
  course project. If your assignment needs real auth, that's a good next
  step to add yourself (e.g. with Firebase Auth or a small Express API).
- Go through each file and make sure you can explain what it does — that's
  the best way to make sure it's genuinely yours before you hand it in.
