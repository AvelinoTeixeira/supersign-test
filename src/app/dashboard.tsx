import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import DocumentList from "../components/DocumentList";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/documents/list")
        .then((res) => res.json())
        .then((data) => setDocuments(data));
    }
  }, [status]);

  if (status === "loading") return <p>Carregando...</p>;
  if (!session) return <p>Acesso negado</p>;

  return (
    <div>
      <h1>Bem-vindo, {session.user?.name}</h1>
      <button onClick={() => signOut()}>Sair</button>
      <DocumentList documents={documents} />
    </div>
  );
}
