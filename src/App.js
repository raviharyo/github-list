import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from './logo.svg';
import { getLists } from './store/listAction';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'react-bootstrap'
function App() {

  const dispatch = useDispatch()
  const lists = useSelector(state => {
    // console.log(state.lists);
    return state.lists
  })

  useEffect(() => {
    dispatch(getLists())
  }, [])
  return (
    <div className="App" style={{ backgroundColor: '#e3e2e1' }}>
      <Container>
        <Table striped hovered hover className='mt-5'>
          <thead>
            <tr>
              <th>No</th>
              <th>Project Name</th>
              <th>Project Link</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            {
              lists.map((el, num) => {
                return (
                  <tr>
                    <td>{num + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.html_url}</td>
                    <td>{el.visibility}</td>
                  </tr>

                )
              })
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
