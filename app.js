const STORE_KEYS = { token: 'frame.tmdb.token', watchlist: 'frame.watchlist' };
const TMDB_IMAGE = 'https://image.tmdb.org/t/p/';
const TMDB_GENRES = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western' };

const DEMO_MOVIES = [
  { id: 'past-lives', title: 'Past Lives', year: 2023, release_date: '2023-06-02', rating: 7.7, runtime: 106, genres: ['Drama', 'Romance'], director: 'Celine Song', country: 'United States', language: 'English, Korean', votes: '1,340', popularity: 85, overview: 'Two deeply connected childhood friends are wrested apart after one family emigrates from South Korea. Decades later, they reunite for one fateful week as they confront ideas of destiny, love, and the choices that make a life.', cast: [['Greta Lee', 'Nora'], ['Teo Yoo', 'Hae Sung'], ['John Magaro', 'Arthur']], tagline: 'What a life we could have had.', art: 'moon', colors: ['#b78978', '#d8bca4'], trailerKey: 'kA244xewjcI' },
  { id: 'grand-budapest', title: 'The Grand Budapest Hotel', year: 2014, release_date: '2014-03-28', rating: 8.1, runtime: 99, genres: ['Comedy', 'Adventure'], director: 'Wes Anderson', country: 'United States', language: 'English', votes: '875', popularity: 90, overview: 'A legendary concierge and his devoted lobby boy race across a changing Europe to protect a priceless Renaissance painting and the inheritance at the center of a family feud.', cast: [['Ralph Fiennes', 'M. Gustave'], ['Tony Revolori', 'Zero'], ['Saoirse Ronan', 'Agatha']], tagline: 'A murder in the most elegant hotel.', art: 'hotel', colors: ['#e35e69', '#edb451'], trailerKey: '1Fg5iWmQjwk' },
  { id: 'arrival', title: 'Arrival', year: 2016, release_date: '2016-11-11', rating: 7.9, runtime: 116, genres: ['Sci-Fi', 'Drama'], director: 'Denis Villeneuve', country: 'United States', language: 'English', votes: '1,580', popularity: 94, overview: 'When mysterious spacecraft touch down around the world, a linguist is recruited to decipher their intent. The language she finds begins to reshape how she sees time, memory, and everything that matters.', cast: [['Amy Adams', 'Louise Banks'], ['Jeremy Renner', 'Ian Donnelly'], ['Forest Whitaker', 'Colonel Weber']], tagline: 'Why are they here?', art: 'arrival', colors: ['#83979b', '#cfb997'], trailerKey: 'tFMo3UJ4B4g' },
  { id: 'perfect-days', title: 'Perfect Days', year: 2023, release_date: '2023-12-21', rating: 7.9, runtime: 124, genres: ['Drama'], director: 'Wim Wenders', country: 'Japan', language: 'Japanese', votes: '420', popularity: 67, overview: 'Hirayama finds a quiet rhythm in his meticulously structured life in Tokyo. Small encounters and a rich inner world reveal the poetry in the everyday.', cast: [['Kōji Yakusho', 'Hirayama'], ['Tokio Emoto', 'Takashi'], ['Arisa Nakano', 'Niko']], tagline: 'Next time is next time. Now is now.', art: 'trees', colors: ['#879b68', '#d7c38d'], trailerKey: 'QzZBbX5A1FA' },
  { id: 'dune-part-two', title: 'Dune: Part Two', year: 2024, release_date: '2024-03-01', rating: 8.5, runtime: 167, genres: ['Sci-Fi', 'Adventure'], director: 'Denis Villeneuve', country: 'United States', language: 'English', votes: '2,110', popularity: 98, overview: 'Paul Atreides unites with Chani and the Fremen on a path of revenge against the conspirators who destroyed his family. He must choose between the love of his life and the fate of the universe.', cast: [['Timothée Chalamet', 'Paul Atreides'], ['Zendaya', 'Chani'], ['Rebecca Ferguson', 'Lady Jessica']], tagline: 'Long live the fighters.', art: 'desert', colors: ['#b97143', '#e8bd7a'], trailerKey: 'Way9Dexny3w' },
  { id: 'truman-show', title: 'The Truman Show', year: 1998, release_date: '1998-06-05', rating: 8.2, runtime: 103, genres: ['Comedy', 'Drama'], director: 'Peter Weir', country: 'United States', language: 'English', votes: '1,870', popularity: 88, overview: 'Truman Burbank lives a picture-perfect life in a picture-perfect town. There is just one detail he does not know: the cameras never stop rolling.', cast: [['Jim Carrey', 'Truman Burbank'], ['Laura Linney', 'Meryl Burbank'], ['Ed Harris', 'Christof']], tagline: 'On the air. Unaware.', art: 'sunrise', colors: ['#5b9b9d', '#efc278'], trailerKey: 'dlnmQbPGuls' },
  { id: 'anatomy-fall', title: 'Anatomy of a Fall', year: 2023, release_date: '2023-08-23', rating: 7.6, runtime: 151, genres: ['Thriller', 'Drama'], director: 'Justine Triet', country: 'France', language: 'French, English, German', votes: '660', popularity: 73, overview: 'After her husband is found dead in the snow, a writer is put on trial. Their blind son is the only witness, and the truth becomes a question that reaches far beyond the courtroom.', cast: [['Sandra Hüller', 'Sandra Voyter'], ['Swann Arlaud', 'Vincent Renzi'], ['Milo Machado-Graner', 'Daniel']], tagline: 'Did she do it?', art: 'mountain', colors: ['#637079', '#b8c2c3'], trailerKey: 'FUXawkH-ONM' },
  { id: 'whiplash', title: 'Whiplash', year: 2014, release_date: '2014-10-10', rating: 8.5, runtime: 107, genres: ['Drama', 'Music'], director: 'Damien Chazelle', country: 'United States', language: 'English', votes: '1,510', popularity: 89, overview: 'A driven young drummer enrolls at a cut-throat music conservatory, where an instructor pushes him past the limits of reason in pursuit of greatness.', cast: [['Miles Teller', 'Andrew Neiman'], ['J.K. Simmons', 'Terence Fletcher'], ['Paul Reiser', 'Jim Neiman']], tagline: 'The road to greatness can take you to the edge.', art: 'stage', colors: ['#352321', '#ad603f'], trailerKey: '7d_jQycdQGo' },
  { id: 'interstellar', title: 'Interstellar', year: 2014, release_date: '2014-11-07', rating: 8.7, runtime: 169, genres: ['Sci-Fi', 'Adventure'], director: 'Christopher Nolan', country: 'United States', language: 'English', votes: '2,370', popularity: 99, overview: 'As Earth grows inhospitable, a former pilot joins a mission through a wormhole in search of a future for humanity. The journey takes him to places where time and distance mean something entirely new.', cast: [['Matthew McConaughey', 'Cooper'], ['Anne Hathaway', 'Brand'], ['Jessica Chastain', 'Murph']], tagline: 'Mankind was born on Earth. It was never meant to die here.', art: 'space', colors: ['#25343a', '#8e9ca0'], trailerKey: 'zSWdZVtXT7E' },
  { id: 'before-sunrise', title: 'Before Sunrise', year: 1995, release_date: '1995-01-27', rating: 8.1, runtime: 101, genres: ['Romance', 'Drama'], director: 'Richard Linklater', country: 'United States', language: 'English, German, French', votes: '730', popularity: 75, overview: 'A young American and a French student meet on a train and decide to spend one night wandering through Vienna. One conversation leads to another, and the night begins to feel like a life of its own.', cast: [['Ethan Hawke', 'Jesse'], ['Julie Delpy', 'Céline'], ['Andrea Eckert', 'Wife on train']], tagline: 'Can the greatest romance of your life last only one night?', art: 'sunrise', colors: ['#aa6953', '#dbb37c'], trailerKey: '6MUcuqbGTxc' },
  { id: 'spiderverse', title: 'Spider-Man: Across the Spider-Verse', year: 2023, release_date: '2023-06-02', rating: 8.6, runtime: 140, genres: ['Animation', 'Action'], director: 'Joaquim Dos Santos', country: 'United States', language: 'English', votes: '1,680', popularity: 97, overview: 'Miles Morales swings into the multiverse and meets a team of Spider-People protecting its very existence. When they clash over how to handle a new threat, Miles must redefine what being a hero means.', cast: [['Shameik Moore', 'Miles Morales'], ['Hailee Steinfeld', 'Gwen Stacy'], ['Oscar Isaac', 'Miguel O’Hara']], tagline: 'Across the universe.', art: 'web', colors: ['#49348b', '#e64972'], trailerKey: 'cqGjhVJWtEg' },
  { id: 'little-women', title: 'Little Women', year: 2019, release_date: '2019-12-25', rating: 7.8, runtime: 135, genres: ['Drama', 'Romance'], director: 'Greta Gerwig', country: 'United States', language: 'English', votes: '1,130', popularity: 84, overview: 'Jo March reflects on her spirited life with her sisters. Though their paths diverge, each makes her own way through work, love, loss, and the meaning of home.', cast: [['Saoirse Ronan', 'Jo March'], ['Florence Pugh', 'Amy March'], ['Emma Watson', 'Meg March']], tagline: 'Own your story.', art: 'garden', colors: ['#b97f53', '#e2bd8a'], trailerKey: 'AST2-4db4ic' }
];

