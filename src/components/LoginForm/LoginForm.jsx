import { useId, useState } from "react";

/*контрольована форма*/
export default function LoginForm() {

	const [values, setValues] = useState({
		login: "",
		password: "",
	});
	/*
			const handleLoginChange = (evt) => {
				setValues({
					...values,
					login: evt.target.value,
				});
			};
	
			const handlePwdChange = (evt) => {
				setValues({
					...values,
					password: evt.target.value,
				});
			};
			*/
	const handleChange = (evt) => {
		setValues({
			...values,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setValues({
			login: "",
			password: "",
		});
	}


	return (
		<div>
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="login"
				value={values.login}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				value={values.password}
				onChange={handleChange}
			/>
			<button type="submit">Login</button>
			</form>
		</div>
	);
};









/*неконтрольована форма*/
/*
export default function LoginForm({ onLogin }) {
	const loginId = useId();
	const passwordId = useId();
	const handleSubmit = (evt) => {
		evt.preventDefault();

		const form = evt.target;
		const { login, password } = form.elements;
		console.log(login, password);
		console.log(login.value, password.value);
		onLogin({
			login: login.value,
			password: password.value,
		});
		form.reset();
		console.log(evt);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={loginId}>Login</label>
			<input type="text" name="login" id={loginId} />
			<label htmlFor={passwordId}>Password</label>
			<input type="password" name="password" id={passwordId} />
			<button type="submit">Log in</button>


		</form>
	);
}*/