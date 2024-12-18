// import React from "react";

// function ProfilePage() {
//   return (
//     <div>
//       <h1>Your Profile</h1>
//       {/* Вывод информации о пользователе */}
//       <p>Name: John Doe</p>
//       <p>Email: john.doe@example.com</p>
//       {/* Добавить возможность редактировать профиль */}
//     </div>
//   );
// }

// export default ProfilePage;

// import React, { useState, useEffect } from "react";  // Добавьте этот импорт
// import axios from "axios";

// const ProfilePage = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       const token = localStorage.getItem("access_token");  // Получаем токен из localStorage
//       if (!token) {
//         setError("You need to be logged in.");
//         return;
//       }

//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
//           headers: {
//             Authorization: `Bearer ${token}`,  // Отправляем токен в заголовках запроса
//           },
//         });
//         setProfileData(response.data);
//       } catch (err) {
//         setError("Failed to load profile data.");
//         console.error("Error fetching profile data", err);
//       }
//     };

//     fetchProfileData();
//   }, );

//   if (error) return <div>{error}</div>;

//   return (
//     <div className="profile-page">
//       <h2>Profile</h2>
//       {profileData ? (
//         <div>
//           <p>Username: {profileData.username}</p>
//           <p>Email: {profileData.email}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem("access_token");  // Получаем токен из localStorage
      if (!token) {
        setError("You need to be logged in.");
        return;
      }

      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,  // Отправляем токен в заголовках запроса
          },
        });
        setProfileData(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError("Unauthorized. Please login again.");
        } else {
          setError("Failed to load profile data.");
        }
        console.error("Error fetching profile data", err);
      }
    };

    fetchProfileData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
