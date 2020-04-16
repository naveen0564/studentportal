import React from 'react';
import Axios from 'axios';
class StudentPortal extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            student:[]
        };
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    render(){
        return (<div><br></br><br></br><table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Phno</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                this.state.student.map((ele,index)=>(
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{ele.firstName}</td>
                    <td>{ele.lastName}</td>
                    <td>{ele.emailID}</td>
                    <td>{ele.phNumber}</td>
                    <td>{ele.address.address1}, {ele.address.address2}<br/> {ele.address.city}, {ele.address.state},{ele.address.zipCode} </td>
                    <td><button onClick={this.deleteStudent} >Delete</button> <a href={`create?id=${ele.id}`} >Update</a></td>
                  </tr>
                ))
            }
        </tbody>
      </table></div>)
    }

    componentDidMount(){
        Axios.get('https://blooming-ravine-45730.herokuapp.com/api/student/getall').then((result)=>{
            this.setState({student: result.data });
            console.log(this.state);
        });
    }

    deleteStudent(){
      console.log("delete")
    }
}

export default StudentPortal;