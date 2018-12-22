import React, { Component } from 'react';

class PatientRecord extends Component {
    render() {
        return (
            <div className="patientRecord">
                <table className="patientTable">
                    <tr className="patientTableHeader">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default PatientRecord;
