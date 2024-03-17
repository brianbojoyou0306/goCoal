import Records from "../logistics.json";

function Customers() {
  const print = () => {
    alert("work");
  };
  return (
    <div className="details">
      <h3>Your Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Starting</th>
            <th>Ending</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Records.map((record, index) => (
            <tr key={index}>
              <td>{record.order}</td>
              <td>{record.date}</td>
              <td>{record.issue}</td>
              <td>{record.duration}</td>

              <td className="logistics_status">
                <button onClick={print} className="accept">
                  Accept
                </button>
                <button onClick={print} className="reject">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Customers;
