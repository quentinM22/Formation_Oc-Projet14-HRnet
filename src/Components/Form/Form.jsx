import React, { useEffect, useState } from "react"
import "./Form.css"

import states from "../../data/state.json"
import department from "../../data/department.json"
import { DatePicker } from "@quentinm22/datepicker-react-cmp"
import { Modal } from "@quentinm22/modal-cmp-react"
import Select from "react-select"
import { useDispatch } from "react-redux"
import { addEmployee } from "../../RTK/Slice/dataSlice"

const Form = () => {
	const dispatch = useDispatch()

	const [maxBirthdate, setMaxBirthdate] = useState("")
	const [selectedOptionState, setSelectedOptionState] = useState("")
	const [selectedOptionDep, setSelectedOptionDep] = useState("")
	const [toggle, setToggle] = useState(false)
	const [error, setError] = useState(false)
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		startDate: "",
		department: "",
		dateOfBirth: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
	})

	const bgColor = ["10", "61", "97", "0.5"]
	
	useEffect(() => {
		const maxBirthdate = () => {
			let date = new Date()
			let day = date.getDate()
			let month = date.getMonth() + 1
			let year = date.getUTCFullYear()
			//condition day 1 à 9 => 01 à 09
			if (day < 10) {
				day = "0" + day
			}
			//condition month 1 à 9 => 01 à 09
			if (month < 10) {
				month = "0" + month
			}
			let maxDate = year + "-" + month + "-" + day
			setMaxBirthdate(maxDate)
		}
		maxBirthdate()
	})
	/**
	 * Submit Form
	 * @param {Event} e 
	 */
	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
			 firstName: document.querySelector("#first-name").value,
			 lastName: document.querySelector("#last-name").value,
			 startDate: document.querySelector("#start-date").value,
			 department: selectedOptionDep ? selectedOptionDep.value : "",
			 dateOfBirth: document.querySelector("#date-of-birth").value,
			 street: document.querySelector("#street").value,
			 city: document.querySelector("#city").value,
			 state: selectedOptionState ? selectedOptionState.value : "",
			 zipCode: document.querySelector("#zip-code").value,
		}

        const formErrors = {
			firstName: formData.firstName === "" ? "First name is required" : "",
			lastName: formData.lastName === "" ? "Last name is required" : "",
			startDate: formData.startDate === "" ? "Start date is required" : "",
			department: !formData.department ? "Department is required" : "",
			dateOfBirth: formData.dateOfBirth === "" ? "Date of birth is required" : "",
			street: formData.street === "" ? "Street is required" : "",
			city: formData.city === "" ? "City is required" : "",
			state: !formData.state ? "State of birth is required" : "",
			zipCode: formData.zipCode === "" ? "Zip code is required" : "",
		}
		const isFormValid = validateForm(formData, formErrors)

		if (isFormValid) {
		  setError(false)
		  setToggle(true)
		  dispatch(addEmployee(formData))
		  const form = document.querySelector("form")
		  form.reset()
		} else {
		  setError(true)
		  setToggle(true)
		  setErrors(formErrors)
		}
	  }
	  const validateForm = (formData, formErrors) => {
		const requiredFields = [
		  "firstName",
		  "lastName",
		  "startDate",
		  "department",
		  "dateOfBirth",
		  "street",
		  "city",
		  "state",
		  "zipCode",
		]
	  
		let isValid = true
		const validZipCode = /^\d{5}$/.test(formData.zipCode)

		requiredFields.forEach((field) => {
		  if (formData[field] === "" || formData[field] === null) {
			isValid = false
		  } 
		})
		if (formData.zipCode.length > 0) {
			if(formData.zipCode.length !== 5){
				formErrors.zipCode = "Zip code must be 5 characters long"
				isValid = false
			}else if(!validZipCode){
				formErrors.zipCode = "Zip code is not a number"
				isValid = false
			}
		  }
		return isValid
	}
	
			

	return (
		<>
			<fieldset className="form">
				<legend>Create Employee</legend>
				<form id="create-employee">
					<div className="first-section">
						<div>
							<label htmlFor="first-name">First Name</label>
							{errors.firstName ? (<input type="text" id="first-name" className="error-input"/>):(<input type="text" id="first-name"/>)}
							{errors.firstName && <small className="error-message">{errors.firstName}</small>}
						</div>
						<div>
							<label htmlFor="last-name">Last Name</label>
							{errors.lastName ? (<input type="text" id="last-name" className="error-input"/>):(<input type="text" id="last-name"/>)}
							{errors.lastName && <small className="error-message">{errors.lastName}</small>}
						</div>

						<div>
							<label htmlFor="date-of-birth">Date of Birth</label>
							{errors.startDate ? (<DatePicker idInput="date-of-birth" maxDate={maxBirthdate} className="error-input" />):(<DatePicker idInput="date-of-birth" maxDate={maxBirthdate} />)}
							{errors.dateOfBirth && <small className="error-message">{errors.dateOfBirth}</small>}

						</div>

						<div>
							<label htmlFor="start-date">Start Date</label>
							{errors.startDate ? (<DatePicker idInput="start-date" className="error-input" />):(<DatePicker idInput="start-date" />)}
							{errors.startDate && <small className="error-message">{errors.startDate}</small>}
						</div>
					</div>

					<fieldset className="address">
						<legend>Address</legend>
						<div>
							<label htmlFor="street">Street</label>
							{errors.street ? (<input type="text" id="street" className="error-input"/>):(<input type="text" id="street"/>)}

							{errors.street && <small className="error-message">{errors.street}</small>}

						</div>

						<div>
							<label htmlFor="city">City</label>
							{errors.city ? (<input type="text" id="city" className="error-input"/>):(<input type="text" id="city"/>)}

							{errors.city && <small className="error-message">{errors.city}</small>}

						</div>
						<div>
							<label htmlFor="state">State</label>
							<Select onChange={setSelectedOptionState} options={states} 
							styles={{
								control: (provided) => ({
								  ...provided,
								  border: errors.state ? "1px solid red" : "1px solid #ced4da", // Changez les couleurs selon vos besoins
								}),
							  }}
							/>
							{errors.state && <small className="error-message">{errors.state}</small>}

						</div>

						<div>
							<label htmlFor="zip-code">Zip Code</label>
							{errors.zipCode ? (<input type="text" id="zip-code" className="error-input"/>):(<input type="text" id="zip-code"/>)}
							{errors.zipCode && <small className="error-message">{errors.zipCode}</small>}
						</div>
					</fieldset>
					<div className="second-section">
						<label htmlFor="department">Department</label>
						<Select onChange={setSelectedOptionDep} options={department}
							styles={{
								control: (provided, state) => ({
								  ...provided,
								  border: errors.department ? "1px solid red" : "1px solid #ced4da", // Changez les couleurs selon vos besoins
								}),
							  }}
						 />
						{errors.department && <small className="error-message">{errors.department}</small>}
					</div>
				</form>
				<button onClick={(e) => handleSubmit(e)}>Save</button>
			</fieldset>
			{!error &&
				<Modal
					toggle={toggle}
					onClose={() => setToggle(false)}
					backgroundColor={bgColor}
					border="green"
					title="Validation"
					content="Employee Created!"
					width={50}
				/>
			}
		</>
	)
}

export default Form
