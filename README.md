# Getting Started with this app

This app displays data from the NASA Events API about extreme weather and environmental events across the world. It is an extension of an excellent online tutorial by Brad Traversy [YouTube link](https://www.youtube.com/watch?v=ontX4zfVqK8). I've added functionality to enable the user to display different kinds of events, an alert message if a selected category has no current data, and added media queries to enable the app to work on different size screens.

A hosted version is [here](https://weather-events-jp.glitch.me/). I've used a free Google Maps API key so the current version of the app has 'for development purposes only' text.

## Getting Started

Follow the instructions below to get a local version up and running.

### Installation

1. To begin with, (fork and) clone this repo.

```
$ git clone https://github.com/jonp2020/natural-phenomena.git
```

2. Navigate into the directory and install the required dependencies.

```
$ cd natural-phenomena
$ npm install
```

3. Next you'll need to get a Google Maps API key. Head over to [Google's cloud platform](https://cloud.google.com/maps-platform) and sign up /sign in to create an API key.

[This link to Google's developer page](https://developers.google.com/maps/documentation/javascript/get-api-key) has a nice step by step walk through to get an API key.

4. Once you've got API key, create a .env file in the root directory of the app. Add your API key here by typing in the following:

```
REACT_APP_MAP=PASTE_YOUR_API_KEY_HERE
```

5. Get the app running on your machine by typing the following into your terminal:

```
$ npm start
```

6. A tab will be opened in your browser at the address **localhost:3000**.

7. Enjoy!

## Built Using

- Create React App
- React
- Google Map API
- Google-Map-React
- React Icons
