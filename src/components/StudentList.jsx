import { Component } from "react";
import "../scss/main.scss";
import Table from "react-bootstrap/Table";

class StudentList extends Component {
  render() {
    const { students, deleteStudent } = this.props;
    return (
      <div>
        <Table className="table">
          <thead>
            <tr>
              <th>🆔</th>
              <th>Firstname🙋‍♂️</th>
              <th>Lastname👴</th>
              <th>Gender</th>
              <th>Phone number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.gender}</td>
                <td>{student.nomber}</td>
                <td  className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button className="btn btn-warning btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default StudentList;