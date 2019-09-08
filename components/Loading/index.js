import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Loading = () => (
  <div style={{ height: 22, width: 22 }}>
    <Icon icon={faCircleNotch} size="lg" spin />
  </div>
)

export default Loading
