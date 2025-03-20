// export const getAllBookCategory = async () => {
//   try {
//     const res = await fetch(
//       "https://nextjs-homework005.vercel.app/api/book_category",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         cache: "no-store", // Avoids caching issues in Next.js
//       }
//     );

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const dataBookCategory = await res.json();
//     return dataBookCategory;
//   } catch (error) {
//     console.error("Error fetching book categories:", error);
//     return { payload: [] }; // Return an empty array to prevent crashes
//   }
// };

export const getAllBookCategory = async () =>{
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category`
    );
    const dataBookCategory = await res.json();
    return dataBookCategory;
}