const PALETTE_SHAPES = {
  moon: '<circle cx="274" cy="145" r="67" fill="#efd6bc" opacity=".83"/><path d="M0 485Q65 413 119 462T257 442T399 466V640H0Z" fill="#312e39"/><path d="M0 520Q95 475 168 510T328 493T440 520V640H0Z" fill="#514252"/><path d="M0 558Q110 528 205 557T440 541V640H0Z" fill="#292d37"/>',
  hotel: '<rect x="69" y="154" width="302" height="420" rx="3" fill="#f4cf9e"/><path d="M63 192H377L359 168H82Z" fill="#f2b856"/><rect x="101" y="227" width="52" height="83" fill="#b93d56"/><rect x="175" y="227" width="52" height="83" fill="#b93d56"/><rect x="249" y="227" width="52" height="83" fill="#b93d56"/><rect x="323" y="227" width="30" height="83" fill="#b93d56"/><path d="M55 311H385M55 402H385" stroke="#cb8d68" stroke-width="6"/><rect x="180" y="430" width="80" height="144" fill="#67404b"/>',
  arrival: '<ellipse cx="238" cy="305" rx="125" ry="102" fill="#34383a"/><ellipse cx="238" cy="305" rx="116" ry="90" fill="#222a2c"/><path d="M0 462H440V640H0Z" fill="#707b7c"/><path d="M0 481Q113 439 215 472T440 460V640H0Z" fill="#3e4b4d"/><ellipse cx="238" cy="443" rx="164" ry="9" fill="#f0dfc7" opacity=".45"/>',
  trees: '<circle cx="214" cy="252" r="95" fill="#d4c28e"/><path d="M0 355Q80 310 151 361T302 347T440 356V640H0Z" fill="#71835b"/><path d="M0 446Q93 399 185 440T354 427T440 438V640H0Z" fill="#506548"/><path d="M235 352V591M215 391 164 464M246 422 297 484" stroke="#413b31" stroke-width="15" stroke-linecap="round"/><path d="M89 640V492M371 640V489" stroke="#303c30" stroke-width="14"/>',
  desert: '<circle cx="313" cy="152" r="58" fill="#efc17f" opacity=".9"/><path d="M0 375 108 302 173 371 266 260 440 386V640H0Z" fill="#9e6248"/><path d="m0 440 126-69 98 55 106-82 110 63v233H0Z" fill="#bb8254"/><path d="M0 515q92-38 191 2t249-1v124H0Z" fill="#d8a56a"/><path d="M46 588q104-31 190 1t204 2" stroke="#e9bf83" fill="none" stroke-width="4" opacity=".6"/>',
  sunrise: '<circle cx="257" cy="273" r="99" fill="#f5c982"/><path d="M0 393q91-73 174-25t134-2q69-42 132 5v269H0Z" fill="#387579"/><path d="M0 468q110-36 211 7t229-12v177H0Z" fill="#264c54"/><path d="M0 523q103-20 218 9t222-1v109H0Z" fill="#213b43"/>',
  mountain: '<path d="m0 421 91-145 52 84 91-168 88 157 62-89 56 161v219H0Z" fill="#67747a"/><path d="m167 358 67-166 85 157-61-39-26 29-27-32Z" fill="#dce0d9"/><path d="M0 482q109-49 205 4t235-4v158H0Z" fill="#364249"/><path d="M0 539q126-34 235 4t205-7v104H0Z" fill="#293438"/>',
  stage: '<ellipse cx="218" cy="95" rx="189" ry="95" fill="#c27a50" opacity=".23"/><path d="M61 0H379L307 258H137Z" fill="#c77b4e" opacity=".46"/><circle cx="220" cy="314" r="93" fill="#e3a25e" opacity=".43"/><path d="M0 472H440V640H0Z" fill="#271f1d"/><path d="M118 504Q213 445 310 504V640H118Z" fill="#51302a"/><path d="M74 575H365" stroke="#dc9854" stroke-width="3" opacity=".62"/>',
  space: '<circle cx="317" cy="168" r="58" fill="#d2d0c2"/><path d="M0 395q48-71 110 2t112-8q83-114 151 10t67 4v237H0Z" fill="#445a5c"/><path d="M0 461q86-31 174 21t164-4q55-46 102 0v162H0Z" fill="#263a40"/><path d="M0 533q104-25 207 5t233-1v103H0Z" fill="#1b2c33"/><circle cx="94" cy="122" r="2" fill="#fff"/><circle cx="372" cy="298" r="2" fill="#fff"/><circle cx="159" cy="205" r="2" fill="#fff"/>',
  web: '<path d="M0 0 440 640M440 0 0 640M220 0V640M0 320H440M53 0q172 165 0 320t0 320M387 0q-172 165 0 320t0 320M0 116q220 115 440 0M0 524q220-115 440 0" stroke="#d98aea" stroke-width="2" fill="none" opacity=".48"/><path d="M0 505 440 278v362H0Z" fill="#ec4b60" opacity=".42"/><circle cx="272" cy="251" r="81" fill="#ffd56d" opacity=".9"/>',
  garden: '<circle cx="348" cy="134" r="65" fill="#ead4a8"/><path d="M0 354q54-79 121 0t120-22q60-73 117-2t82 5v305H0Z" fill="#8a7452"/><path d="M0 427q88-50 176 8t138-3q72-56 126-2v210H0Z" fill="#68744f"/><path d="M52 524q109-46 179 0t168-3" stroke="#d1a076" stroke-width="20" fill="none" opacity=".7"/><path d="M175 410v126m100-133v137" stroke="#d8b579" stroke-width="5"/>'
};

