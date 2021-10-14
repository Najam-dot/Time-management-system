import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
export default function Index() {
  const state = useSelector((state) => state.LoaderReducer)
  const Active = state.isActive
  return (
    <div>
      {Active ? (
        <div className="sweet-loading">
          {/* <BounceLoader color={'#D736C2'} loading={state.isActive} /> */}
          <ClipLoader background-color={'#0000'} loading="dhasjdajajs" />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
