type GetSellerByGeoResponse = {
  id: string
  sellers: Array<{
    id: string
    name: string
    logo: string
  }>
}

type Coordinates = {
  latitud: number
  longitud: number
}

// Respuesta hardcodeada para pruebas locales
export function getSellerByGeo(
  geo: Coordinates,
  country: string
): Promise<{ sellerId: string; sellerName: string }> {
  return Promise.resolve({
    sellerId: 'demo-seller-id',
    sellerName: 'Distribuidor Demo'
  })
}
