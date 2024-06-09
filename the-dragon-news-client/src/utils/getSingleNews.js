export const getSingleNews = async (id) => {
  const res = await fetch(
    // `https://the-news-portal-server.vercel.app/news/${id}`,
    // `http://localhost:5000/news/${id}`,
    `https://the-dragon-news-server-wheat-nine.vercel.app/news/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
