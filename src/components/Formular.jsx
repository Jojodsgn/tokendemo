
function Formular() {
    return (
      <div className="container">
        <form>
          <fieldset>
          <label className="fmlabel" for="name">Name</label>
          <input className="fminput" type="text" id="name" placeholder="Mustermann"></input>
          </fieldset>
          <fieldset>
          <label className="fmlabel" for="vorname" >Vorname</label>
          <input className="fminput" type="text" id="vorname" placeholder="Max"></input>
          </fieldset>
          <fieldset>
          <label className="fmlabel" for="mail">E-Mail</label>
          <input className="fminput" type="email" id="mail" placeholder="mmustermann@mail.com"></input>
          </fieldset>
          <input className="btn" type="submit" value="Zum Newsletter anmelden!"></input>
        </form>
      </div>
    )
}

export default Formular