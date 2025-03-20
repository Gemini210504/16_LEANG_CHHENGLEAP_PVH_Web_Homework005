export const getAllCartoons = async () => {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`);
  const dataCartoon = await res.json();
  return dataCartoon;
};

export const getCartoonById = async (cartoonId) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon/${cartoonId}`
    );
    console.log("Fetching book from API:", res);

    if (!res.ok) {
      throw new Error(`Failed to fetch book. Status: ${res.status}`);
    }

    const cartoon = await res.json();
    console.log("Cartoon data:", cartoon);
    return cartoon;
  } catch (error) {
    console.error(`Error fetching book with ID ${cartoonId}:`, error);
    return null;
  }
};


export const getCartoonByGenre = async (genreId) => {
  const response = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?genre=${genreId}}`
  );
  const dataCartoonBygGenre = response.json();

  return dataCartoonBygGenre;
};


