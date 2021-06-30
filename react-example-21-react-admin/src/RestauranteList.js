import { Datagrid, List, NumberField, TextField, DateField } from "ra-ui-materialui";
import { EditButton, Filter, SearchInput, DeleteButton} from "react-admin";

const RestauranteList = props => {
    return <List {...props} filters={<SearchBar/>}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="nome" />
            <NumberField source="ocupacao" />
            <DateField source="data" />
            <TextField source="hora" />
            <TextField source="prato" />
            <EditButton basePath='/restaurantes'/>
            <DeleteButton basePath='/restaurantes'/>
        </Datagrid>
    </List>
    
};

const SearchBar = props => (
    <Filter {...props}>
        <SearchInput placeholder='Id' source='id' resetable />
        <SearchInput placeholder='Nome' source='nome' resetable />
        <SearchInput placeholder='Ocupacao' source='ocupacao' resetable />
        <SearchInput placeholder='Data' source='data' resetable />
        <SearchInput placeholder='Hora' source='hora' resetable />
        <SearchInput placeholder='Prato' source='prato' resetable />
    </Filter>
    
);

export default RestauranteList;