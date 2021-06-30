import './App.css';
import { Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import RestauranteList from "./RestauranteList";
import RestauranteCreate from './RestauranteCreate';
import RestauranteEdit from "./RestauranteEdit";
import PratosList from "./PratosList";
import PratosCreate from './PratosCreate';
import PratosEdit from "./PratosEdit";
import  dashboard  from './dashboard';
import { theme } from './theme';

const dataProvider = lb4Provider("http://localhost:3000/");

const App = () => (

  <Admin theme={theme} dashboard={dashboard} dataProvider={dataProvider}>
    <Resource name="restaurantes" list={RestauranteList} edit={RestauranteEdit} create={RestauranteCreate}/>
    <Resource name="Pratos" list={PratosList} edit={PratosEdit} create={PratosCreate}/>
  </Admin>

);


export default App;

