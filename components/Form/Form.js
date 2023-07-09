import React,{useState} from 'react'
import Formcss from "../../styles/Form.module.css"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';



const Alert = styled(MuiAlert)(({ theme }) => ({
    '& .MuiAlert-icon': {
      marginRight: theme.spacing(1),
    },
    '&.MuiAlert-standardError': {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
  }));
export default function Form() {
    const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
  
function handleSubmit(e) {
    e.preventDefault();
  
    if (name.trim() === '') {
      setErrorMessage('Lütfen bir isim girin.');
      setIsErrorSnackbarOpen(true);
      return;
    }
  
    if (email.trim() === '') {
      setErrorMessage('Lütfen bir e-posta adresi girin.');
      setIsErrorSnackbarOpen(true);
      return;
    }
  
    // Hata olmadığında devam etme işlemleri
    setIsErrorSnackbarOpen(false);
    setErrorMessage('');
    setName('');
    setEmail('');
  }

  return (
    <div className={Formcss.form}>
    <h5 className={Formcss.footer_title}>İletişim</h5>

        <form action="https://getform.io/f/4f373ce7-d22a-4ec2-8951-38f976aafa7d" method="POST" onSubmit={handleSubmit}>
          <div className={Formcss.input_container}>
          <input type="text" name="name" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <textarea name="message" placeholder="Message"></textarea>
          <button className='btn' type="submit">Send</button>
        </form>
        <Snackbar
        open={isErrorSnackbarOpen}
        autoHideDuration={5000}
        onClose={() => setIsErrorSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert variant="filled" severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      </div>
  )
}
