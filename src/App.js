import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {

    const teams = [
        {
            name: 'Development',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9',
        },
        {
            name: 'Front-End',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF',
        },
        {
            name: 'Data Sciense',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2',
        },
        {
            name: 'Devops',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8',
        },
        {
            name: 'UX/Design',
            primaryColor: '#D86EBF',
            secondaryColor: '#FAE5F5',
        },
        {
            name: 'Mobile',
            primaryColor: '#FEBA05',
            secondaryColor: '#FFF5D9',
        },

    ]

    const [employees, setEmployee] = useState([])

    const createdEmployee = (employee) => {
        setEmployee([...employees, employee])
    }

    return (
        <div className="App">
            <Banner/>
            <Form teams={teams.map(team => team.name)} whenCreateEmployee={employee => createdEmployee(employee)}/>

            {teams.map(team => <Team
                key={team.name}
                name={team.name}
                primaryColor={team.primaryColor}
                secondaryColor={team.secondaryColor}
                employees={employees.filter(employee => employee.team === team.name)}
            />)}

            <Footer/>
        </div>
    );
}

export default App;
