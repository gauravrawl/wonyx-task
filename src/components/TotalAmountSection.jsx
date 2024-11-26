import '../styles/totalAmountSection.css';

const InvoiceSummary = () => {
  return (
    <div className="invoice-container">
      <div className="notes-section">
        <div className="field">
          <label htmlFor="notes">Notes:</label>
          <textarea id="notes" placeholder="Whom this is to" />
        </div>
        <div className="field">
          <label htmlFor="terms">Terms & Condition:</label>
          <textarea id="terms" placeholder="Whom this is to" />
        </div>
      </div>

      <div className="summary-section">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>$390.00</span>
        </div>
        <div className="summary-row">
          <span>GST</span>
          <div className="input-group">
            <input type="text" placeholder="$ 0.00" />
            <button className="refresh-btn">↻</button>
          </div>
        </div>
        <div className="action-links">
          <span>+ Add Discount</span>
          <span>+ Add taxes</span>
        </div>
        <div className="summary-row total">
          <span>Invoice total</span>
          <span>$400.00</span>
        </div>
        <div className="summary-row">
          <span>Deposit</span>
          <input type="text" placeholder="$ 140" />
        </div>
        <div className="summary-row amount-due">
          <span>Amount due</span>
          <span>$260.00 AUD</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;
