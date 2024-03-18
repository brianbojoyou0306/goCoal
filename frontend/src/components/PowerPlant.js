import Records from "../list.json";

function Customers(props) {
  const print = () => {
    alert("Order Placed");
    
  }
  const { item } = props;
  return (
    <div className="details">
      <h3>OUR Recomendations</h3>
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
          {item.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.avlStocks}</td>
              <td>
                <button onClick={print}>Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Customers;
