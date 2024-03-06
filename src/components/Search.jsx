import { Component } from 'react'
import '../scss/main.scss'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import StudentList from './StudentList';
import AddStudentList from './AddStudentList';

class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      addModal: false,
      students: [
        {
          id: 1,
          firstName: 'Valiyulloh',
          lastName: 'Abdumitalipov',
          gender: 'Male',
          nomber: '+998903990221',
        },
        {
          id: 2,
          firstName: 'Umarzhon',
          lastName: 'Mamadaliev',
          gender: 'Male',
          nomber: '+998916761074',
        },
        {
          id: 3,
          firstName: 'Ilyos',
          lastName: 'Solmatov',
          gender: 'Male',
          nomber: '+998200030221',
        },
      ],
      filter: '',
      search: '',
      filteredStudents: [],
    }    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {this.setState({ addModal: true });}
  closeModal() {this.setState({ addModal: false });}

  addStudent = (student) => {
    const newStudents = [
      ...this.state.students,
      { ...student, id: this.state.students.length + 1},
    ]
    this.setState({
      students: newStudents,
      filteredStudents: newStudents,
    });
  };

  deleteStudent = (idStudent) => {
    this.setState({
      students: this.state.students.filter((student) => student.id !== idStudent),
    });
  }

  handleSearchChange = (e) => {
    const text = e.target.value;
    this.setState({search: text});
    this.setState({
      filteredStudents: this.state.students.filter(
        (student) => 
        student.firstName.toLowerCase().includes(text.toLowerCase()) || 
        student.lastName.toLowerCase().includes(text.toLowerCase()) || 
        student.gender.toLowerCase().includes(text.toLowerCase()) || 
        student.nomber.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  handleFilterChange = (e) => {
    const gender = e.target.value;
    this.setState({
      filter: gender,
    });
    let filtered;
    if (gender === 'All'){
      filtered = this.state.students
    }else{
      filtered = this.state.filteredStudents.filter((student) => student.gender === gender);
    }
    this.setState({
      filteredStudents: filtered,
    });
  };



  render() {
    const {search, filter, filteredStudents, addModal} = this.state
    const {closeModal, openModal, handleFilterChange} = this
    return (
      <div className='container py-3'>
        <div>
          <ButtonGroup className='w-100 flex'>
            <input value={search} onChange={this.handleSearchChange} type="text" className='form-control p-2' placeholder='Search' id='search' />
            <select name="filter" id="filter" className='form-select w-auto' value={filter} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button onClick={openModal} className='btn btn-outline-success w-auto'>Add</ button>
          </ ButtonGroup>
        </div>
        <StudentList students = {filteredStudents} deleteStudent = {this.deleteStudent} />
        <AddStudentList addModal={addModal} closeModal={closeModal} addStudent={this.addStudent} />
      </div>
    )
  }
}

export default Search
