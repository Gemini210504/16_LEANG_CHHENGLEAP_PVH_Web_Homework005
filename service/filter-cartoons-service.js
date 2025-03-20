export const getAllCartoonGenres = async () => {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon_genre`
  );
  const dataCartoonGenres = await res.json();
  return dataCartoonGenres;
};
