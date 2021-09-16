import {icon2} from '../allImgs'

function GlobalFluid3(){
  return(
        <div className="container-fluid">
          <div className="section-heading d-flex">
            <div className="img-div mr-10"><img src={icon2} alt="" /></div>
            <div className="d-flex flex-column h-100">
              <p className="mb-1 pt-2 text-bold">Latest Items</p>
              <h5 className="font-weight-bolder">New Listed Items</h5>
            </div>
          </div>
        </div>
  )
}

export default GlobalFluid3