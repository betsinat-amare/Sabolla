import type { Partner } from '../types/partner';
import FIRECHEM from '../assets/global_images/FIRECHEM.png';
import JSHK from '../assets/global_images/JSHK.png';
import leviathan from '../assets/global_images/leviathan.png';
import meraj from '../assets/global_images/meraj.png';
import mototruck from '../assets/global_images/mototruck.png';
import rosenbauer from '../assets/global_images/rosenbauer.svg';
import RESQTEC from '../assets/global_images/RESQTEC.png';
import unitexport from '../assets/global_images/unitexport.png';

export const PARTNERS: Partner[] = [
  {
    name: "Meraj International FZC",
    description: "Meraj International FZC is a leading manufacturer of custom-built special application and specialty vehicles across the GCC and MENA region. The company delivers innovative municipal, rescue, firefighting, jetting, vacuum, and industrial vehicles.",
    website: "https://www.merajinternational.com/",
    logo: meraj,
  },
  {
    name: "Rosenbauer",
    description: "Rosenbauer is the world’s leading manufacturer of firefighting and disaster-response equipment. With over 150 years of innovation, the company provides fire engines, aerial platforms, rescue systems, and digital solutions worldwide.",
    website: "https://www.rosenbauer.com/en",
    logo: rosenbauer,
  },
  {
    name: "Moto-Truck GmbH",
    description: "Moto-Truck GmbH is a specialized manufacturer of emergency and municipal vehicles, known for durable construction, modern engineering, and customer-focused solutions.",
    website: "https://www.mototruck.pl/en/",
    logo: mototruck,
  },
  {
    name: "Leviathan Corporation (OTRUSA)",
    description: "OTRUSA is a global wholesale distributor of OTR and industrial tires serving mining, construction, logistics, and agriculture. With over 20 years of expertise, it delivers tires, wheels, TPMS, and performance-enhancing sealants worldwide.",
    website: "https://www.leviathancorp.com/",
    logo: leviathan,
  },
  {
    name: "Unit Export Ltd.",
    description: "Unit Export Ltd. brings more than 45 years of experience delivering international supply contracts funded by organizations such as the World Bank, European Commission, and UN agencies, specializing in complex global procurement projects.",
    website: "https://www.unitexport.com/",
    logo: unitexport,
  },
  {
    name: "Fire Safety Devices Pvt. Ltd.",
    description: "Fire Safety Devices Pvt. Ltd. is an ISO-certified manufacturer providing premium firefighting products since 1995, including foam concentrates, extinguishers, dry powders, and advanced fire protection systems.",
    website: "https://www.firesafetydevices.co.in/",
    logo: FIRECHEM,
  },
  {
    name: "RESQTEC",
    description: "RESQTEC is a global innovator in rescue and aircraft recovery equipment with over 50 years of experience, delivering advanced, mission-critical solutions for emergency and recovery teams worldwide.",
    website: "https://rescue.resqtec.com/en_gb/",
    logo: RESQTEC,
  },
  {
    name: "Jingshen International (HK) Ltd.",
    description: "Jingshen International is a Hong Kong–based trading company specializing in global transit, import, and export operations across medical equipment, electronics, industrial materials, and metals.",
    website: "https://jshkgroup.com/?lang=en",
    logo: JSHK,
  },
  {
    name: "Yiwu Foreal Import & Export Co. Ltd.",
    description: "Yiwu Foreal Import & Export Co. Ltd. provides reliable global sourcing, import, and export services, supporting international partners with efficient trade execution and transparent operations.",
    logo: "📊",
    isEmoji: true,
  },
];