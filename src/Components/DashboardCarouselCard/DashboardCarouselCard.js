import React from "react";
import OrderCard from "../OrderCard";
import { orderData } from "../../store";
const DashboardCarouselCard = () => {
    return <div id="dashboard-card-carousel" className='row show-on-small'>
        <div className='col-12'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {orderData.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <OrderCard
                                key={index}
                                background={item.background}
                                iconBackground={item.iconBackground}
                                icon={item.icon}
                                iconColor={item.iconColor}
                                badgeIcon={item.badgeIcon}
                                badgeColor={item.badgeColor}
                                title={item.title}
                                value={item.value}
                                percentage={item.percentage}
                                percentageColor={item.percentageColor}
                                percentageIcon={item.percentageIcon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

export default DashboardCarouselCard;