import { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class AddStudentList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      student: {
        firstName: '',
        lastName: '',
        gender: '',
        nomber: ''
      },
    };
  }
  handleChange = (e) => {
    this.setState({
      ...this.state.student,
      student: {
        [e.target.id]: e.target.value,
      },
    })
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.closeModal();
    this.props.addStudent(this.state.student);
    this.setState({
      student: {
        firstName: '',
        lastName: '',
        gender: '',
        nomber: '',
      },
    });
  };
  render() {
    const {closeModal, addModal} = this.props;
    const {firstName, lastName, gender, nomber} = this.state.student;
    return (
      <div>
        <Modal show={addModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add student</ Modal.Title>
          </ Modal.Header>
          <Modal.Body>
            <form>
              <div className='mb-3'>
                <label htmlFor="firstName" className='form-label'>Firstname🙋‍♂️</label>
                <input onChange={this.handleChange} value={firstName} placeholder='Valiyulloh' type="text" className='form-control' id='firstName' />
              </div>
              <div className='mb-3'>
                <label htmlFor="lastName" className='form-label'>Lastname👴</label>
                <input onChange={this.handleChange} value={lastName} placeholder='Abdumitalipov' type="text" className='form-control' id='lastName' />
              </div>
              <div className='mb-3'>
                <label htmlFor="gender" className='form-label'>Gender</label>
                <select className='form-control' id='gender' value={gender} onChange={this.handleChange}>
                  <option value="Male">Gender</option>
                  <option value="Male">Male🧑‍🏫</option>
                  <option value="Female">Female🧑‍🏫</option>
                </select>
              </div>
              <div className="mb-3">
                <label className='form-label' htmlFor='phone'>Phone</label>
                <input value={nomber} onChange={this.handleChange} className='form-control' type="tel" id="phone" name="phone" pattern="^\+998(33|55|77|88|9\d{1})(\d{7})$" placeholder="+998 99-999-99-99"/>
              </div>
            </form>
          </ Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cancel❌</Button>
            <Button variant="primary" onClick={this.handleAdd}>Add📥</Button>
          </ Modal.Footer>
        </ Modal>
      </div>
    )
  }
}

export default AddStudentList