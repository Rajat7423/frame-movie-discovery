# FRAME — movie discovery

FRAME is a responsive, no-build-step movie discovery site with 73 real demo films, including 25 films from Hindi, Telugu, Kannada, Malayalam, Tamil, Bengali, and Marathi cinema. Connect a TMDB read access token to browse live collections capped at **4,000 Hollywood films** (US production origin), **2,000 Bollywood films** (India origin, Hindi original language), and **1,000 Tollywood films** (India origin, Telugu original language). Results load 20 at a time, so the site only fetches more as visitors browse. The app uses TMDB's original movie backdrop when available and falls back to the original poster. TMDB records may not have an image for every movie. Explore by genre, mood, era, and minimum rating; sort the collection, get a surprise pick, save a watchlist, and open film profiles with cast, crew, trailer links, and similar recommendations. Developed by Vaibhav Yadav.

## Live site

<https://frame-movie-discovery.onrender.com>

## Run it

Open `index.html` in a browser, or serve this folder locally from the repository root:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Connect TMDB (optional)

1. Create an API read access token in your TMDB account’s API settings.
2. Open FRAME’s settings button, paste the token, and choose **Save & connect**.
3. The token is kept in this browser’s local storage. Choose **Use demo collection** to remove it.

TMDB credentials are not present in this project. Without a token, FRAME shows the bundled demo catalog; connect a token in settings to load the larger live collections and TMDB artwork. The token is sent as a bearer token to TMDB’s v3 API. Browser-side tokens can be inspected by visitors; use a small server-side proxy and keep the token out of the client for a public deployment. Collection limits are maximums: TMDB may return fewer movies for a filter, and some titles may not have a backdrop or poster. TMDB images are served from `image.tmdb.org`; this project does not download or bundle those images. TMDB data and artwork are subject to its terms and attribution requirements.

This product uses the TMDB API but is not endorsed or certified by TMDB.

TMDB setup and application authentication: [developer.themoviedb.org/docs/authentication-application](https://developer.themoviedb.org/docs/authentication-application). Discover API reference: [developer.themoviedb.org/reference/discover-movie](https://developer.themoviedb.org/reference/discover-movie). Original image path format: [developer.themoviedb.org/docs/image-basics](https://developer.themoviedb.org/docs/image-basics).
