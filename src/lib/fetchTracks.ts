import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQAVV8PQY4yFw0UY1GMThpXjS6zRrJUpgIrBPLbA4_bU6zT4MOotDoSdeV4B209zRMqay77tXQonbsDl7K_q6wdpLm9wl6s77on6Oiux-JqtvLRHsTOUTco5c26oTghsEpwwXoI60Q9Bph1f5zhEKiww1WfiulgFlKEVNEXmDXCRdW0hjC5288CwsPcNtKM4LY_1SnhfqMlN2kXnFGsZB27mQrOgBaPzsMTP90UFPtOQkfC-42bkb6Qkbvp3jgJr73dhbJIbz_WKXRp40YBt7p0xo9tPnF3Xh-QNNnT463MHUOTPFyJz2jlwwmsb_0s72jDOM0GuDsSyJ270Qq7SPiRDecmynTEfmOidKQfSH9NtVhw';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
