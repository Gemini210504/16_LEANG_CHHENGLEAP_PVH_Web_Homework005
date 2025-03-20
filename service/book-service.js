export const getAllBook = async () => {
  
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
  // const res = await fetch(
  //   `https://nextjs-homework005.vercel.app/api/book${
  //     search ? `?search=${encodeURIComponent(search)}` : ""
  //   }`
  // );
  const dataBook = await res.json();
  return dataBook;
}

export const getBookById = async (bookId) =>{
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${bookId}`
    );
    const book = await res.json();
    return book;
}


export const getBooksByCategory = async (categoryId) => {
    const response = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?query=${categoryId}`
    );
    const dataBookByCategory = response.json();

    return dataBookByCategory;
    
};

export const searchBookByTitle = async (search) =>{
 const res = await fetch(
   `https://nextjs-homework005.vercel.app/api/book?search=${search}`
 );

  const searchBookByTitle = res.json();
  return searchBookByTitle;
  
}

