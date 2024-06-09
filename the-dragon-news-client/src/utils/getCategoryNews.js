export const getCategoryNews = async (category) => {
  const res = await fetch(
    // `https://the-news-portal-server.vercel.app/news?category=${category}`,
    // `http://localhost:5000/news?category=${category}`,
    `https://the-dragon-news-server-wheat-nine.vercel.app/news?category=${category}`,

    {
      cache: "no-store",
    }
  );

  return res.json();
};
