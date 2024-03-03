import React, { Component } from "react";
import EditStudent from "./EditStudent";

export class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      students: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          group: "React N32",
          doesWork: false,
        },
        {
          id: 2,
          firstName: "Tom",
          lastName: "Smith",
          group: "React N45",
          doesWork: true,
        },
        {
          id: 3,
          firstName: "Bruce",
          lastName: "Li",
          group: "React N50 ",
          doesWork: false,
        },
      ],
    };
  }

  closeAddModal = () => this.setState({ addModal: false });
  openAddModal = () => this.setState({ addModal: true });

  render() {
    const { students, addModal } = this.state;
    const { closeAddModal, openAddModal } = this;
    // const { Delete } = this;
    return (
      <div>
        {
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Group</th>
                <th>Does work?</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr key={student.id}>
                  <td>{i + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.group}</td>
                  <td>{student.doesWork ? "Yes" : "No"}</td>
                  <td className="d-flex gap-2">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={openAddModal}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      //   onclick={deleteStudent.id(students.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
        <EditStudent addModal={addModal} closeAddModal={closeAddModal} />
      </div>
    );
  }
}

export default StudentList;
