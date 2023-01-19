import { useState } from 'react';
import Modal from '../Modals/Modal';
import EmployeeTable from '../Tables/EmployeeTable';
import TeamTable from '../Tables/TeamTable'
import style from './Home.module.css';
export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={style.container}>

        <div>
          <h3>Team Table</h3>
          <TeamTable />
        </div>

        <button onClick={() => setShowModal(!showModal)}>Add Team</button>

        <div className={style.wrapper}>
          <h3>Employee Table</h3>
          <EmployeeTable />
        </div>

      </div>

      {showModal && (
        <Modal setShowModal={setShowModal}/>
      )}
    </>
  )
}
