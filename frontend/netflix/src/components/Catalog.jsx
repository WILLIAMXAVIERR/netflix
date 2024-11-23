import React from 'react'
import { Link } from 'react-router-dom'

const movies = [
  { id: 1, title: 'Stranger Things', image: 'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg' },
  { id: 2, title: 'The Crown', image: 'https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg' },
  { id: 3, title: 'Narcos', image: 'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg' },
  { id: 4, title: 'Black Mirror', image: 'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg' },
  { id: 5, title: 'Money Heist', image: 'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg' },
  { id: 6, title: 'Dark', image: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg' },
  { id: 7, title: 'The Witcher', image: 'https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg' },
  { id: 8, title: 'As Branquelas', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adorocinema.com%2Ffilmes%2Ffilme-54456%2F&psig=AOvVaw1psRO0qzzcK_RN1KemzNN3&ust=1732476087552000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjP8sGW84kDFQAAAAAdAAAAABAR' },
  { id: 9, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 10, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 11, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 12, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 13, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 14, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 15, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 16, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 17, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 18, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 19, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },
  { id: 20, title: 'Ozark', image: 'https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjgtMWU1YmY2NWE5NmYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg' },

]

function Catalog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-black py-4 px-6 flex justify-between items-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
          className="w-24"
        />
        <Link to="/login" className="text-white hover:underline">Sair</Link>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Catálogo Netflix</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Catalog

