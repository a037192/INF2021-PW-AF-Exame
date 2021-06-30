import {List, Datagrid, TextField, NumberField, EditButton, DeleteButton} from "react-admin";



const PratosList = props => {
    return <List {...props}>
        <Datagrid>
            <TextField source="nomeprato" />
            <NumberField source="restauranteId" />
            <EditButton basePath='/restaurantes/{id}/pratos'/>
            <DeleteButton basePath='/restaurantes/{id}/pratos'/>
        </Datagrid>
    </List>

};

export default PratosList;