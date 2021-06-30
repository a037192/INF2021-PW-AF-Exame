import {NumberInput, TextInput, SimpleForm, Edit} from "react-admin";


const RestauranteEdit = props => {
    return <Edit {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="ocupacao" />
            <TextInput source="data" />
            <TextInput source="hora" />
            <TextInput source="prato" />
        </SimpleForm>
    </Edit>
};

export default RestauranteEdit;