import React, { useState } from "react";

function UserNamePage() {
  const [userName, setUserName] = useState("");

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <section className="username-container">
      <h1>프로젝트를 시작하기 전에</h1>
      <p>혹시, 이름이 어떻게 되시나요?</p>
      <input type="input" value={userName} onChange={handleName} />
    </section>
  );
}

export default UserNamePage;
