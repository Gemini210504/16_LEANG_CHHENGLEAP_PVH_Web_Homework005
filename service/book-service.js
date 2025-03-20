export const getAllBook = async () => {
  
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
  const dataBook = await res.json();
  return dataBook;
}

// export const getBookById = async (bookId) =>{
//     const res = await fetch(
//       `https://nextjs-homework005.vercel.app/api/book/${bookId}`
//     );
//     const book = await res.json();
//     return book;
// }

export const getBookById = async (bookId) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${bookId}`
    );
    console.log("Fetching book from API:", res);

    if (!res.ok) {
      throw new Error(`Failed to fetch book. Status: ${res.status}`);
    }

    const book = await res.json();
    console.log("Book data:", book);
    return book;
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    return null;
  }
};
