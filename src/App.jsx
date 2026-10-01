import "./App.css";

function App() {

  const categorias = [
    "🌮 Tacos",
    "🍔 Hamburguesas",
    "🍕 Pizza",
    "☕ Cafetería",
    "🍰 Postres"
  ];

  const negocios = [
    {
      nombre: "Tacos El Antojo",
      tipo: "Tacos y quesadillas",
      horario: "Abierto hoy"
    },
    {
      nombre: "Pizza Parral",
      tipo: "Pizza artesanal",
      horario: "Abierto hoy"
    },
    {
      nombre: "Café Central",
      tipo: "Café y postres",
      horario: "Abierto hoy"
    }
  ];


  return (
    <div className="app">

      <header>
        <h1>🍴 Qué Se Antoja</h1>
        <p>¿Qué se te antoja hoy?</p>
      </header>


      <input
        className="buscador"
        placeholder="Buscar comida o negocio..."
      />


      <h2>Categorías</h2>

      <div className="categorias">
        {
          categorias.map((cat,index)=>(
            <button key={index}>
              {cat}
            </button>
          ))
        }
      </div>


      <h2>Negocios destacados</h2>

      <div className="negocios">

        {
          negocios.map((negocio,index)=>(
            <div className="card" key={index}>
              <h3>{negocio.nombre}</h3>
              <p>{negocio.tipo}</p>
              <small>{negocio.horario}</small>

              <button>
                Ver menú
              </button>
            </div>
          ))
        }

      </div>


    </div>
  )
}

export default App;