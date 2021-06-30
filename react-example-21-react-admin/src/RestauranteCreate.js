import React from 'react'
import {Create, SimpleForm, TextInput, NumberInput} from 'react-admin'

const RestauranteCreate = (props) => {
    return (
        <Create title='Criar Reservas' {...props}>
            <SimpleForm>
                <TextInput source="nome" />
                <NumberInput source="ocupacao" />
                <TextInput source="data" />
                <TextInput source="hora" />
                <TextInput source="prato" />
            </SimpleForm>
        </Create>
    )
}

export default RestauranteCreate