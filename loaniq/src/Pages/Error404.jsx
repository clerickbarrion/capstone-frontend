import React from 'react'

export default function Error404() {

  return (
    <div class="container-fluid">
      <div class="rounded p-4 d-flex flex-column align-items-center">
        <h1 class="display-5 fw-bold">404: Not Found</h1>
        <p class="fs-4">Looks like you tried going to a page that doesn't exist or has been moved. Press the button below to head back home.</p>
        <a href="/"><button class="error404-btn btn btn-lg m-3">Home</button></a>
      </div>
      <style jsx>{`
        .error404-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #182d09;
        }

        .error404-btn:hover {
          color: cornsilk;
          background-color: #182d09;
        }
      `}</style>
    </div>  
  )
}
