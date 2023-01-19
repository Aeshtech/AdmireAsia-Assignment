import jsonData from '../Data';
import style from './Table.module.css';

function TeamTable() {

  return (
    <>
      <table>

        <thead>
          <tr>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>

              <td >
                {item?.team}
                <div className={style.tooltip}>
                  {
                    item?.employees.map((employee, i) => (
                      <span key={i}>{employee}</span>
                    ))
                  }
                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </>
  );
}

export default TeamTable;