import  { useState } from 'react';
import ItemTable from './ItemTable';
import '../styles/invoiceForm.css'
import InvoiceHeader from './InvoiceSection';
import PaymentDetails from './Payments';
import TotalAmountSection from './TotalAmountSection';

const InvoiceForm = () => {
  const [items, setItems] = useState([{ name: '', rate: '', qty: '' }]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const addItem = () => {
    setItems([...items, { name: '', rate: '', qty: '' }]);
  };

  const handleFileInputChange = (event) => {
   let MAX_FILE_SIZE = 5 * 1024 * 1024
//    let MAX_WIDTH = 150* 4
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        // setErrorMessage("File size exceeds 5MB limit");
      } else {
        // setErrorMessage("");
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = new Image();
          img.onload = function () {
            // if (img.width > MAX_WIDTH || img.height > MAX_HEIGHT) {
            //   setErrorMessage(
            //     `Image resolution exceeds ${MAX_WIDTH}x${MAX_HEIGHT} pixels`
            //   );
            // } else {
              setSelectedFile(file);
              setPreviewUrl(e.target.result);
            //   setErrorMessage("");
            }
        //   };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  };
console.log('preview', previewUrl)

  return (
    <div className="invoice-form">
      <div className="invoice-header">
        <input
            type="file"
            id="addBtn"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: "none"}}
          />
           {previewUrl ?
          <div style={{position: 'relative'}}>
            <img
              src={previewUrl}
              className=""
              alt="Preview"
              style={{ width: "150px", height: "90px", borderRadius: '5px' }}
            />
            <label htmlFor="addBtn">
             
              <i
                className="fa-solid fa-pen-to-square"
                title="Edit"
                style={{
                  position: "absolute",
                  top: "-10%",
                  right: "-5%",
                  fontSize: "1.8rem",
                  cursor: "pointer",
                }}
              />
            </label>
          </div> :
          <label className="logo-placeholder" htmlFor='addBtn'><span>+ Add Your Logo</span></label>

           }
        <div className="bill-from">
        <label>Bill From</label>
        <textarea placeholder="Whom this is from"></textarea>
        </div>
      </div>

      <InvoiceHeader/>
      <ItemTable items={items} setItems={setItems} addItem={addItem}/>
      <TotalAmountSection/>
      <PaymentDetails/>
    </div>
  );
};

export default InvoiceForm;
