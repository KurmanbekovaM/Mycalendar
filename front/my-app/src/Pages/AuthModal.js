// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa"; // Иконка для входа
import AuthModal from "./AuthModal"; // Импортируем модальное окно
import "../style/Header.css"; // Путь к стилям Header

function Header({ onLogout, user }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модального окна
  const [modalType, setModalType] = useState("login"); // Тип модального окна

  // Функция для открытия модального окна
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
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
