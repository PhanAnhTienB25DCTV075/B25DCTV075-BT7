export default function Display({ value }) {
  return (
    <div style={{ 
      backgroundColor: '#e0e0e0', 
      padding: '20px', 
      textAlign: 'right', 
      fontSize: '24px', 
      minHeight: '30px',
      marginBottom: '5px',
      color: '#333'
    }}>
      {value || "0"}
    </div>
  );
}