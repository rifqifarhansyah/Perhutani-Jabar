import icon from "../../assets/icon.png";
import { popupContent, popupHead, popupText, okText } from "./popupStyles";
import { propertiListCianjur, propertiListBanten, propertiListCiamis, propertiListGarut} from "./propertiKota";
import { defaultMarker } from "./defaultMarker";
import { Marker, Popup } from 'react-leaflet';

const dataCianjur = propertiListCianjur.map(properti => (
  <Marker
    key={properti.nama}
    position={[properti.latitude, properti.longitude]}
    icon={defaultMarker}
  >
    <Popup className="request-popup">
      <div style={popupContent}>
        <img
          src={icon}
          width="150"
          height="150"
          alt="no img"
        />
        <div className="m-2" style={popupHead}>
          {properti.nama}
        </div>
        <span style={popupText}>
          alamat: {properti.alamat}
        </span>
        <br />
        <span style={popupText}>
          tanah: {properti.tanah}
        </span>
        <br />
        <span style={popupText}>
          bangunan: {properti.bangunan}
        </span>
        <div className="m-2" style={okText}>
          <span>{properti.sertipikat}</span>
        </div>
      </div>
    </Popup>
  </Marker>
));

const dataBanten = propertiListBanten.map(properti => (
    <Marker
      key={properti.nama}
      position={[properti.latitude, properti.longitude]}
      icon={defaultMarker}
    >
      <Popup className="request-popup">
        <div style={popupContent}>
          <img
            src={icon}
            width="150"
            height="150"
            alt="no img"
          />
          <div className="m-2" style={popupHead}>
            {properti.nama}
          </div>
          <span style={popupText}>
            alamat: {properti.alamat}
          </span>
          <br />
          <span style={popupText}>
            tanah: {properti.tanah}
          </span>
          <br />
          <span style={popupText}>
            bangunan: {properti.bangunan}
          </span>
          <div className="m-2" style={okText}>
            <span>{properti.sertipikat}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  ));

  const dataCiamis = propertiListCiamis.map(properti => (
    <Marker
      key={properti.nama}
      position={[properti.latitude, properti.longitude]}
      icon={defaultMarker}
    >
      <Popup className="request-popup">
        <div style={popupContent}>
          <img
            src={icon}
            width="150"
            height="150"
            alt="no img"
          />
          <div className="m-2" style={popupHead}>
            {properti.nama}
          </div>
          <span style={popupText}>
            alamat: {properti.alamat}
          </span>
          <br />
          <span style={popupText}>
            tanah: {properti.tanah}
          </span>
          <br />
          <span style={popupText}>
            bangunan: {properti.bangunan}
          </span>
          <div className="m-2" style={okText}>
            <span>{properti.sertipikat}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  ));

  const dataGarut = propertiListGarut.map(properti => (
    <Marker
      key={properti.nama}
      position={[properti.latitude, properti.longitude]}
      icon={defaultMarker}
    >
      <Popup className="request-popup">
        <div style={popupContent}>
          <img
            src={icon}
            width="150"
            height="150"
            alt="no img"
          />
          <div className="m-2" style={popupHead}>
            {properti.nama}
          </div>
          <span style={popupText}>
            alamat: {properti.alamat}
          </span>
          <br />
          <span style={popupText}>
            tanah: {properti.tanah}
          </span>
          <br />
          <span style={popupText}>
            bangunan: {properti.bangunan}
          </span>
          <div className="m-2" style={okText}>
            <span>{properti.sertipikat}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  ));

export { dataCianjur, dataBanten, dataCiamis, dataGarut};
