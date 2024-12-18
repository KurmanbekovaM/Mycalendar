// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaUserPlus } from 'react-icons/fa'; 
// import '../style/Header.css';

// function Header({ onLogout, user }) {
    
//   return (
//     <header className="header">
//       <h1></h1>
//       <nav>
//         <ul>
//         <li>
//             <Link to="/profile">login</Link>
//           </li>
//           <li>
//             <Link to="/profile">Get Started</Link>
//           </li>

//           {!user && (
//             <li>
//               <Link to="/auth">
//                 <FaUserPlus /> 
//               </Link>
//             </li>
//           )}

//           {user && (
//             <li>
//               <Link to="/" onClick={onLogout}>
//                 Выйти
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import '../style/Header.css';

function Header({ onLogout, user }) {
  return (
    <header className="header">
      <h1>Your App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUserPlus /> Get Started
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <Link to="/" onClick={onLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
