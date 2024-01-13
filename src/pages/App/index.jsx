import "./style.css";

export function App() {
  return (
    <div className="container">
      <header>
        <h1>Github Info Picker</h1>
        <form action="#">
          <input
            type="text"
            placeholder="Digite o nome do usuário..."
            required
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
