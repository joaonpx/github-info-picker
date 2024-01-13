import { useState } from "react";
import "./style.css";

export function App() {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  function handleUpdateUserInfo(avatar, name, bio) {
    document.querySelector(".user-avatar").src = avatar;
    document.querySelector(".user-name").innerText = name;
    document.querySelector(".user-bio").innerText = bio;
  }

  const handleGetUserInfo = (name) => {
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => {
        handleUpdateUserInfo(data.avatar_url, data.name, data.bio);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleGetUserInfo(userName);
  };

  return (
    <div className="container">
      <header>
        <h1>Github Info Picker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome do usuário..."
            required
            onChange={handleUserNameChange}
          />
          <button type="submit">Pegar informações</button>
        </form>
      </header>

      <div className="user-card">
        <img
          className="user-avatar"
          src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
          alt="Foto de perfil"
        />
        <h2 className="user-name"></h2>
        <p className="user-bio"></p>
      </div>
    </div>
  );
}
