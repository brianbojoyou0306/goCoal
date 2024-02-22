
import Records from "../list.json";

function Customers() {

 function print() {
  alert("order placed");
}
  
    return (
      <div className="details">
        <h3>PowerPlant - Coal mines</h3>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Coal Mine Name</th>
              <th>Location </th>
              <th>Stocks Availabe</th>
              <th>Place order</th>
            </tr>
          </thead>
          <tbody>
            {Records.map((record, index) => (
              <tr key={index}>
                <td>{record.order}</td>
                <td>{record.date}</td>
                <td>{record.issue}</td>
                <td>{record.duration}</td>
                <td onClick={print}>
                    <button>{record.status}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default Customers;
