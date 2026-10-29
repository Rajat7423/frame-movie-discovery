# FRAME — movie discovery

FRAME is a responsive, no-build-step movie discovery site. It includes a handpicked demo catalog, movie search and genre filters, sorting, movie detail sheets, trailer links, similar-film suggestions, and a saved watchlist. A TMDB read access token can be connected in the app to search live results and load full movie credits, runtime, trailers, and recommendations.

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

TMDB credentials are not present in this project, so the app starts with its bundled demo catalog. The token is sent as a bearer token to TMDB’s v3 API. Browser-side tokens can be inspected by visitors; use a small server-side proxy and keep the token out of the client for a public deployment. TMDB data may be subject to its terms and attribution requirements.

This product uses the TMDB API but is not endorsed or certified by TMDB.

TMDB setup and application authentication: [developer.themoviedb.org/docs/authentication-application](https://developer.themoviedb.org/docs/authentication-application). Search and discover API reference: [developer.themoviedb.org/docs/finding-data](https://developer.themoviedb.org/docs/finding-data).
