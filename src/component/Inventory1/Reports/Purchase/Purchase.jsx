import React from 'react';
import './Purchase.css';

const purchaseItems = [
  { title: "Purchase Order", subtitle: "Report", icon: "🛒" },
  { title: "Cancelled PO and GR", subtitle: "Report", icon: "❌" },
  { title: "Purchase Items", subtitle: "Report", icon: "🛒" },
  { title: "Purchase Summary", subtitle: "Report", icon: "🛒" },
  { title: "Return To Supplier", subtitle: "Report", icon: "⭕" }
];

const Purchase = () => {
  return (
    <div className="purchase-grid">
      {purchaseItems.map((item, index) => (
        <div className="purchase-item" key={index}>
          <div className="purchase-icon">{item.icon}</div>
          <div className="purchase-text">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Purchase;
