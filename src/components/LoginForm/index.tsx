import React, { useState, type ChangeEvent, type FormEvent } from "react";

type LoginFormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const [form, setForm] = useState<LoginFormValues>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name !== "email" && name !== "password") return;
    setForm((prev) => ({ ...prev, [name]: value } as LoginFormValues));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("로그인:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="이메일"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="비밀번호"
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default React.memo(LoginForm);
