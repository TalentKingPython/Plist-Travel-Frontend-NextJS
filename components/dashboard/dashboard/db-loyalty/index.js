import Sidebar from "../common/Sidebar";
import Header from "@/components/header/dashboard-header";

import Footer from "../common/Footer";
import LoyaltySettings from "./components/LoyaltySettings";

const index = () => {
  return (
    <>
      {/*  */}
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Loyalty Program</h1>
                {/* <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div> */}
              </div>
              <div className="col-12 py-15 px-15 rounded-22 bg-white shadow-3">
                <LoyaltySettings />
              </div>
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
