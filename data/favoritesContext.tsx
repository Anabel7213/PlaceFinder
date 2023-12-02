// import { createContext, useContext, useState } from "react";

// const FavoritesContext = createContext();

// export const useFavorites = () => {
//   return useContext(FavoritesContext);
// };

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState(() => {
//     const storage = localStorage.getItem("favorites");
//     return storage ? JSON.parse(storage) : [];
//   });

//   return (
//     <FavoritesContext.Provider value={{ favorites, setFavorites }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// export default FavoritesContext;
