import React from 'react'
import { useSelector } from 'react-redux'
import './Alert.css'

const Alert = () => {
  const alerts = useSelector((state) => state.alerts)
  return alerts.length > 0
    ? alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))
    : null
}

export default Alert
