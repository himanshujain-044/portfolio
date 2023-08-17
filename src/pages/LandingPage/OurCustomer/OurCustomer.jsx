import { ourCustomers } from "../../../data/ourCustomers";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import "./OurCustomer.scss";
import { Typography } from "@mui/material";
import { sectionTitleFS } from "../../../utility/responsiveUI";

const OurCustomer = () => {
  return (
    <div className="oc-container">
      <div className="oc-container__upperrpart">
        <Typography
          variant="h3"
          sx={{ fontSize: sectionTitleFS }}
          className="oc-container__upperrpart--title"
        >
          Hear what our customers say : )
        </Typography>
        <span className="oc-container__upperpart--icons">
          <span>
            <ChevronLeftOutlinedIcon />
          </span>
          <span>
            <ChevronRightOutlinedIcon />
          </span>
        </span>
      </div>
      <div className="oc-container__content">
        {ourCustomers.map((customer) => (
          <div className="oc-container__content--box">
            <div>
              <img src={customer.profileImg} alt={customer.name} />
              <div className="oc-container__content--cus-detail">
                <span>{customer.name}</span>
                <span className="oc-container__content--busines-type">
                  {customer.businessType}
                </span>
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
