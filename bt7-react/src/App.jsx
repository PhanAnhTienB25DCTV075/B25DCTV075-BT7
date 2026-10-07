import { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import Section from './components/Section';
function VirtualCalculator() {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (label) => {
    // Xử lý reset nếu đang báo lỗi
    if (expression === "Error") {
      if (label === 'Clear' || label === 'Delete' || label === '=') {
        setExpression("");
        return;
      }
      setExpression(label);
      return;
    }

    if (label === 'Clear') {
      setExpression("");
    } else if (label === 'Delete') {
      setExpression(expression.slice(0, -1));
    } else if (label === '=') {
      if (!expression) return;
      try {
        const calculate = new Function('return ' + expression);
        const result = calculate();
        
        if (result === undefined || Number.isNaN(result)) {
          setExpression("Error");
        } else {
          setExpression(String(result));
        }
      } catch (error) {
        console.error("Lỗi tính toán:", error);
        setExpression("Error");
      }
    } else {
      setExpression(expression + label);
    }
  };

  return (
    <div style={{ width: '320px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginTop: 0 }}>Bài 1: Virtual Calculator</h2>
      
      <Display value={expression} />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', marginTop: '10px' }}>
        {/* Hàng 1 */}
        <Button color="#4CAF50" label="Clear" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="Delete" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="." onClick={handleButtonClick} />
        <Button color="#4CAF50" label="/" onClick={handleButtonClick} />
        
        {/* Hàng 2 */}
        <Button color="#4CAF50" label="7" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="8" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="9" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="*" onClick={handleButtonClick} />
        
        {/* Hàng 3 */}
        <Button color="#4CAF50" label="4" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="5" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="6" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="-" onClick={handleButtonClick} />
        
        {/* Hàng 4 */}
        <Button color="#4CAF50" label="1" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="2" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="3" onClick={handleButtonClick} />
        <Button color="#4CAF50" label="+" onClick={handleButtonClick} />
        
        {/* Hàng 5 */}
        <div style={{ gridColumn: 'span 1' }}></div>
        <Button color="#4CAF50" label="0" onClick={handleButtonClick} />
        <div style={{ gridColumn: 'span 1' }}></div>
        <Button color="#4CAF50" label="=" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

// ==========================================
// BÀI 2: COMPONENT CV
// ==========================================
function TrangCV() {
  const skills = ["Python", "C/C++", "React", "HTML/CSS", "JavaScript"];
  const projects = [
    { name: "Khái niệm", desc: "Dự án tài liệu cộng tác trên Overleaf LaTeX" },
    { name: "Trang Web Cá Nhân", desc: "Portfolio xây dựng bằng ReactJS - SPA" }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: '10px', color: '#d32f2f' }}>Bài 2: Trang CV bằng React</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '5px' }}>Phan Anh Tiến</h1>
        <p style={{ margin: 0, fontSize: '16px', color: '#555' }}>
          Sinh viên ngành Trí tuệ nhân tạo vạn vật (AIoT)<br/>
          Học viện Công nghệ Bưu chính Viễn thông (PTIT)
        </p>
      </div>

      <Section title="Học vấn & Chứng chỉ">
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>Tham gia khóa đào tạo STM32, FPGA, và Embedded Linux tại PTIT Embedded AIoT Lab.</li>
          <li>Chứng chỉ lập trình Python Level 3 COSPRO (SotaTek Education) - Điểm tuyệt đối: 1000.</li>
        </ul>
      </Section>

      <Section title="Kinh nghiệm làm việc">
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>Trợ giảng (Teaching Assistant)</strong> - Apollo English (Tháng 5/2025)<br/>
          <span style={{ color: '#666' }}>Quản lý lớp học hàng ngày và xử lý các tình huống nghiệp vụ giảng dạy.</span></li>
        </ul>
      </Section>

      <Section title="Kỹ năng chuyên môn">
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Section>

      <Section title="Dự án nổi bật">
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '15px', paddingLeft: '5px' }}>
            <strong style={{ color: '#2980b9', fontSize: '16px' }}>{project.name}</strong>
            <p style={{ margin: '5px 0 0 0', color: '#444' }}>{project.desc}</p>
          </div>
        ))}
      </Section>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '40px' }}>BÀI TẬP LTW BUỔI 7: SPA & REACT</h1>
      
      {/* Gọi Component Máy tính */}
      <VirtualCalculator />
      
      {/* Khoảng cách giữa 2 bài */}
      <div style={{ margin: '60px 0' }}></div> 

      {/* Gọi Component CV */}
      <TrangCV />
    </div>
  );
}