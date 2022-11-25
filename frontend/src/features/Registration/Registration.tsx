import React from 'react'

export default function Registration(): JSX.Element {
    return (
        <div className='container'>
            <form method="post" action="/registration">
                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleCheck1">Login</label>
                    <input name="login" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleCheck1">Email</label>
                    <input name="email" type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password" type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password2" type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
        </div>

    )
}