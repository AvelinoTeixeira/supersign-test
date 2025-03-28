interface Document {
    id: string;
    name: string;
    status: string;
  }
  
  export default function DocumentList({ documents }: { documents: Document[] }) {
    return (
      <ul>
        {documents.length > 0 ? (
          documents.map((doc) => (
            <li key={doc.id}>
              {doc.name} - <strong>{doc.status}</strong>
            </li>
          ))
        ) : (
          <p>Nenhum documento encontrado.</p>
        )}
      </ul>
    );
  }
  