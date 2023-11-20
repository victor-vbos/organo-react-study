import './Form.css'
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import {useState} from "react";

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const save = (event) => {
        event.preventDefault()
        props.whenCreateEmployee({
            name,
            position,
            image,
            team,
        })

        setTeam("")
        setImage("")
        setName("")
        setPosition("")
    }

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Fill in the data to create the employee card</h2>
                <TextField
                    required={true}
                    label="Name"
                    value={name}
                    valueChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Position"
                    value={position}
                    valueChanged={value => setPosition(value)}
                />
                <TextField
                    label="Image"
                    value={image}
                    valueChanged={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Team"
                    items={props.teams}
                    value={team}
                    valueChanged={value => setTeam(value)}
                />
                <Button>
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default Form