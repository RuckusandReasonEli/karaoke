# Karaoke Queue

Projected karaoke screen with a YouTube player and a singer list. Guests scan the QR code to pick a song on their phone and join the list.

Live: https://ruckusandreasoneli.github.io/karaoke/

Open the live address in Brave on the projector computer. Press F for full screen, N for next singer.

## Karaoke Ad Skipper (Brave extension)

The `ad-skipper` folder is a small Brave extension for the projector computer. When a YouTube ad plays in the karaoke player it mutes the sound, shows the carnival "Song Loading. Ads Suck." banner, waits 10 seconds, then clicks Skip at random 0.2 to 1 second intervals. Sound comes back when the song starts. It only runs inside YouTube players on this karaoke site.

Install once:
1. Download `ad-skipper.zip` (or this repo) and unzip it.
2. In Brave, open `brave://extensions` and turn on **Developer mode** (top right).
3. Click **Load unpacked** and choose the `ad-skipper` folder.
4. Reload the karaoke page.

Settings (timing, fallbacks) are at the top of `ad-skipper/content.js`.
