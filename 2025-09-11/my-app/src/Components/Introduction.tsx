import "./Introduction.css"

function Introduction() {
  //pmst noolcunktsioon on see mis ootab lihtsalt userinputi käivitamiseks

  return (
    <>
      <h1>Fredi Tarenõmm</h1>
    <h4>Hobid ja huvid:</h4>
      <div className="list">
        <ul>
            <li>Söögitegelemine</li>
            <li>Motosport</li>
            <li>Video Juegos</li>
            <li>Trikiratas</li>
            <li>Battletech</li>
            <li>Infinity</li>
            <li>RC crawlerid</li>
            <li>3d Printimine</li>
            <li>3d modelleerimine</li>
            <li>Maalimine(digi)</li>
            <li>Joonistamine</li>
            <li>Lugemine</li>
            <li>airsoft</li>
            <li>Lauamängud</li>
        </ul>
      </div>
    
      <div className="emailForm">
        <div>
        Teie Email:
        <br />
        <input type="text" />
        </div>
        <>
        Teie Kontakti Põhjus:
        <br />
        <textarea name="textField" id="textField"></textarea>
        </>
                <div>
          <button onClick={() => window.location.reload()}>
            Saada Email eelmainitud isikule!
          </button>
        </div>
      </div>
    </>
  )
}

export default Introduction