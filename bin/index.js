#!/usr/bin/env node
const fs = require('fs');
const Playlist = require('./playlists');
const argArray = process.argv.slice(2);
    
let inputFile;
let changeFile;
let outputFile;

if(argArray.length > 2 && argArray.length <= 3){
    inputFile = argArray[0];
    changeFile = argArray[1];
    outputFile = argArray[2];
} else {
    throw new Error("Please run the application with the following argument order: <spotify.json> <changes.json> <output.json>");
}

const getInputData = (file) => {
    try{
        return JSON.parse(fs.readFileSync(file, 'utf-8'));
    } catch(e){
        console.error(e.message)
    }    
}

let spotifyData = getInputData(inputFile);
let changeData = getInputData(changeFile);

const getUpdatedData = (spotifyData, changeData) => {
    Playlist.update(spotifyData, changeData);
    Playlist.create(spotifyData, changeData);
    Playlist.remove(spotifyData, changeData);                
    return spotifyData;
}    

const writeFile = () => {
    try{
        outputData = JSON.stringify(outputData);
        fs.writeFileSync(outputFile, outputData, 'utf-8');
    } catch(error) {
        console.error(error.message)
    }
}

let outputData = getUpdatedData(spotifyData, changeData, 'test');
writeFile(outputData);

    


