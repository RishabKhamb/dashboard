// store.js
import demoImage from '../src/assets/a5.jpg';
// Data of order data cards
export const orderData = [
    {
        background: "#1D202A",
        iconBackground: "#2C3366",
        icon: "ph-basket",
        iconColor: "#4967F1",
        badgeIcon: "ph-plus-circle",
        badgeColor: "#8795FC",
        title: "Total Orders",
        value: "75",
        percentage: "3%",
        percentageColor: "#0E7D5F",
        percentageIcon: "ph-caret-up",
    }
    ,
    {
        background: "#1D202A",
        iconBackground: "#125447",
        icon: "ph-shopping-bag",
        iconColor: "#02C78C",
        badgeIcon: "ph-check-circle",
        badgeColor: "#84E0C7",
        title: "Total Delivered",
        value: "70",
        percentage: "3%",
        percentageColor: "#E14950",
        percentageIcon: "ph-caret-down"
    },
    {
        background: "#1D202A",
        iconBackground: "#603138",
        icon: "ph-shopping-bag",
        iconColor: "#F45C5B",
        badgeIcon: "ph-x-circle",
        badgeColor: "#F7878A",
        title: "Total Cancelled",
        value: "05",
        percentage: "3%",
        percentageColor: "#0E7D5F",
        percentageIcon: "ph-caret-up"
    },
    {
        background: "#1D202A",
        iconBackground: "#5C2C4C",
        icon: "ph-chart-line-down",
        iconColor: "#E7419C",
        badgeIcon: null,
        badgeColor: null,
        title: "Total Revenue",
        value: "$12K",
        percentage: "3%",
        percentageColor: "#0E7D5F",
        percentageIcon: "ph-caret-up"
    }
];

// Method for filtering the graph to fetch data week wise
export function getWeeklyData() {
    return {
      labels: ['5', '', '9', '', '11', '', '', '13', '', '15', '', '17', '', '', '19', '', '21', '', '', '23', '', '25', '', '27'],
      datasets: [
        {
          label: 'Activity',
          data: [4000, 9000, 4500, 4000, 6000, 6000, 5200, 5300, 4900, 1000, 7000, 8000, 6000, 11000, 8000, 12400, 17000, 11500, 8000, 4000, 6000, 11500, 8000, 6000],
          backgroundColor: "#7396FF",
          borderRadius: 24,
        },
      ],
    };
  }
  
  // Method for filtering the graph to fetch data month wise
  export function getMonthlyData() {
    return {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Activity',
          data: [30000, 40000, 35000, 45000],
          backgroundColor: "#7396FF",
          borderRadius: 24,
        },
      ],
    };
  }

  // Data for side card content
  export const actionCardData = [
    {
      iconBg: "#603138",
      iconColor: "#E86835",
      icon: "ph-crosshair",
      label: "Goals",
      buttonColor: "#494B4D"
    },
    {
      iconBg: "#2A3266",
      iconColor: "#3A53A0",
      icon: "ph-hamburger",
      label: "Popular Dishes",
      buttonColor: "#494B4D"
    },
    {
      iconBg: "#214B61",
      iconColor: "#33A5CB",
      icon: "ph-bowl-food",
      label: "Menus",
      buttonColor: "#494B4D"
    }
  ];

  // Data of orders
  export const orders = [
    {
      customerImage: demoImage,
      customerName: 'Wade Warren',
      orderNumber: '15478256',
      amount: '$124.00',
      status: 'Delivered'
    },
    {
      customerImage: demoImage,
      customerName: 'Jane Cooper',
      orderNumber: '15478256',
      amount: '$124.00',
      status: 'Pending'
    },
    {
      customerImage: demoImage,
      customerName: 'Guy Hawkins',
      orderNumber: '15478256',
      amount: '$124.00',
      status: 'Cancelled'
    },
    {
      customerImage: demoImage,
      customerName: 'Kristin Watson',
      orderNumber: '15478256',
      amount: '$124.00',
      status: 'Delivered'
    },
    {
      customerImage: demoImage,
      customerName: 'Cody Fisher',
      orderNumber: '15478256',
      amount: '$124.00',
      status: 'Pending'
    },
    {
      customerImage: demoImage,
      customerName: 'Savannah Nguyen',
      orderNumber: '15478256',
      amount: '$124.00',
      status: 'Delivered'
    }
  ];

  // Feedback data
export const feedbackData = [
    {
      name: 'Jenny Wilson',
      image: demoImage,
      rating: 4,
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
    },
    {
      name: 'Dianne Russell',
      image: demoImage,
      rating: 5,
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
    },
    {
      name: 'Devon Lane',
      image: demoImage,
      rating: 1,
      feedback: 'Normally wings are wings, but theirs are lean, meaty, and tender, and the sauce is fantastic.'
    },
    {
      name: 'Devon Lane',
      image: demoImage,
      rating: 3,
      feedback: 'Normally wings are wings, but theirs are lean, meaty, and tender, and the sauce is fantastic.'
    },  {
      name: 'Devon Lane',
      image: demoImage,
      rating: 2,
      feedback: 'Normally wings are wings, but theirs are lean, meaty, and tender, and the sauce is fantastic.'
    }
  ];