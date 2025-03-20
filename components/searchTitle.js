
// import { useRouter } from "next/router";

// export default function SearchTitle({ searchBook }) {
//   const router = useRouter();

//   const handleBookClick = (bookId) => {
//     router.push(`/book_page/${bookId}`);
//   };

//   return (
//     <div className="search-results">
//       {searchBook.length > 0 ? (
//         searchBook.map((book, index) => (
//           <div
//             key={index}
//             className="book-card p-4 border border-gray-300 rounded-lg mb-4 cursor-pointer"
//             onClick={() => handleBookClick(book.id)} 
//           >
//             <h3 className="text-lg font-semibold">{book.book_title}</h3>
//             <p>{book.book_author}</p>
//           </div>
//         ))
//       ) : (
//         <p>No books found.</p>
//       )}
//     </div>
//   );
// }
