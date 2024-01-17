import { useEffect, useState } from "react";
import "./style.css";

export function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState({ name: "", avatar: "", bio: "" });

  useEffect(() => {
    setUser({
      name: "...",
      avatar:
        "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
      bio: "...",
    });
  }, []);

  function handleUserInfo() {
    fetch(`https://api.github.com/users/${name}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser({
            name: data.name,
            avatar: data.avatar_url,
            bio: data.bio,
          });
        });
      } else {
        setUser({
          name: "...",
          avatar:
            "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          bio: "...",
        });

        console.log(`${response.status}: User not found`);
      }
    });
  }

  return (
    <div className="container">
      <header>
        <h1>Github Info Picker</h1>
        <div className="wrapper">
          <input
            type="text"
            placeholder="Digite o nome do usuário..."
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="button" onClick={handleUserInfo}>
            Pegar informações
          </button>
        </div>
      </header>

      <div className="user-card">
        <img className="user-avatar" src={user.avatar} alt="Foto de perfil" />
        <h2 className="user-name">{user.name}</h2>
        <p className="user-bio">{user.bio}</p>
      </div>
    </div>
  );
}
