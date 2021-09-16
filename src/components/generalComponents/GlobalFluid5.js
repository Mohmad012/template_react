import {icon3} from '../allImgs'

function GlobalFluid5(){
  return(
        <div className="container-fluid">
          <div className="section-heading d-flex mt-10p">
            <div className="img-div mr-10"><img src={icon3} alt="" /></div>
            <div className="d-flex flex-column h-100">
              <p className="mb-1 pt-2 text-bold">Hot Auctions</p>
              <h5 className="font-weight-bolder">Live Auctions</h5>
            </div>
          </div>
        </div>
  )
}

export default GlobalFluid5