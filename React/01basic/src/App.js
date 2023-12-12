import { Container } from "react-bootstrap";
import { LogInNav } from "./pages/LogInNav";
import { Route,Routes } from "react-router-dom";
import { LogInForm1 } from "./pages/LogInForm1";
import CustomerData from "./pages/FormValinWithYp";
import { Dashboard } from "./pages/Dashboard";


export default function App() {
  return (
    <>
    <LogInNav/>
      <Container>
        <Routes>
          <Route path="/loginform" element={<LogInForm1></LogInForm1>}></Route>
          <Route path="/" element={<CustomerData></CustomerData>}></Route>
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Container>

    </>
  );
}


