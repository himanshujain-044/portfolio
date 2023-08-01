import { ourCustomers } from "../../../data/ourCustomers";
import "./OurCustomer.scss";

const OurCustomer = () => {
  return (
    <div className="oc-container">
      <div className="oc-container__title">
        <h3>tile</h3>
        <span>icons1 icon2</span>
      </div>
      <div className="oc-container__content">
        {ourCustomers.map((customer) => (
          <div>
            <div>
              <img src={customer.profileImg} alt={customer.name} />
              <div>
                <span>{customer.name}</span>
                <span>{customer.businessType}</span>
              </div>
            </div>
            <p>{customer.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurCustomer;
