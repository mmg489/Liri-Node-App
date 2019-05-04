#Liri-Node-App
##Language interpretation and Recognition Interface

LIRI is an app based on the idea of SIRI's Speech Interpretation and Recognition Interface, except LIRI uses language instead of speech. LIRI is a command line node app. The user will provide parameters for search queries in the concert, movie, and spotify categories.
    ![](concert_this_command_GIF.gif)
    ![](movie_this_command_GIF.gif)
    ![](Spotify_this_song_GIF.gif)

The user can also input information into the random.txt file and have LIRI read that file for instructions using the command: 
    ![](Do_what_it_says_GIF.gif)

Each category has a corresponding command: 

+concert-this "artist name"
+movie-this "movie name"
+spotify-this-song "song title"

When a user prompts the concert-this commmand, they will be provided with the following details:

    + Venue Name
    + Venue location
    + Date of the event

When a user prompts the movie-this command, they will be provided with the following details:

    + Movie Title
    + Release Year
    + IMDB Movie Rating
    + Country the movie was produced
    + Language of the movie
    + Plot of the movie
    + Actors
    + Rotten Tomatoes Rating of the movie

When a user prompts the do-what-it-says, terminal will print the information in the random.txt file and execute the command

The following APIs are used to execute the search queries: 

    + Bands in Town API via Axios NPM
    + OMDB API via Axios NPM 
    + Spotify API 
    