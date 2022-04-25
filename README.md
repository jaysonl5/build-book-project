**Install NPM** \
This application requires Node to install and run. You can download and install node at https://nodejs.org/en/download/.

**Run Application** \
After downloading the repository open a terminal:
- cd into the build-book-project folder.
- Run: `npm install -g .`
- After the install completes you can run the application via the terminal by using the following commond:
`spotify-updater < spotify.json > < changes.json > < output.json >`

**Validate included Changes file** \
After running with the included changes.json file the output.json file should show the following:
- Song ID 15 added to playlist 1.
- A new playlist assigned to user id 4 with existing song id 15 and 3 additional songs, that were also added to the song list.
- Playlist 2 should be removed.

**Scaling The Application** \
In order to scale this applciation the main change would be to use nodes stream module to read in the files asynchronously in a stream. This would allow to break up the files in smaller chunks rather than trying to read the entire thing and running into a memory error.

If it were not a limitation of some sort, creating a db to hold the spotify playlist would be ideal. You could then just ingest the change file and make updates to that database.

**Etc.** \
It took me around 3 hours of development time to complete this project. I enjoyed getting to work on this quite a bit, as it was my first time developing a runable cli node application.