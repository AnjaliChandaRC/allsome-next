import { Channels, Commerce, CustomizableOperations, DataInsights, Exchange, GiveAway, InventoryReports, Maps, Purchase, ShipFast } from '../utils/icons';

export  const ROADMAP_LIST = [
  {
    numb: 1,
    title: "Connect store",
    description:
      "Send AllSome your inventory and online your preferred outlets",
  },
  {
    numb: 2,
    title: "Autorun operations",
    description: "Auto sync paid orders and wake teams to ship the orders",
  },
  {
    numb: 3,
    title: "Happy buyers",
    description: "Self-service post purchase needs anytime, everywhere",
  },
];

export  const OPERATIONS_LIST = [
  {
    cardIcon: "/assets/images/webp/frock-img.webp",
    title: "Fashion & Apparel",
    description: "Branded apparels, shoes & bags",
    btn: "Learn more >>",
  },
  {
    cardIcon: "/assets/images/webp/lipstick-img.webp",
    title: "Beauty & Cosmetics",
    description: "Imported from Korea & Japan",
    btn: "Learn more >>",
  },
  {
    cardIcon: "/assets/images/webp/mother-img.webp",
    title: "Mothers & Babies",
    description: "Number 1 Motherhood platform",
    btn: "Learn more >>",
  },
  {
    cardIcon: "/assets/images/webp/health-img.webp",
    title: "Health & Wellness",
    description: "Healthy life and happy life",
    btn: "Learn more >>",
  },
  {
    cardIcon: "/assets/images/webp/lifestyle-img.webp",
    title: "Lifestyle & home",
    description: "Appliances to hobbies",
    btn: "Learn more >>",
  },
]

export const BEST_DATA = [
    {
        cardSvg: <Channels />,
        title: "Multiple channels",
        description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.",
    },
    {
        cardSvg: <ShipFast />,
        title: "Ship fast",
        description: "Domestic, international, Cash on Delivery (COD), standard, same day, one hour or self pick up.",
    },
    {
        cardSvg: <Commerce />,
        title: "E-commerce malls",
        description: "Free access to 3,000+ locations. Be next to your shopper to make the experience real.",
    },
    {
        cardSvg: <Maps />,
        title: "Shareable maps",
        description: "Get discovered through world maps, share with single click and welcome shoppers.",
    },
    {
        cardSvg: <Purchase />,
        title: "Try before purchase",
        description: "Let shoppers find and order the most suitable one, they will definitely return again!",
    },
    {
        cardSvg: <Exchange />,
        title: "Return & exchange",
        description: "Return to store and exchange same day. Free shipping and 10x faster return experience.",
    },
    {
        cardSvg: <CustomizableOperations />,
        title: "Customizable operations",
        description: "Share your e-commerce procedures and outlets execute as instructed. Take control and work from anywhere.",
    },
    {
        cardSvg: <InventoryReports />,
        title: "Inventory reports",
        description: "Clean & report for inbound, in-store and shipped SKUs. By orders, locations and dates.",
    },
    {
        cardSvg: <GiveAway />,
        title: "Giveaway & samples",
        description: "Reach more shoppers with your trial sets and let the products sell for themselves!",
    },
    {
        cardSvg: <DataInsights />,
        title: "Data insights",
        description: "Get actionable insights and know how your shoppers interact with your products in real life.",
    },
];