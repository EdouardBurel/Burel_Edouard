export default function WorkHistoryCard({ title, date, description }) {
  return (
    <div className="card--work-history">
      <strong>🚧 {title}</strong>
      <p>
        <ins>{date}</ins>
      </p>
      <ul>
        {Array.isArray(description) ? (
          description.map((point, pointIndex) => (
            <li key={pointIndex}>{point}</li>
          ))
        ) : (
          <li>{description}</li>
        )}
      </ul>
      <div className="line-break"></div>
    </div>
  );
}