const app = { movies: [...DEMO_MOVIES], mode: 'recommended', genre: 'All', query: '', sort: 'recommended', watchlist: readWatchlist(), showingWatchlist: false, page: 1, source: 'demo', lastFocus: null };
const movieCache = new Map(DEMO_MOVIES.map(movie => [movieId(movie), movie]));
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function readWatchlist() { try { return JSON.parse(localStorage.getItem(STORE_KEYS.watchlist) || '[]'); } catch { return []; } }
function escapeHTML(value = '') { return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function slugTitle(text = '') { return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
function posterArtwork(movie, wide = false) {
  if (movie.poster_path) return TMDB_IMAGE + (wide ? 'w1280' : 'w500') + movie.poster_path;
  if (movie.backdrop_path && wide) return TMDB_IMAGE + 'w1280' + movie.backdrop_path;
  const [first, second] = movie.colors || ['#6a7470', '#d8bca4'];
  const shapes = PALETTE_SHAPES[movie.art] || PALETTE_SHAPES.moon;
  const title = escapeHTML(movie.title || 'Untitled');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 640" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${first}"/><stop offset="1" stop-color="${second}"/></linearGradient><linearGradient id="fade" x2="0" y2="1"><stop stop-color="#111" stop-opacity="0"/><stop offset="1" stop-color="#111" stop-opacity=".88"/></linearGradient><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".78" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values=".7 0 0 0 0 0 .7 0 0 0 0 0 .7 0 0 0 0 0 .09 0"/></filter></defs><rect width="440" height="640" fill="url(#bg)"/>${shapes}<rect width="440" height="640" fill="#000" opacity=".08"/><rect width="440" height="640" filter="url(#grain)" opacity=".3"/><rect y="385" width="440" height="255" fill="url(#fade)"/><text x="25" y="48" fill="#fff" fill-opacity=".7" font-family="monospace" font-size="9" letter-spacing="3">FRAME  /  ${escapeHTML(String(movie.year || '').toUpperCase())}</text><text x="25" y="553" fill="#fff" font-family="Georgia,serif" font-size="${title.length > 22 ? '30' : title.length > 15 ? '38' : '47'}" letter-spacing="-1">${title}</text><path d="M25 575h51" stroke="#f48a65" stroke-width="2"/><text x="25" y="601" fill="#fff" fill-opacity=".7" font-family="monospace" font-size="9" letter-spacing="2">A STORY TO STAY WITH YOU</text></svg>`;
  const wideArtwork = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${first}"/><stop offset="1" stop-color="${second}"/></linearGradient><linearGradient id="leftshade"><stop stop-color="#1b211f" stop-opacity=".82"/><stop offset=".55" stop-color="#1b211f" stop-opacity=".3"/><stop offset="1" stop-color="#1b211f" stop-opacity="0"/></linearGradient><linearGradient id="foreground" x2="0" y2="1"><stop stop-color="#18201f" stop-opacity="0"/><stop offset="1" stop-color="#18201f" stop-opacity=".62"/></linearGradient><filter id="widegrain"><feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values=".7 0 0 0 0 0 .7 0 0 0 0 0 .7 0 0 0 0 0 .07 0"/></filter></defs><rect width="1280" height="720" fill="url(#sky)"/><circle cx="970" cy="198" r="137" fill="#f4dfc0" opacity=".76"/><circle cx="970" cy="198" r="184" fill="none" stroke="#f4dfc0" stroke-width="1" opacity=".28"/><path d="M0 475 142 389 232 443 378 315 514 441 660 336 803 437 960 331 1111 435 1280 355V720H0Z" fill="${first}" opacity=".63"/><path d="M0 520Q128 453 257 503T514 493T769 516T1026 485T1280 492V720H0Z" fill="${second}" opacity=".76"/><path d="M0 588Q177 523 352 578T706 565T1050 581T1280 551V720H0Z" fill="#5d5a50" opacity=".62"/><path d="M0 634Q177 585 361 632T728 613T1057 641T1280 608V720H0Z" fill="#252c2a"/><path d="M0 674Q222 635 455 678T886 657T1280 673V720H0Z" fill="#19201e"/><g fill="#fff3df" opacity=".62"><circle cx="720" cy="114" r="2"/><circle cx="847" cy="84" r="1.5"/><circle cx="1128" cy="112" r="2"/><circle cx="1094" cy="304" r="1.5"/><circle cx="783" cy="269" r="1.5"/></g><rect width="1280" height="720" fill="url(#foreground)"/><rect width="1280" height="720" filter="url(#widegrain)" opacity=".35"/></svg>`;
  const artwork = wide ? wideArtwork : svg;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(artwork);
}
function movieYear(movie) { return movie.year || (movie.release_date || '').slice(0, 4) || '—'; }
function movieGenres(movie) { return movie.genres?.length ? movie.genres : (movie.genre_ids || []).map(id => TMDB_GENRES[id]).filter(Boolean); }
function rating(movie) { return Number(movie.rating ?? movie.vote_average ?? 0); }
function movieId(movie) { return String(movie.id); }
function saved(movie) { return app.watchlist.includes(movieId(movie)); }
function saveMovie(movie) {
  const id = movieId(movie);
  movieCache.set(id, movie);
  if (saved(movie)) app.watchlist = app.watchlist.filter(entry => entry !== id);
  else app.watchlist = [id, ...app.watchlist];
  localStorage.setItem(STORE_KEYS.watchlist, JSON.stringify(app.watchlist));
  $('#watchlist-count').textContent = app.watchlist.length;
  renderMovies();
  updateFeatureSave();
  return saved(movie);
}
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('is-visible');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2100);
}
function setSourceLabel() {
  const live = app.source === 'tmdb';
  $('#source-hint').textContent = live ? 'Live movie data · powered by TMDB' : 'A handpicked collection, ready to explore.';
  $('#tmdb-credit').hidden = !live;
}

