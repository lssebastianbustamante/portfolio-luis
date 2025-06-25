export const COMMON_FIELDS = {
    nombre: {
        name: 'nombre',
        type: 'text',
        label: 'form/form.label.nombre',
        required: true,
        pattern: '[a-zA-Z ]*',
        minLength: 5,
        maxLength: 50
    },
    email: {
        name: 'email',
        type: 'email',
        label: 'form/form.label.email',
        required: true,
    },
    provincia: {
        name: 'provincia',
        type: 'select',
        label: 'form/form.label.provincia',
        required: true,
        minLength: 5,
        maxLength: 50
    },
    tyc: {
        name: 'tyc',
        type: 'checkbox',
        label: 'form-terms',
        required: true
    }
}
