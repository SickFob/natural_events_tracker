import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import Filter from './Filter'

const Map = ({ eventData, center, zoom }) => {
  
  const setLocationMarker = (lat, lng, cat, id, title) => {
    return <LocationMarker 
      lat={lat} 
      lng={lng}
      category={cat} 
      onClick={() => setLocationInfo({ id: id, title: title })}
      />
  }

  const [locationInfo, setLocationInfo] = useState(null)
  const [markers, setMarkers] = useState(eventData.map(ev => {
    if(ev.categories[0].id == "wildfires" || ev.categories[0].id == "severeStorms") {
      return setLocationMarker(ev.geometry[0].coordinates[1], ev.geometry[0].coordinates[0], ev.categories[0].id, ev.id, ev.title)
    }
  }))
    
  const handleFiltersChange = (filters) => {
    let filteredMarkers = []
    filteredMarkers = eventData.map(ev => {
      if((ev.categories[0].id == "wildfires" || ev.categories[0].id == "severeStorms") && filters.find(el => el.id == ev.categories[0].id).isChecked) {
        return setLocationMarker(ev.geometry[0].coordinates[1], ev.geometry[0].coordinates[0], ev.categories[0].id, ev.id, ev.title)
      }
    })
    setMarkers(filteredMarkers)
  }

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 
          'AIzaSyA_x8fmWiCS5jHztisSIXG3nG6qmHR5yfc' }}
        defaultCenter={ center }
        defaultZoom={ zoom }      
      >
        {markers}
      </GoogleMapReact>
      <Filter handleFiltersChange={handleFiltersChange}/>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map
