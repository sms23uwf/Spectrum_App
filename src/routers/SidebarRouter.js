import { Home, ContentPaste, Notifications, AccountCircle, Info, WorkOutline, Work, Assessment, ShoppingCart, PlaylistAddCheck } from '@material-ui/icons';

import DashboardPage from '../components/DashboardPage';
import FileSelectionDashboard from '../components/FileSelectionDashboard';
import MissionDataDashboard from '../components/MissionDataDashboard';
import SimulationsDashboard from '../components/SimulationsDashboard';
import ToolsDashboard from '../components/ToolsDashboard';
import AboutPage from '../components/AboutPage';

const SidebarRouter = [
  {
    path: '/dashboard',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: DashboardPage,
    showModal: false
  },
  {
    path: '/fileSelectionDashboard',
    sidebarName: 'Select File',
    navbarName: 'Select File',
    icon: PlaylistAddCheck,
    component: FileSelectionDashboard
  },
  {
    path: '/missionDataDashboard',
    sidebarName: 'Mission Data',
    navbarName: 'Mission Data',
    icon: ShoppingCart,
    component: MissionDataDashboard
  },
  {
    path: '/simulationsDashboard',
    sidebarName: 'Simulations',
    navbarName: 'Simulations',
    icon: Work,
    component: SimulationsDashboard
  },
  {
    path: '/toolsDashboard',
    sidebarName: 'Useful Tools',
    navbarName: 'Useful Tools',
    icon: Work,
    component: ToolsDashboard
  },
  {
    path:'/aboutPage',
    sidebarName: 'About Spectrum',
    navbarName: 'About Spectrum',
    icon: Info,
    component: AboutPage,
    showModal:true
  }
  
];

export default SidebarRouter;