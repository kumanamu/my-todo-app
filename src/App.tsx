import "./App.css";
import { Greeting, Counter, LoginForm, TodoApp } from "./components";
import usePosts from "./hooks/usePosts";
import type { User } from "./types/user";

function App() {
  const jang: User = {
    id: 1,
    name: "장원영",
    email: "jang@ive.com",
    isActive: true,
  };

  const { posts, loading, error } = usePosts();

  return (
    <div>
      <h1>React + TypeScript + Vite 데모</h1>

      <Greeting user={jang} age={20} />
      <Counter />
      <LoginForm />
      <TodoApp />

      <hr />
      <h2>Posts API</h2>
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {posts.slice(0, 5).map((p) => (
          <li key={p.id}>
            <strong>#{p.id}</strong> {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
