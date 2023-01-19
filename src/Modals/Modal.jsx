import React, { useEffect, useState } from 'react';
import style from './Modal.module.css';
import jsonData from '../Data';
import AutoComplete from './AutoComplete';

function Modal({ setShowModal }) {
    const [teams, setTeams] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        selectedTeam: "", selectedEmployee: "", newTeam: "", newEmployee: ""
    })
    const [error, setError] = useState("")

    useEffect(() => {
        const teams = jsonData?.map(item => item?.team);
        setTeams(teams)
    }, [])

    useEffect(() => {
        const obj = jsonData?.filter(item => item?.team === formData?.selectedTeam);
        setEmployees(obj[0]?.employees);
    }, [formData?.selectedTeam])


    const validate = () => {
        const isEmpty = Object.values(formData).some(x => x === null || x === '');
        if (isEmpty) setError("Please fill all fields.")
        else setError("");
        return isEmpty;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isError = validate();
        if (isError === false) {
            jsonData.push({
                "team": formData?.newTeam,
                "employees": [formData?.newEmployee]
            });
            setShowModal(false)
        }
    };

    return (
        <>
            <div className={style.backdrop}>
                <button className={style.closeModal} onClick={() => setShowModal(false)}>X</button>
                <form onSubmit={handleSubmit}>
                    <div className={style.column}>
                        <label>
                            Select Team
                            <AutoComplete data={teams} formData={formData} setFormData={setFormData} name="team" />
                        </label>
                        <label>
                            Select Employee
                            <AutoComplete data={employees} formData={formData} setFormData={setFormData} name="employee" />
                        </label>
                    </div>

                    <div className={style.column}>
                        <label>
                            New Team
                            <div>
                                <input type="text" onChange={(e) => setFormData({ ...formData, newTeam: e.target.value })} placeholder="type something.." />
                            </div>
                        </label>
                        <label>
                            New Team
                            <div>
                                <input type="text" onChange={(e) => setFormData({ ...formData, newEmployee: e.target.value })} placeholder="type something.." />
                            </div>
                        </label>
                    </div>
                    <button type='submit' className={style.btn}>Submit</button>
                </form>
                <span className={style.error}>{error}</span>
            </div>
        </>
    )
}


export default Modal;