async function tmdb(path, params = {}) {
  const token = localStorage.getItem(STORE_KEYS.token);
  if (!token) throw new Error('No TMDB token is configured.');
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  Object.entries(params).forEach(([key, value]) => { if (value !== '' && value != null) url.searchParams.set(key, value); });
  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}`, accept: 'application/json' } });
  if (!response.ok) { const body = await response.json().catch(() => ({})); throw new Error(body.status_message || `TMDB returned ${response.status}.`); }
  return response.json();
}
function fromTMDB(movie) {
  return { ...movie, title: movie.title || movie.name || 'Untitled', year: (movie.release_date || '').slice(0, 4), rating: movie.vote_average || 0, genres: movie.genres?.map(genre => genre.name) || (movie.genre_ids || []).map(id => TMDB_GENRES[id]).filter(Boolean), overview: movie.overview || 'No overview is available for this film yet.', art: 'moon', colors: ['#717d79', '#b7aa8d'] };
}
function apiSort() {
  if (app.mode === 'top' || app.sort === 'rating') return 'vote_average.desc';
  if (app.mode === 'popular' || app.sort === 'popular') return 'popularity.desc';
  if (app.sort === 'newest') return 'primary_release_date.desc';
  return 'popularity.desc';
}
async function refreshCatalog({ append = false } = {}) {
  const token = localStorage.getItem(STORE_KEYS.token);
  if (!token) { app.source = 'demo'; app.movies = [...DEMO_MOVIES]; render(); return; }
  const nextPage = append ? app.page + 1 : 1;
  $('#grid-summary').textContent = 'Finding films…';
  try {
    const result = app.query.trim()
      ? await tmdb('/search/movie', { query: app.query.trim(), include_adult: false, language: 'en-US', page: nextPage })
      : await tmdb('/discover/movie', { include_adult: false, include_video: false, language: 'en-US', page: nextPage, sort_by: apiSort(), with_genres: app.genre === 'All' ? '' : Object.entries(TMDB_GENRES).find(([, name]) => name.toLowerCase() === app.genre.toLowerCase())?.[0] || '' });
    const incoming = (result.results || []).map(fromTMDB);
    incoming.forEach(movie => movieCache.set(movieId(movie), movie));
    app.movies = append ? [...app.movies, ...incoming] : incoming;
    app.page = nextPage;
    app.source = 'tmdb';
    $('#load-more').hidden = !result.total_pages || result.page >= result.total_pages;
    setSourceLabel(); renderMovies();
  } catch (error) {
    app.source = 'demo'; app.movies = [...DEMO_MOVIES];
    setSourceLabel(); renderMovies();
    showToast(`TMDB connection failed: ${error.message}`);
    $('#settings-status').textContent = 'Could not connect. Check the token and try again.';
  }
}

function renderFeature() {
  const feature = DEMO_MOVIES[0];
  $('#feature-art').src = posterArtwork(feature, true);
  $('#feature-title').textContent = feature.title;
  $('#feature-subtitle').textContent = feature.tagline;
  $('#feature-facts').innerHTML = `<span>${feature.year}</span><span class="fact-dot">·</span><span>${feature.runtime} min</span><span class="fact-dot">·</span><span>★ ${rating(feature).toFixed(1)}</span><span class="fact-dot">·</span><span>${movieGenres(feature).join(' / ')}</span>`;
  $('#feature-details').onclick = () => openDetails(feature);
  $('#feature-save').onclick = () => { const isSaved = saveMovie(feature); showToast(isSaved ? 'Added to your watchlist.' : 'Removed from your watchlist.'); };
  updateFeatureSave();
}
function updateFeatureSave() {
  const isSaved = app.watchlist.includes('past-lives');
  $('#feature-save').innerHTML = `<span aria-hidden="true">${isSaved ? '✓' : '＋'}</span> ${isSaved ? 'In your watchlist' : 'Add to watchlist'}`;
}
function genreList() {
  const genres = ['All', ...new Set(app.movies.flatMap(movieGenres))];
  return genres.slice(0, 9);
}
function renderGenres() {
  const target = $('#genre-filters');
  target.innerHTML = genreList().map(genre => `<button type="button" class="genre-chip ${app.genre === genre ? 'is-active' : ''}" data-genre="${escapeHTML(genre)}" aria-pressed="${app.genre === genre}">${escapeHTML(genre)}</button>`).join('');
  $$('.genre-chip', target).forEach(button => button.addEventListener('click', () => {
    app.genre = button.dataset.genre; app.page = 1;
    if (app.source === 'tmdb' && !app.query) refreshCatalog(); else renderMovies();
    renderGenres();
  }));
}
function currentMovies() {
  let list = [...app.movies];
  if (app.showingWatchlist) list = app.watchlist.map(id => movieCache.get(id) || DEMO_MOVIES.find(movie => movieId(movie) === id)).filter(Boolean);
  if (app.query && app.source !== 'tmdb') {
    const query = app.query.toLowerCase();
    list = list.filter(movie => [movie.title, movie.director, movie.overview, ...(movie.cast || []).map(person => person[0]), ...movieGenres(movie)].join(' ').toLowerCase().includes(query));
  }
  if (app.genre !== 'All') list = list.filter(movie => movieGenres(movie).some(genre => genre.toLowerCase() === app.genre.toLowerCase()));
  if (app.sort === 'rating' || app.mode === 'top') list.sort((a, b) => rating(b) - rating(a));
  if (app.sort === 'newest') list.sort((a, b) => movieYear(b).localeCompare(movieYear(a)));
  if (app.sort === 'popular' || app.mode === 'popular') list.sort((a, b) => (b.popularity || rating(b)) - (a.popularity || rating(a)));
  return list;
}
function cardMarkup(movie) {
  const isSaved = saved(movie), genres = movieGenres(movie);
  return `<article class="movie-card" data-id="${escapeHTML(movieId(movie))}" tabindex="0" aria-label="View details for ${escapeHTML(movie.title)}">
    <div class="poster-wrap"><img loading="lazy" src="${posterArtwork(movie)}" alt="${escapeHTML(movie.title)} poster" /><div class="poster-overlay"></div><span class="poster-score"><b>${rating(movie).toFixed(1)}</b></span><button type="button" class="save-card ${isSaved ? 'is-saved' : ''}" data-save="${escapeHTML(movieId(movie))}" aria-label="${isSaved ? 'Remove' : 'Add'} ${escapeHTML(movie.title)} ${isSaved ? 'from' : 'to'} watchlist">${isSaved ? '✓' : '＋'}</button><span class="poster-tag">${escapeHTML(genres[0] || 'FILM')} · FRAME EDIT</span></div>
    <div class="card-info"><div class="card-title-line"><span class="card-title">${escapeHTML(movie.title)}</span><span class="card-year">${escapeHTML(movieYear(movie))}</span></div><p class="card-meta"><span>${escapeHTML(genres.slice(0, 2).join(' / ') || 'Feature film')}</span><span>·</span><span>${movie.runtime ? `${movie.runtime} MIN` : 'FILM'}</span></p></div>
  </article>`;
}
function renderMovies() {
  renderGenres();
  const list = currentMovies();
  const grid = $('#movie-grid'), empty = $('#empty-state');
  grid.innerHTML = list.map(cardMarkup).join('');
  empty.hidden = list.length > 0;
  grid.hidden = list.length === 0;
  $('#load-more').hidden = app.source !== 'tmdb' || app.showingWatchlist;
  $('#grid-summary').textContent = app.showingWatchlist ? `${list.length} saved ${list.length === 1 ? 'film' : 'films'}` : `${list.length} ${app.source === 'tmdb' ? 'live results' : 'films'}${app.query ? ` for “${app.query}”` : ''}`;
  $('#browse-title').innerHTML = app.showingWatchlist ? 'Your watchlist<span class="title-period">.</span>' : app.query ? `Search results<span class="title-period">.</span>` : app.mode === 'popular' ? 'Popular right now<span class="title-period">.</span>' : app.mode === 'top' ? 'The highest rated<span class="title-period">.</span>' : 'Films worth your time<span class="title-period">.</span>';
  $('#results-kicker').textContent = app.showingWatchlist ? 'SAVED FOR LATER' : app.query ? 'YOUR SEARCH' : 'THE EDIT';
  $$('.movie-card', grid).forEach(card => {
    const movie = app.movies.find(item => movieId(item) === card.dataset.id);
    card.addEventListener('click', event => { if (!event.target.closest('[data-save]')) openDetails(movie); });
    card.addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('[data-save]')) { event.preventDefault(); openDetails(movie); } });
    const saveButton = $('[data-save]', card);
    saveButton.addEventListener('click', event => { event.stopPropagation(); const nowSaved = saveMovie(movie); showToast(nowSaved ? 'Added to your watchlist.' : 'Removed from your watchlist.'); });
  });
}
function render() { renderGenres(); renderMovies(); setSourceLabel(); }

function detailFromMovie(movie) {
  if (movie.credits || movie.videos) {
    const directors = movie.credits?.crew?.filter(person => person.job === 'Director').map(person => person.name) || [];
    const cast = movie.credits?.cast?.slice(0, 5).map(person => [person.name, person.character]) || [];
    const video = movie.videos?.results?.find(item => item.site === 'YouTube' && item.type === 'Trailer' && item.official) || movie.videos?.results?.find(item => item.site === 'YouTube' && item.type === 'Trailer');
    return { ...movie, director: directors.join(', ') || movie.director || 'Not listed', cast, trailerKey: video?.key || movie.trailerKey, runtime: movie.runtime || null, genres: movie.genres?.map(item => typeof item === 'string' ? item : item.name) || movieGenres(movie), similar: (movie.recommendations?.results || movie.similar?.results || []).slice(0, 4).map(fromTMDB) };
  }
  return movie;
}
function detailMarkup(movie) {
  const genres = movieGenres(movie), cast = movie.cast || [];
  const trailerLink = movie.trailerKey ? `https://www.youtube.com/watch?v=${encodeURIComponent(movie.trailerKey)}` : `https://www.youtube.com/results?search_query=${encodeURIComponent(`${movie.title} official trailer`)}`;
  const trailerLabel = movie.trailerKey ? 'Watch trailer' : 'Find trailer';
  const similar = movie.similar?.length ? movie.similar : DEMO_MOVIES.filter(item => item.id !== movie.id && item.genres?.some(genre => genres.includes(genre))).slice(0, 4);
  const language = movie.language || movie.original_language?.toUpperCase() || '—';
  const release = movie.release_date ? new Date(`${movie.release_date}T12:00:00`).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : movieYear(movie);
  const runtime = movie.runtime ? `${movie.runtime} min` : 'Not listed';
  return `<div class="detail-hero"><img class="detail-backdrop" src="${posterArtwork(movie, true)}" alt="" /><div class="detail-hero-copy"><p class="detail-kicker">A FRAME FILM PROFILE</p><h2 id="detail-title">${escapeHTML(movie.title)}</h2><div class="detail-meta"><span>${escapeHTML(movieYear(movie))}</span><span>·</span><span>${escapeHTML(runtime)}</span><span>·</span><span class="detail-rating">★ ${rating(movie).toFixed(1)}</span><span>·</span><span>${escapeHTML(language)}</span></div></div></div>
  <div class="detail-body"><div class="detail-left"><p class="detail-section-label">THE STORY</p><p class="detail-overview">${escapeHTML(movie.overview || 'No overview is available for this film yet.')}</p><div class="detail-section"><p class="detail-section-label">GENRES</p><div class="genre-tags">${genres.map(genre => `<span>${escapeHTML(genre)}</span>`).join('') || '<span>Uncategorized</span>'}</div></div><div class="detail-section"><p class="detail-section-label">THE DETAILS</p><div class="crew-row"><b>Release</b> ${escapeHTML(release)} <span>·</span> <b>Runtime</b> ${escapeHTML(runtime)} <span>·</span> <b>Country</b> ${escapeHTML(movie.country || '—')}</div></div><div class="detail-section"><p class="detail-section-label">TRAILER</p><div class="trailer-panel"><div class="trailer-copy"><span class="play-icon">▶</span><span><b>See it in motion</b><span>OFFICIAL TRAILER · OPENS YOUTUBE</span></span></div><a class="trailer-button" href="${trailerLink}" target="_blank" rel="noreferrer">${trailerLabel} <span>↗</span></a></div></div></div>
  <aside class="detail-right"><p class="detail-section-label">CAST</p><ul class="cast-list">${cast.length ? cast.slice(0, 5).map(person => `<li><b>${escapeHTML(person[0])}</b><span>${escapeHTML(person[1] || '')}</span></li>`).join('') : '<li><b>Cast information</b><span>Connect TMDB for full credits</span></li>'}</ul><div class="detail-section"><p class="detail-section-label">DIRECTED BY</p><div class="crew-row">${escapeHTML(movie.director || 'Not listed')}</div></div><div class="detail-section"><p class="detail-section-label">A LITTLE CONTEXT</p><div class="crew-row">${escapeHTML(movie.tagline || (movie.votes ? `${Number(movie.votes).toLocaleString()} ratings on TMDB` : 'A FRAME collection pick'))}</div></div></aside></div>
  <div class="detail-bottom"><p class="detail-section-label">YOU MIGHT ALSO LIKE</p><div class="recommendations">${similar.slice(0, 4).map(item => `<button class="recommendation" type="button" data-recommend="${escapeHTML(movieId(item))}"><img src="${posterArtwork(item)}" alt="" loading="lazy"/><span>${escapeHTML(item.title)}</span><small>${escapeHTML(movieYear(item))} · ★ ${rating(item).toFixed(1)}</small></button>`).join('') || '<p class="detail-overview">More recommendations appear when live movie data is connected.</p>'}</div></div>`;
}
async function openDetails(movie) {
  if (!movie) return;
  app.lastFocus = document.activeElement;
  const modal = $('#detail-modal'), content = $('#detail-content');
  content.innerHTML = detailMarkup(movie);
  modal.hidden = false; document.body.style.overflow = 'hidden';
  $('.modal-close', modal).focus();
  const token = localStorage.getItem(STORE_KEYS.token);
  if (token && typeof movie.id === 'number') {
    try { const detail = detailFromMovie(await tmdb(`/movie/${movie.id}`, { append_to_response: 'credits,videos,similar,recommendations', language: 'en-US' })); content.innerHTML = detailMarkup(detail); bindRecommendations(detail); }
    catch { bindRecommendations(movie); }
  } else bindRecommendations(movie);
}
function bindRecommendations(movie) {
  $$('.recommendation', $('#detail-content')).forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.recommend;
    const rec = movie.similar?.find(item => movieId(item) === id) || app.movies.find(item => movieId(item) === id) || DEMO_MOVIES.find(item => movieId(item) === id);
    if (rec) openDetails(rec);
  }));
}
function closeModal(modal) { modal.hidden = true; document.body.style.overflow = ''; app.lastFocus?.focus?.(); }
function activateMode(mode) {
  app.showingWatchlist = false; app.mode = mode; app.page = 1;
  $$('.mode-tab').forEach(tab => { const active = tab.dataset.mode === mode; tab.classList.toggle('is-active', active); tab.setAttribute('aria-selected', String(active)); });
  $('#watchlist-nav').classList.remove('is-current'); $('#discover-nav').classList.add('is-current');
  if (app.source === 'tmdb' && !app.query) refreshCatalog(); else renderMovies();
}
function showWatchlist() {
  app.showingWatchlist = true;
  $('#discover-nav').classList.remove('is-current'); $('#watchlist-nav').classList.add('is-current');
  $$('.mode-tab').forEach(tab => { tab.classList.remove('is-active'); tab.setAttribute('aria-selected', 'false'); });
  renderMovies(); $('#browse').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }

