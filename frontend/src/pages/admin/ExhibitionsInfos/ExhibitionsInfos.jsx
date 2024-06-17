import React from 'react'
import './ExhibitionsInfos.css'

const ExhibitionsInfos = () => {
  return (
    <div className="container-fluid">
      <div className="ex__infos">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Otto</td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExhibitionsInfos