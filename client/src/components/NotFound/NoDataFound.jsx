import React from 'react'
import './NotFound.css'

export default function NoDataFound() {
  return (
    <div className="container-nodata">
          <lord-icon
            src="https://cdn.lordicon.com/dnoiydox.json"
            trigger="loop"
            colors="primary:#595959,secondary:#84b74d"
            style={{
              margin: '0 auto',
              width: '350px',
              height: '350px',
            }}
          ></lord-icon>
          <div className="text-data">
            <h2>Sorry, we can't find any meal!</h2>
          </div>
    </div>
  )
}