renderFeature();
$('#watchlist-count').textContent = app.watchlist.length;
render();
$('#search-input').addEventListener('input', debounce(event => { app.query = event.target.value.trim(); app.showingWatchlist = false; app.page = 1; if (app.source === 'tmdb') refreshCatalog(); else renderMovies(); }, 320));
$('#search-input').addEventListener('keydown', event => { if (event.key === 'Escape') { event.currentTarget.value = ''; app.query = ''; renderMovies(); } });
document.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#search-input').focus(); } if (event.key === 'Escape') { if (!$('#detail-modal').hidden) closeModal($('#detail-modal')); if (!$('#settings-modal').hidden) closeModal($('#settings-modal')); } });
$('#mode-tabs').addEventListener('click', event => { const tab = event.target.closest('[data-mode]'); if (tab) activateMode(tab.dataset.mode); });
$('#discover-nav').addEventListener('click', () => { app.showingWatchlist = false; $('#watchlist-nav').classList.remove('is-current'); $('#discover-nav').classList.add('is-current'); activateMode('recommended'); window.scrollTo({ top: 0, behavior: 'smooth' }); });
$('#watchlist-nav').addEventListener('click', showWatchlist);
$('#sort-select').addEventListener('change', event => { app.sort = event.target.value; if (app.source === 'tmdb' && !app.query) refreshCatalog(); else renderMovies(); });
$('#clear-filters').addEventListener('click', () => { app.query = ''; app.genre = 'All'; app.showingWatchlist = false; $('#search-input').value = ''; renderMovies(); });
$('#load-more').addEventListener('click', () => refreshCatalog({ append: true }));

