export interface PlanetDistanceModel {
  echelle: 'echelle' | 'reelle'
  tailleTerre: number
  ratio?: number
}

export interface Planet {
  name: string
  position: number
  distanceFromSun: number
  distanceFromSunCalculated?: number
  diameter: number
  diameterCalculated?: number
}
