import Breadcrumb from "../components/Breadcrumb"
import InvoiceForm from "../components/InvoiceForm"

const DashboardHome = () => {
  const breadcrumbItems = ["Dashboard", "Part Invoice", "Create Invoice"]
  
  return (
    <div>
        <Breadcrumb items={breadcrumbItems} />
        <div className="Invoice-area">
            <InvoiceForm />
        </div>
    </div>
  )
}

export default DashboardHome
