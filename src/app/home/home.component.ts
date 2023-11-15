import {Component, computed, signal} from '@angular/core'
import { CommonModule } from '@angular/common';
import {SHARED} from '../shared'
import {RadioButtonModule} from 'primeng/radiobutton'
import {TranslocoModule} from '@ngneat/transloco'
import {SliderModule} from 'primeng/slider'
import {Planet, PlanetDistanceModel} from './planet-distance.model'
import {FormDirective} from './form.directive'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SHARED, RadioButtonModule, TranslocoModule, SliderModule, FormDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  test = signal<string>('123')

  protected distancePlanet = signal<PlanetDistanceModel>({echelle: 'echelle', tailleTerre: 5})
  protected planets = signal<Planet[]>([])

  protected ratio = computed( () => {
    let ratio = 1

    const terre = this.planets().find(p => p.name === 'Terre')
    if (terre) {
      ratio = this.kmToCm(terre.diameter) / this.distancePlanet().tailleTerre
    }

    for (let planet of this.planets()) {
      planet.diameterCalculated = this.kmToCm(planet.diameter / ratio )
      planet.distanceFromSunCalculated = this.kmToM(planet.distanceFromSun / ratio )
    }

    return ratio
  })

  constructor() {
    this.initPlanets()
  }

  private initPlanets() {
    const planets: Planet[] = []

    planets.push({
      name: 'Mercure',
      position: 1,
      diameter: 4879,
      distanceFromSun: 57900000
    })

    planets.push({
      name: 'Venus',
      position: 2,
      diameter: 12104,
      distanceFromSun: 108200000
    })

    planets.push({
      name: 'Terre',
      position: 3,
      diameter: 12756,
      distanceFromSun: 149600000
    })

    planets.push({
      name: 'Mars',
      position: 4,
      diameter: 6792,
      distanceFromSun: 227900000
    })

    planets.push({
      name: 'Jupiter',
      position: 5,
      diameter: 142984,
      distanceFromSun: 778600000
    })

    planets.push({
      name: 'Saturn',
      position: 6,
      diameter: 120536,
      distanceFromSun: 1433500000
    })

    planets.push({
      name: 'Uranus',
      position: 7,
      diameter: 51118,
      distanceFromSun: 2872500000
    })

    planets.push({
      name: 'Neptune',
      position: 8,
      diameter: 49528,
      distanceFromSun: 4495100000
    })

    planets.push({
      name: 'Soleil',
      position: 0,
      diameter: 1391400,
      distanceFromSun: 0
    })

    planets.sort( (a, b) => a.position - b.position)

    this.planets.set(planets)
  }

  private kmToCm(km: number): number {
    return  km * 1000 * 100
  }

  private kmToM(km: number): number {
    return  km * 1000
  }

  // noinspection JSUnusedLocalSymbols
  private cmToKm(cm: number): number {
    return cm / 100 / 1000
  }

  updateForm(event: PlanetDistanceModel) {
    this.distancePlanet.update(dp => {
      return {
        ...dp, ...event
      }
    })
  }
}
