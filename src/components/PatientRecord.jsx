import React, { Component } from 'react';

const testPatients = [
    { 'Id': 0, 'firstname': "John", 'lastname': "Smith", 'middlename': "Joe", 'age': 30 }
];

let style = {
    tableHeader: {
        'backgroundColor': '#69efe8',
        'color': '#000000',
        'width': '300px'
    }
}
class PatientRecord extends Component {
    render() {
        let patientList = [];
        let keycount = 1;
        for (var patient of testPatients) {
            patientList.push(
                <tr key={keycount}>
                    <td>{patient.Id}</td>
                    <td>{patient.lastname}, {patient.firstname}</td>
                    <td>{patient.age}</td>
                </tr>
            );
            keycount++;
        };
        return (
            <div className="patientRecord">
                <table className="patientTable">
                    <thead className="patientTableHeader" style={style.tableHeader}>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PatientRecord;
