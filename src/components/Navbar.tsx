import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#ccc" }}>
      <h1>DocSigning</h1>
      {session && (
        <button onClick={() => signOut()}>Sair</button>
      )}
    </nav>
  );
}
