

// Versión hardcodeada y sin dependencias de VTEX
export const fetchDocument = () => {
  // postEntry simulado: siempre responde con un DocumentId demo
  const postEntry = async (dataEntity: string, formData: object) => {
    return Promise.resolve({ DocumentId: 'demo-document-id' })
  }

  // getEntry simulado: responde con un array demo
  const getEntry = async (
    dataEntity: string,
    phone: string,
    field: string
  ) => {
    return Promise.resolve([
      {
        id: 'demo-id',
        phone,
        field,
        dataEntity,
        otherField: 'valor demo',
      },
    ])
  }

  return { postEntry, getEntry }
}

export default fetchDocument