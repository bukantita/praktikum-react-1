import React, { Component } from 'react';
import './App.css';
import Media from "./Components/media";

class App extends Component {
  render() {
    return (
      <header>

        {/* PANCASILA */}

        <div className='title'>PANCASILA</div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila 1</strong>
            <br></br>
            Ketuhanan yang maha esa
          </div>
          <Media image="sila 1.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila 2</strong>
            <br></br>
            Kemanusiaan yang adil dan beradab
          </div>
          <Media image="sila 2.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila 3</strong>
            <br></br>
            Persatuan Indonesia
          </div>
          <Media image="sila 3.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila 4</strong>
            <br></br>
            Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan
          </div>
          <Media image="sila 4.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila 5</strong>
            <br></br>
            Keadilan sosial bagi seluruh rakyat Indonesia
          </div>
          <Media image="sila 5.png"></Media>
        </div>
        <hr></hr>

        {/* FORM PENDAFTARAN */}

        <div className="kotak">
          <div className="form-daftar">
            <p>Form daftar osis</p>
          </div>
        </div>

        <br></br>

        <div className='space'>
          <input type="text" id="nama" className="form-input" placeholder="Nama lengkap, contoh: Rahmat Dwi D." />
        </div>

        <div className='space'>
          <select name="gender" id="jenis-kelamin" className='form-input' placeholder='Jenis Kelamin'>
            <option value="">Jenis Kelamin</option>
            <option value="Perempuan">Perempuan</option>
            <option value="Laki-laki">Laki-laki</option>
          </select>
        </div>

        <div className='space'>
          <input type="text" id="kelas" className="form-input" placeholder="Kelas, contoh: XII RPL 12" />
        </div>

        <div class='space'>
          <button type="submit" class="buton" className='bcolor'>Submit</button>
        </div>
        <hr></hr>

        {/* BUTTON WARNA WARNIK */}

        <div className="App Container">
          <button className="mr-1 btn btn-danger">button merah</button>
          <br></br>
          <br></br>
          <button className="mr-2 btn btn-warning">button kuning</button>
          <br></br>
          <br></br>
          <button className="mr-3 btn btn-success">button hijau</button>
          <br></br>
          <br></br>
          <button className="mr-4 btn btn-light">button Putih</button>
          <br></br>
          <br></br>
          <button className="mr-4 btn btn-dark">Button Hitam</button>
          <br></br>
          <br></br>
        </div>

      </header>
    );
  }
}

export default App;
