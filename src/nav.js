
import ViewListIcon from '@material-ui/icons/ViewList';
import HomeIcon from "@material-ui/icons/Home";
const sections = [
  {
    links: [
      { label: "Portfolio Lists", to: "/lists", exact: true, icon: ViewListIcon },
      { label: "Home", to: "/", exact: true,icon:  HomeIcon},
    ],
  },
];

export default sections;
