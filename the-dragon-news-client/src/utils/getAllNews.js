export const getAllNews = async () => {
  const res = await fetch(
    // "https://the-news-portal-server.vercel.app/all-news",
    // "http://localhost:5000/all-news",
    "https://the-dragon-news-server-wheat-nine.vercel.app/all-news",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  return res.json();
};
