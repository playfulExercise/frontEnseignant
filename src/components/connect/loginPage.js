import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../networkLink";
import Button from "../UI/Button";

class loginPage extends Component {
  constructor() {
    super();
    this.state = {
      email_prof: "",
      password: "",
      errors: {},
      error: "",
      redirectDashboard: false,
      redirectError: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email_prof: this.state.email_prof.toLowerCase(),
      password: this.state.password,
    };

    login(user).then((res) => {
      if ((res || {}).error) {
        (localStorage || {}).removeItem("usertoken");
        this.setState({ redirectError: true });
        this.setState({ error: res.error });
      } else {
        this.setState({ redirectDashboard: true });
      }
    });
  }

  render() {
    const { error } = this.state;

    return (
      <form className="mt-8" action="#" method="POST">
        {this.state.redirectError && <Redirect to="/c/login" />}
        {this.state.redirectDashboard && <Redirect to="/dashboard" />}
        <div>
          <h2 className="mt-6 mb-5 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Se connecter
          </h2>
        </div>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm">
          <div>
            <input
              aria-label="Adresse mail"
              name="email_prof"
              type="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Adresse mail"
              value={this.state.email_prof}
              onChange={this.onChange}
            />
          </div>
          <div className="-mt-px">
            <input
              aria-label="Password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm leading-5">
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Mot de passe oublie ?
            </a>
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={this.onSubmit}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Se connecter
            {error && (
              <p className="text-red-600">L'utilisateur n'a pas été trouvé</p>
            )}
          </Button>
        </div>
      </form>
    );
  }
}

export default loginPage;
