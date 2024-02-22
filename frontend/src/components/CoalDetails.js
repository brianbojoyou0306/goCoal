import Records from "../list.json";

function Customers() {
  const status = "approved";
  const statusClassName =
    status === "approved" ? "text-approved" : "text-declined";
  return (
    <div className="details">
      <h3>Your Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Delivery Date</th>
            <th>Issuing Authority</th>
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
              <td className={statusClassName}>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Customers;
