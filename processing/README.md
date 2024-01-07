## Extracting data

- Run `yt-dlp.exe "https://www.youtube.com/playlist?list=PLqgEz3KZA7wo_DrWLKdBG2MSGwwUP8q2c" --print "%(.{id,title,upload_date,description})s" > .\video_data.txt`
- Use the [repair tool](https://codebeautify.org/json-fixer) to fix the output
    - Over-write the contents of `video_data.json` (`{"videos": <fixed data>}`)
- Run `node yt-dlp-to-json`
- Check `output.json` for errors
- Rename `output.json` to `video_data.json`
