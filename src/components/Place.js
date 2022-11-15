import {Link} from "react-router-dom";
export default function Place(){
  return (
    <div className="container">
      <div className="row py-3 my-3 py-md-3 my-md-4">

        <div className="col-12 dropdown open d-md-none mobile-dropdowm">
          <button className="btn filter-btn bg-white btn-outline-dark btn-sm dropdown-toggle" type="button" id="mobilefilter" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
               <span className="filter-text">Location</span> <img  className="ms-3 ms-md-0 ms-lg-3" src="./images/settings.svg" width={18} alt="settings"/>
              </button>
          <div className="dropdown-menu" aria-labelledby="mobilefilter">
          <Link className="mobile-link-filter dropdown-item">Restaurant</Link>
          <Link className="mobile-link-filter dropdown-item">Cottage</Link>
          <Link className="mobile-link-filter dropdown-item">Castle</Link>
          <Link className="mobile-link-filter dropdown-item">fantast city</Link>
          <Link className="mobile-link-filter dropdown-item">beach</Link>
          <Link className="mobile-link-filter dropdown-item">Carbins</Link>
          <Link className="mobile-link-filter dropdown-item">Off-grid</Link>
          <Link className="mobile-link-filter dropdown-item">Farm</Link>
          </div>
        </div>
        
        <div className="col-md-1 col-lg-3 d-none d-md-flex my-4 justify-content-around order-md-2 filter-btn-column">
          <button className="btn  btn-sm filter-btn bg-white btn-outline-dark"><span className="filter-text">Location</span> <img  className="ms-3 ms-md-0 ms-lg-3" src="./images/settings.svg" width={18} alt="settings"/></button>
        </div>

        <div className="col-md-11 col-lg-9 d-none d-md-flex my-4 justify-content-around">
          <Link className="link-filter">Restaurant</Link>
          <Link className="link-filter">Cottage</Link>
          <Link className="link-filter">Castle</Link>
          <Link className="link-filter">fantast city</Link>
          <Link className="link-filter">beach</Link>
          <Link className="link-filter">Carbins</Link>
          <Link className="link-filter">Off-grid</Link>
          <Link className="link-filter">Farm</Link>
        </div>
      </div>

      <div className="row py-3 my-3 py-md-3 my-md-4">

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
            <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/dvn1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s5.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s16.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s11.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/druid6.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/aise.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/aise1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
            <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/druids 4.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s12.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s8.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/susan 3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/susan8.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/susan 5.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card card-metabnb">
          <img className="heart" src="./images/heart.svg" width={24} alt="favourite"/>
            <img src="./images/s9.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-5 mt-2">Desert king</div>
                <div className="col-7 mt-2 text-end"><b>1MBT per night</b></div>
                <div className="col-5 mt-2">2345km away</div>
                <div className="col-7 mt-2 text-end">available for 2weeks stay</div>
                <div className="col-12 mt-2">
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                  <img src="./images/rating.svg" alt="rating star" />
                </div>
              </div>
            </div>
          </div>
        </div>
          
        </div>
    </div>
  )
}
