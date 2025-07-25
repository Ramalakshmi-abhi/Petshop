// import { useState } from "react";

// export const Products = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find(p => p.id === product.id);
//       if (existing) {
//         return prev.map(p =>
//           p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   return (
//     <div>
//       <h2>My Store</h2>
//       <ul>
//         {products.map(p => (
//           <li key={p.id}>
//             {p.title} – ${p.price}
//             <button onClick={() => addToCart(p)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//       <cartart cart={cart} />
//     </div>
//   );
// };