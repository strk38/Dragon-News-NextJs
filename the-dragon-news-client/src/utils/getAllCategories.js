export const getAllCategories = async () => {
  const res = await fetch(
    // "http://localhost:5000/categories",
    "https://the-dragon-news-server-wheat-nine.vercel.app/categories",
    // "https://the-news-portal-server.vercel.app/categories",
  );

  return res.json();
};
