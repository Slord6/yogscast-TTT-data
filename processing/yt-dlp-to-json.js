const fs = require('fs');

const dataStr = fs.readFileSync('./video_data.txt', {encoding: 'UTF8'}).toString();

console.log(dataStr[0], dataStr[1], dataStr[2]);

const parsed = JSON.parse(dataStr);

parsed.videos.forEach(entry => {
  const breakPt = "Who's in the video";
  if(entry.description.includes(breakPt)) {
    const parts = entry.description.split(breakPt);
    const names = parts[1]
                  .split('Gameplay')[0]
                  .split('\n')
                  .filter(x => x != ':' && x != '')
                  .map(x => x.split(':')[0].split(' ')[0]);
    entry.players = names;
  } else {
    entry.players = null;
  }
});

const vidMeta = JSON.stringify(parsed, null, '\t');
        

fs.writeFileSync('./output.json', vidMeta);