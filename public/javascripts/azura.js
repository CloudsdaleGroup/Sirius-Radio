/* 
 * This file was created for Sirius Radio project.
 * Write by Sirius From Cloudsdale Group
 * CloudsdaleGroup Github: https://github.com/CloudsdaleGroup
 * Sirius Github: https://github.com/Siriusa77II
 * 
 * Only work with Azuracast.
 * Azuracast is a Free & Open-Source Web Radio Broadcast software created by Silver Eagle
 * Azuracast's GitHub: https://github.com/AzuraCast/
 * Silver Eagle GitHub: https://github.com/SlvrEagle23
 * 
 * 
 * You can freely use & edit this file for you & your Azuracast instance, But please leave these note. Thanks you :)
 */
console.log('%c Sirius Radio', 'font-size:100px;color:#fff;text-shadow:0 3px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
console.log('Version 3.0 INDEV');
console.log('Environement: Developement');
console.log('Github: https://github.com/CloudsdaleGroup/Sirius-Radio');

console.log('Set timer to 5 sec')
station2();
setInterval(function (){
    station2();
}, 5000);
//Parse API every 5 seconde.
console.log('init timer')
function station2(){
    console.log('API connection')
    var xhr = new XMLHttpRequest()
            xhr.open("GET", "https://broadcaster2.cloudsdaleradio.com/api/nowplaying/1", true)
            xhr.onreadystatechange = function(channel) {
                if(xhr.readyState == 4) {
                var data = JSON.parse(xhr.responseText)
                var elm  = document.getElementById("info")
                if(data["station"] === null){
                console.log('API IS DOWN. Please check http://status.cloudsdalegroup.com')
                $('.title').text('Station is down.')
                $('.artist').text(' ')
                $('.listener').text(' ')
                $('.next').text(' ')
            }else{
                console.log('check song title');
                $('.title').text(data.now_playing.song.title);
                console.log('Check Song artist');
                $('.artist').text(data.now_playing.song.artist);
                console.log('check listners numbers');
                $('.listener').text(data.listeners.unique);
                console.log('check song playeing next');
                $('.next').text(data.playing_next.song.text);
            }
        }
    };xhr.send();
}
//Here the title and artist is separated, you can use data.now_playing.song.text instead.