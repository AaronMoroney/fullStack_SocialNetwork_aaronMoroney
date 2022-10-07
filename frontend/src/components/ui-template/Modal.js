import React from 'react';
//axios
import Axios from 'axios';
//assets
import typewriter from '../../assets/images/typewriter.jpg';
//styles
import '../../styles/components/modal/_modal.scss';
//mui
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
//mui icons
import CloseIcon from '@mui/icons-material/Close';
//theme
import { createTheme, ThemeProvider} from '@mui/material';
//jwt
//import jwt from 'jwt-decode';
//import { decodeToken } from "react-jwt";


const theme = createTheme ({
    palette: {
            button: {
            primary: {
                main: '#091D39',
                contrastText: '#FFFFFF', 
            },
            secondary: {
                main: '#D44651',
            },
            confirm: {
                main: '#2FD381',
                contrastText: '#FFFFFF',
            },
            },
            appbar: {
            primary: {
                main: '#091D39',
                contrastText: '#FFFFFF'
            }
            }
        },
    });
    

export const Modal = ({showModal, setShowModal }) => {
    //storage for e.target.value
    let postTitleStorage;
    let postContentStorage;
    
    //get token from local storage
    let token = sessionStorage.getItem('jwt');
    let userIdStorage = JSON.parse(sessionStorage.getItem('userId'));
    
    //create post
    const createPost = () => {
        Axios.post('http://localhost:3000/posts', {
            userId: userIdStorage,
            postTitle: postTitleStorage,
            postContent: postContentStorage,
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function(response) {
            console.log(response);
        }).catch(function(error)  {
            console.log(error);
        })
    };

    return (
        <>
        {showModal ? 
            <ThemeProvider theme={theme}>
                <>
                    <div className='modal-wrapper'>
                        <div className='modal-parent'>
                            <div className='modal-parent__left'>
                                <img className = 'modal-left__img' src={typewriter} alt='oldschool typewriter' />
                            </div>
                            <div className='modal-parent__right'>
                                <div className='modal-form__parent'>
                                    <div className='modal-form__create-close'>
                                        <h2 className='modal-form__heading'>Create a Post 😇 </h2>
                                        <CloseIcon onClick={() => setShowModal(prev=>!prev)} sx={{marginTop: 1,}} />
                                    </div>
                                    <TextField 
                                    id="outlined-basic" 
                                    label="Add A Title" 
                                    variant="outlined" 
                                    className='login-form' 
                                    sx = {{
                                        marginBottom: 2,
                                        marginTop: 2,
                                    }}
                                    onChange = {(e) => {
                                       postTitleStorage = e.target.value;
                                    }}
                                    />
                                    <TextField
                                    id="outlined-multiline-static"
                                    label="Post Body"
                                    multiline 
                                    rows={10}
                                    className = 'login-form'
                                    sx = {{
                                        marginTop: 1,
                                    }} 
                                    onChange = {(e) => {
                                        postContentStorage = e.target.value;
                                    }}
                                    />
                                </div>
                                <Paper 
                                sx={{ bgcolor: 'button.confirm.main', color: 'button.confirm.contrastText', width: '150px', height: '25px', margin: 'auto' }}
                                onClick = {() => createPost()}
                                > SHARE POST </Paper>
                            </div>
                        </div>
                    </div> 
                </>
            </ThemeProvider>
        : null }
        </>
    )
}

export default Modal