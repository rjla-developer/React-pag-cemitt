import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='container mt-5'>
        <div className='row d-flex justify-content-center pt-5'>
            <div className='col-10 col-lg-4 text-center text-light'>
                <main className="form-signin">
                    <form>
                        <img className="mb-4" src={require("../img/cemitt.png")} alt="" width="250" height="100" />
                        <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label className='text-dark' for="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña"/>
                            <label className='text-dark' for="floatingPassword">Contraseña</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Recuérdame
                            </label>
                        </div>
                        <Link to="/admin"><button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button></Link>
                        <p className="mt-5 mb-3 text-muted">&copy; RJ Luengas 2023</p>
                    </form>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Login