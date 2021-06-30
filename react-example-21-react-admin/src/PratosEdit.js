import {NumberInput, TextInput, SimpleForm, Edit} from "react-admin";


const PratosEdit = props => {
    return <Edit {...props}>
        <SimpleForm>
            <TextInput source="nomeprato" />
            <NumberInput source="restauranteId" />
        </SimpleForm>
    </Edit>
};

export default PratosEdit;