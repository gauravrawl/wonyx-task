import "../styles/invoiceSection.css";
import InvoiceHeading from "./InvoiceHeading";

const InvoiceHeader = () => {
  const jobDetails = ["Choose job details", 'Washing-122', "Car service-100", "Insurance claim-171", 'Modification-188'];
  return (
    <>
     <InvoiceHeading/>
    <div className="invoice-header">
      <div className="bill-to">
        <h4>Bill To</h4>
        <input type="text" placeholder="Company Name" />
        <textarea placeholder="Company address"></textarea>
        <div className="job-details">
        <div>

        <h4>Job ID</h4>
        <select>
    {jobDetails?.map((job, index) => (
      <option key={index}>{job}</option>
    ))}
  </select>
        </div>
        <div>
          <h4>Vin no</h4>
          <input type="text" placeholder="Enter Vin no" />
        </div>
        </div>
      </div>

      
      <div className="invoice-details">
        <div className="invoice-row">
          <label>Invoice</label>
          <input type="text" value="#0792" readOnly />
        </div>
        <div className="invoice-row">
          <label>Invoice Date</label>
          <input type="date" value="2024-10-03" />
        </div>
        <div className="invoice-row">
          <label>Term</label>
          <input type="text" value="Cash" readOnly />
        </div>
        <div className="invoice-row">
          <label>Due Date</label>
          <input type="date" value="2024-10-03" />
        </div>
      </div>
    </div>
    </>
  );
};

export default InvoiceHeader;
