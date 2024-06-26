import FormatDate from '../Functions/FormatDate'
import Box from '../Components/Box'

function Header({ patientsQty, setPopUp }) {
  return (
    <header className="header">
      <div className="header__top">
        <h2>Laptop list</h2>
        <div className="header__date">
          <img src="../img/Calendar.svg" alt="date" />
          <p className="dateText">
            <FormatDate />
          </p>
        </div>
        <button className="header__top__button " onClick={() => setPopUp(true)}>
          <img src="../img/plus-icon.svg" alt="add" />
          add laptop
        </button>
      </div>

      <div className="header__boxes">
        <div className="header__boxes__welcome">
          <img src="../img/home_work.svg" alt="welcome" />
          <h3>Mayleen Laptop Inventory</h3>
          <p>
            ...
            <br />
            ...
          </p>
        </div>

        <div className="header__boxes__information">
          <Box Img="user" text="laptop" register={patientsQty} />
          <Box Img="booking" text="bookings" register={2} />
        <div className="header__boxes__date">
          <div className="header__boxes__date header__date">
            <img src="../img/Calendar.svg" alt="date" />
            <p className="dateText">
              <FormatDate />
            </p>
          </div>
        </div>
        </div>

      </div>
    </header>
  )
}

export default Header
