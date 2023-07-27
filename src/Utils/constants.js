const GOOGLE_API_KEY =process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCH_API_FIRST_PART = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
export const SEARCH_API_SECOND_PART ="&key="+ GOOGLE_API_KEY
export const LIVE_CHAT_COUNT = 10;

// https://cors-anywhere.herokuapp.com/{type_your_url_here} // this is the method to avoid cors error

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
// ;

