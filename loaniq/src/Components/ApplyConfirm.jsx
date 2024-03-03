import React from 'react'

export default function ApplyConfirm(props) {
  return (
    <div class="apply-start">
        <div class="mb-5">
            <h1>To start an application, press the start button below: </h1>
            <button class="btn btn-lg form-btns ms-auto" type="button" onClick={props.startEval}>Start</button>
        </div>
        <small><strong>DISCLAIMER:</strong> In order for our admins to make an accurate assessment of your loan request, we recommend you to input all fields as accurate as possible. To view your current loan requests, you can visit your dashboard. </small>
    </div>
  )
}
