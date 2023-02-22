// interfaz de angular, para que siempre trabajemos con la misma estructura de datos y es como nuestro propio tipo
export interface Recipe{
  id: string
  title: string
  imageUrl: string
  ingredients: string[]
}
