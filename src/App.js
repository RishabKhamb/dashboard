// src/App.js
import React from 'react';
import { feedbackData, orderData, orders, actionCardData } from './store';
import './App.css'; // Keep this for general styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import OrderCard from './Components/OrderCard';
import ProfitCard from './Components/ProfitCard';
import DashboardCarouselCard from './Components/DashboardCarouselCard/DashboardCarouselCard';
import ActivityChart from './Components/ActivityChart';
import SideActionCard from './Components/SideActionCard';
import OrderTable from './Components/OrderTable';
import Feedback from './Components/Feedback';
import SidebarMenu from './Components/SidebarMenu';
import NavbarMenu from './Components/NavbarMenu';


function App() {
  return (
    <div className="App">
      <SidebarMenu /> {/* Use Sidebar component */}
      <main className="main d-flex flex-column">
        <NavbarMenu />
        <div className="content py-1">
          <div className='row'>
            <h1 className='text-light'>Dashboard</h1>
            <div className="col-lg-8 mt-4">
              <div id="dashboard-card-carousel">
                <DashboardCarouselCard />
              </div>
              <div id="dashboard-cards" className='row'>
                {orderData.map((data, index) => (
                  <OrderCard
                    key={index}
                    background={data.background}
                    iconBackground={data.iconBackground}
                    icon={data.icon}
                    iconColor={data.iconColor}
                    badgeIcon={data.badgeIcon}
                    badgeColor={data.badgeColor}
                    title={data.title}
                    value={data.value}
                    percentage={data.percentage}
                    percentageColor={data.percentageColor}
                    percentageIcon={data.percentageIcon}
                  />
                ))}
              </div>
            </div>
            <div className='col-lg-4 mt-4'>
              <ProfitCard
                title="Net Profit"
                amount="6759.25"
                percentage={75}
              />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-8'>
              <ActivityChart />
            </div>
            <div className='col-lg-4'>
              <SideActionCard items={actionCardData} />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-8'>
              <OrderTable orders={orders} />
            </div>
            <div className='col-lg-4'>
              <Feedback feedbackData={feedbackData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
