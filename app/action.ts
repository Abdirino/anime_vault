"use server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/anime?page=${page}&limit=8&order=porpularity`
  );

  const data = await response.json();

  return data;
};
