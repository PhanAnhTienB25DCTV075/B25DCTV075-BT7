export default function Section({ title, children }) {
  return (
    <div className="cv-section">
      <h2>{title}</h2>
      <div className="section-content">
        {children} {/* Nội dung bên trong thẻ Section sẽ hiển thị ở đây */}
      </div>
    </div>
  );
}