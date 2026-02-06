export default function ProgressBar({ width }) {
  return (
    <div className="container">
      <div className="innerContainer" style={{ width: `${width}%` }}>
        <p>{width} %</p>
      </div>
    </div>
  );
}
