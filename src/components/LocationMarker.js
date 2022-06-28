import { Icon } from '@iconify/react'
import fireAlert from '@iconify/icons-mdi/fire-alert'
import stormAlert from '@iconify/icons-mdi/weather-hurricane'


const LocationMarker = ({ lat, lng, category, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={category == "wildfires" ? fireAlert : stormAlert} className={category == "wildfires" ? "wildfire-icon" : "storm-icon"} />
    </div>
  )
}

export default LocationMarker