const settingsModal = $('#settings-modal');
function openSettings() { app.lastFocus = document.activeElement; $('#api-token').value = localStorage.getItem(STORE_KEYS.token) || ''; $('#settings-status').textContent = ''; settingsModal.hidden = false; document.body.style.overflow = 'hidden'; $('.modal-close', settingsModal).focus(); }
$('#settings-open').addEventListener('click', openSettings); $('#footer-settings').addEventListener('click', openSettings);
$$('[data-close]').forEach(button => button.addEventListener('click', () => closeModal(button.closest('.modal-backdrop'))));
$$('.modal-backdrop').forEach(modal => modal.addEventListener('click', event => { if (event.target === modal) closeModal(modal); }));
$('#token-visibility').addEventListener('click', event => { const input = $('#api-token'), visible = input.type === 'password'; input.type = visible ? 'text' : 'password'; event.currentTarget.textContent = visible ? 'Hide' : 'Show'; event.currentTarget.setAttribute('aria-label', visible ? 'Hide token' : 'Show token'); });
$('#save-token').addEventListener('click', async () => {
  const token = $('#api-token').value.trim();
  if (!token) { $('#settings-status').textContent = 'Paste a token, or choose the demo collection below.'; return; }
  localStorage.setItem(STORE_KEYS.token, token); $('#settings-status').textContent = 'Connecting to TMDB…';
  try { await tmdb('/configuration'); app.query = ''; app.genre = 'All'; app.page = 1; $('#search-input').value = ''; closeModal(settingsModal); showToast('TMDB connected. Live movie data is ready.'); await refreshCatalog(); }
  catch (error) { localStorage.removeItem(STORE_KEYS.token); $('#settings-status').textContent = `Connection failed: ${error.message}`; app.source = 'demo'; }
});
$('#remove-token').addEventListener('click', () => { localStorage.removeItem(STORE_KEYS.token); app.source = 'demo'; app.query = ''; app.genre = 'All'; app.mode = 'recommended'; app.page = 1; $('#search-input').value = ''; $('#settings-status').textContent = 'Demo collection selected.'; setSourceLabel(); refreshCatalog(); renderMovies(); showToast('Browsing the FRAME collection.'); closeModal(settingsModal); });
