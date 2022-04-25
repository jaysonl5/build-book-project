const validate = require('./validate');

const create = (spotifyData, changeData) => {
    changeData.playlist_new.map(newPlaylist => {
        if(validate.checkExists(spotifyData.users, newPlaylist.owner_id)){
        if(validate.checkAnyExists(spotifyData.songs, newPlaylist.songs)){
            let song_ids = newPlaylist.songs.map(songs => songs.id);
            let pushPlaylist = { "id" : newPlaylist.id, "owner_id" : newPlaylist.owner_id, "song_ids" : song_ids}; 
            
            spotifyData.playlists.push(pushPlaylist);

            newPlaylist.songs.map(song => {
                if (!spotifyData.songs.some(item => item.id === song.id)){
                    spotifyData.songs.push(song);
                }
            })

            return spotifyData;
        } else {
            console.error("Error: Please use at least one existing song in the new playlist.")
        }
    } else {
        console.error("Error: New playlist " + newPlaylist.id + " is assigned to an unknown user.")
    }

    })
}

const update = (spotifyData, changeData) => {
    changeData.playlist_update.map(update => {
        if(validate.checkExists(spotifyData.playlists, update.id)){
            if(validate.checkExists(spotifyData.songs, update.song_id)){            
                spotifyData.playlists.some(playlist => {
                    if(playlist.id === update.id){
                        playlist.song_ids.push(update.song_id);
                    }                                        
                })
            } else {
                console.error("Error: Attempt to add unknown song id: " + update.song_id + " in playlist " + update.id);
            }               
        } else {
            console.error("Error: Attempt to update unknown playlist id:" + update.id);
        }
    })
}

const remove = (spotifyData, changeData) => {
    changeData.playlist_delete.map(deleteList => {
        spotifyData.playlists = spotifyData.playlists.filter(playlist => playlist.id !== deleteList.id);
        return spotifyData;
     })
}

module.exports = {
    create, update, remove
}