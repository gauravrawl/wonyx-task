/* eslint-disable react/prop-types */

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {item}
          {index < items.length - 1 && <span className="breadcrumb-arrw">›</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;

