import React from "react";
import type { GreetingProps } from "@/types/user";

function Greeting({ user, age }: GreetingProps) {
  return (
    <div>
      <h1>안녕하세요, {user.name}</h1>
      {age && <p>나이는 {age}살 입니다.</p>}
    </div>
  );
}

export default React.memo(Greeting);
