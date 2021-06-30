import React from 'react'
import {Create, SimpleForm, TextInput, NumberInput} from 'react-admin'

const PratosCreate = (props) => {
    return (
        <Create title='Criar Reservas' {...props}>
            <SimpleForm>
                <TextInput source="nomeprato" />
                <NumberInput source="restauranteId" />
            </SimpleForm>
        </Create>
    )
}

export default PratosCreate