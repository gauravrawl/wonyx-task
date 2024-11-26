/* eslint-disable react/prop-types */
import '../styles/itemTable.css';

const ItemTable = ({ items, setItems, addItem }) => {

  /* Here we can handle list items */
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  return (
    <>

    <table className="item-table">
      <thead>
        <tr>
        <th style={{width: '5%'}}>#</th>
          <th>Item</th>
          <th >Rate</th>
          <th >Qty</th>
          <th >Amount</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={index}>
          <td><input type="number" value={index+1} onChange={(e) => handleItemChange(index, 'name', e.target.value)} /></td>
            <td><input type="text" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} /></td>
            <td><input type="number" value={item.rate} onChange={(e) => handleItemChange(index, 'rate', e.target.value)} /></td>
            <td><input type="number" value={item.qty} onChange={(e) => handleItemChange(index, 'qty', e.target.value)} /></td>
            <td>{(item.rate * item.qty).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <button onClick={addItem} className="add-item-button" disabled={items?.length > 4 ? true: false }>{items?.length > 4 ? 'You can add only 5 Items' :  '+ Add New Line'}</button>

    </>
  );
};

export default ItemTable;
