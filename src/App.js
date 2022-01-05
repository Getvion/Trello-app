import Lists from './components/Lists/Lists';

import DB from './assets/db.json';

function App() {
  return (
    <div className='app'>
      <Lists data={DB} />
    </div>
  );
}

export default App;
