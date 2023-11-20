import './Employee.css'

const Employee = ({name, position, image, backgroudColor}) => {
    return (
        <div className="employee">
            <div className="header" style={{ backgroundColor: backgroudColor }}>
                <img src={image} alt={name}/>
            </div>
            <div className="content">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Employee