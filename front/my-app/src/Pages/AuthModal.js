import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa"; 
import AuthModal from "./AuthModal";
import "../style/Header.css"; 

function Header({ onLogout, user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <h1>Интерактивный Тест</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/tests">Тесты</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>

          {!user ? (
            <li>
              <button onClick={() => openModal("login")}>
                <FaSignInAlt /> Войти
              </button>
            </li>
          ) : (
            <li>
              <Link to="/" onClick={onLogout}>
                Выйти
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Используем компонент для модального окна */}
      <AuthModal isOpen={isModalOpen} onClose={closeModal} modalType={modalType} />
    </header>
  );
}

export default Header;
