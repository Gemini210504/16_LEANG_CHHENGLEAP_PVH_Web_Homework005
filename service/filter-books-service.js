
export const getAllBookCategory = async () =>{
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category`
    );
    const dataBookCategory = await res.json();
    return dataBookCategory;
}
