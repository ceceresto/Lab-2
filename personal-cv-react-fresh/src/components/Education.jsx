import Card from "./Card";

function Education({ education = [] }) {
  return (
    <Card>
      <h2>Education</h2>
      <table border="1" cellPadding="3" cellSpacing="0">
        <thead>
          <tr>
            <th>Program</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.program}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Education;