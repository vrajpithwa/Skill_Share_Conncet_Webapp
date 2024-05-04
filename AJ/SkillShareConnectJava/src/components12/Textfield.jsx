import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
function Textfield1({ label, type, controlId, placeholder }) {
  return (
   <Form.Group className="mb-3" >
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  );
}

export default Textfield1; 