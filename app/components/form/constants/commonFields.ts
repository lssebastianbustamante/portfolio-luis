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
    mensaje: {
        name: 'mensaje',
        type: 'textarea',
        label: 'form/form.label.mensaje',
        required: false,
        minLength: 0,
        maxLength: 500
    },
    
}
