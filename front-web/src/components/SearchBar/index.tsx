import axios from 'axios'
import AsyncSelect from 'react-select/async'
import { Place } from '../OrderLocation'

import styles from './search-bar.module.css'

const style = {
  input: (provided) => ({
    ...provided,
    fontSize: 24,
    marginBottom: 10,
  }),
  valueContainer: (provided) => ({
    ...provided,
    fontSize: 20
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: 16,
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    fontSize: 16,
    fontWeight: 'bold'
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 30
  }),
  option: (provided) => ({
    ...provided,
    fontSize: 16,
    padding: 20,
  })
}

function fetchLocalMapBox (local: string) {
  const mapboxToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

interface Props {
  handleChangeSelect: (place: Place) => void
}

const SearchBar: React.FC<Props> = ({ handleChangeSelect }) => {

  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await fetchLocalMapBox(inputValue)

    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      })
    })

    callback(places)
  }

  return (
    <div className={styles['search-wrapper']}>  
      <AsyncSelect
        instanceId="some"
        placeholder="Digite seu endereço"
        className={styles.search}
        noOptionsMessage={_ => 'Sem opções'}
        styles={style}
        loadOptions={loadOptions}
        onChange={value => handleChangeSelect(value)}
      />
    </div>
  )
}

export default SearchBar