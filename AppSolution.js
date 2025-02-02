```javascript
import { useSearchParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CaseInsensitiveRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

function CaseInsensitiveRoutes() {
  const params = useSearchParams();
  const navigate = useNavigate();
  const path = params.get('path');

  // Normalize path to lowercase
  const normalizedPath = path ? path.toLowerCase() : '/';

  let element;
  switch (normalizedPath) {
    case '/about':
      element = <About/>;
      break;
    case '/home':
      element = <Home/>;
      break;
    default:
      element = <div>Not Found</div>    ;
  }
  return element;
}


function Home() {
  const navigate = useNavigate();
  const params = useSearchParams();
  return (
    <div>Home
      <button onClick={()=> navigate({pathname: '/about', search: '?path=/about'})}>About</button>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
```