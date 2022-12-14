import React from "react";
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import "./Login.css";

function Login() {

    return (
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box padding={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}  >Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' className="text-decorator-none">
                            <Link to='/Home' >
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se </Typography>
                    </Box>

                </Box>
            </Grid>
            <Grid xs={6} className='image'>

        </Grid>
</Grid >
    );
}

export default Login;

