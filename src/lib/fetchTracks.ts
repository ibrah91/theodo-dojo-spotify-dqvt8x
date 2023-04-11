const apiToken =
  'BQAdMFj3GqmRIVQLdFu5YPEKYDuW1iZSHL1Z8iSRwErWbr27WMDKJAzfi9fd0Z0lAG3ENQNU-600SD4xR-43mMTcisyZlkU9pH74gnW3sTaUF3AbNkxLU5egHf7aFgukH9L1RDWp4urqYZ8JAhGJIc2N8eSvFE95X1Q8D1WOnuDdNxJEWYh6wf0FVgDyLICcPI-4uPcg6wSqvtvHywe07krnArByS4n2wUQva0NaTfhgxzk06VDEC8uH_5LdzTTsxOxQleKlX0GYua_S02CtX6ZqTrjA8sZr61d0FO1Z_O8lhUmjjMaa7cbcebHzYuoyx6wMlXERtqTsw2K1FcK4l23kKupMuHwhcCFTCMZACkSI50o';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
