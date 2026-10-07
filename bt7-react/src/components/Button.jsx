export default function Button({ label, color, onClick }) {
  return (
    <button 
      style={{ 
        backgroundColor: color, 
        color: 'black', 
        padding: '15px 0', 
        fontSize: '18px', 
        border: '1px solid #333',
        cursor: 'pointer',
        width: '100%',
        height: '100%'
      }} 
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}