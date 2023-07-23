const fs = require('fs');

const dataStr = fs.readFileSync('./video_data.json', {encoding: 'UTF8'}).toString();

console.log(dataStr[0], dataStr[1], dataStr[2]);

const parsed = JSON.parse(dataStr);

parsed.videos.forEach(entry => {
  const breakPt = "Who's in the video";
  if(entry.description.includes(breakPt)) {
    const parts = entry.description.split(breakPt);
    const names = parts[1]
                  .split('Gameplay')[0]
                  .split('\n\n')[0]
                  .split('\n')
                  .filter(x => x != ':' && x != '')
                  .map(x => x.split(':')[0])
                  .map(x => {
                    x.replaceAll("(", "")
                      .replaceAll(")", "")
                      .replaceAll("https", "");
                    const split = x.split(' ');
                    const names = split.join(" ")
                                    .split("and")
                                    .join(",")
                                    .split("&")
                                    .join(",")
                                    .split(",")
                                    .map(y => y.split("(")[0])
                                    .map(y => {
                                      const parts = y.split(")");
                                      return parts.length > 1 ? parts[1] : parts[0]
                                    })
                                    .map(y => y.trim());
                    return split.length > 6 ? null : names;
                  })
                  .filter(x => x != null)
                  .flat();
    entry.players = names;
  } else {
    entry.players = null;
  }
});

const vidMeta = JSON.stringify(parsed, null, '\t');
        

fs.writeFileSync('./output.json', vidMeta);