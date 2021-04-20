import { AppState } from '../AppState'
import Image from '../models/Nasa'
import { nasaApi } from './AxiosService'

class NasaService{
    async getImage(query) {
        const res = await nasaApi.get(query)
        AppState.results = new Image(res)
    }
}

export const nasaService = new NasaService()