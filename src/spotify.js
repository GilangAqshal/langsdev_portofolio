// const client_id = '9bc48b8411b04d5c9b8e7a6166222147';
// const client_secret = 'c1bb7fceea174cd0aff4c7b8554a7945';
// const refresh_token = 'AQD5N3yLIcgB_7AUjVY0VpvptTA_tI2QNJxpbtpkZ0HVPcLgKY61cwXF56QNRNLov65T1AS00iKcId1aFkGBINAVsbHVAD4l7rWTquWVN67Yv4jXVslfGhFdeqOWZSNBOys';

// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

// const getAccessToken = async () => {
//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
//     },
//     body: new URLSearchParams({
//       grant_type: 'refresh_token',
//       refresh_token,
//     }),
//   });

//   return response.json();
// };

// export const getSpotifyStatus = async () => {
//   try {
//     const { access_token } = await getAccessToken();

//     const response = await fetch(NOW_PLAYING_ENDPOINT, {
//       headers: { Authorization: `Bearer ${access_token}` },
//     });

//     if (response.status === 403) {
//         console.error("AKSES DITOLAK: Pastikan email di User Management dashboard Spotify sudah benar dan sesuai dengan akun yang login di aplikasi.");
//         return null;
//     }

//     if (response.status === 204 || response.status > 400) {
//       const lastPlayedRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
//         headers: { Authorization: `Bearer ${access_token}` },
//       });
//       const lastPlayedData = await lastPlayedRes.json();
//       return { ...lastPlayedData.items[0].track, isPlaying: false };
//     }

//     const song = await response.json();
//     return { ...song.item, isPlaying: song.is_playing };
//   } catch (error) {
//     return null;
//   }
// };