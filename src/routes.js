import List from "./scenes/List";
import CreatePortfolio from "./scenes/CreatePortfolio";
import EditPortfolio from "./scenes/EditPortfolio";

const routes = [
  {
    path: "/",
    exact: true,
    component: List,
  },
  {
    path: "/lists",
    exact: true,
    component: List,
  },
  {
    path: "/lists/:id/edit",
    exact: true,
    component: (props) => (
      <EditPortfolio
        key={props.match.params.id}
        id={props.match.params.id}
        {...props}
      />
    ),
  },
  {
    path: "/lists/create",
    exact: true,
    component: CreatePortfolio,
  },
  {
    path: "/lists/portfolio/add",
    exact: true,
    component: CreatePortfolio,
  },
];

export default routes;
