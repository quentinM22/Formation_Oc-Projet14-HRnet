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
		const employee = {
			firstName: document.querySelector("#first-name").value,
			lastName: document.querySelector("#last-name").value,
			startDate: document.querySelector("#start-date").value,
			department: selectedOptionDep.label,
			dateOfBirth: document.querySelector("#date-of-birth").value,
			street: document.querySelector("#street").value,
			city: document.querySelector("#city").value,
			state: selectedOptionState.label,
			zipCode: document.querySelector("#zip-code").value,
		}
		if (
			(document.querySelector("#first-name").value === "") | null ||
			(document.querySelector("#last-name").value === "") | null ||
			(document.querySelector("#start-date").value === "") | null ||
			(selectedOptionDep.label === "") | null ||
			(document.querySelector("#date-of-birth").value === "") | null ||
			(document.querySelector("#street").value === "") | null ||
			(document.querySelector("#city").value === "") | null ||
			(selectedOptionState.label === "") | null ||
			(document.querySelector("#zip-code").value === "") | null | document.querySelector("#zip-code").value.length !== 5
		) {
			setError(true)
			setToggle(true)
		} else {
			setError(false)
			setToggle(true)
			dispatch(addEmployee(employee))
			const form = document.querySelector("form")
			form.querySelectorAll("input").forEach((e) => {
				e.value = ""
			})
		}
	}
	return (
		<>
			<fieldset className="form">
				<legend>Create Employee</legend>
				<form id="create-employee">
					<div className="first-section">
						<div>
							<label for="first-name">First Name</label>
							<input type="text" id="first-name" />
						</div>
						<div>
							<label for="last-name">Last Name</label>
							<input type="text" id="last-name" />
						</div>

						<div>
							<label for="date-of-birth">Date of Birth</label>
							<DatePicker idInput="date-of-birth" maxDate={maxBirthdate} />
						</div>

						<div>
							<label for="start-date">Start Date</label>
							<DatePicker idInput="start-date" />
						</div>
					</div>

					<fieldset class="address">
						<legend>Address</legend>
						<div>
							<label for="street">Street</label>
							<input id="street" type="text" />
						</div>

						<div>
							<label for="city">City</label>
							<input id="city" type="text" />
						</div>
						<div>
							<label for="state">State</label>
							<Select onChange={setSelectedOptionState} options={states} />
						</div>

						<div>
							<label for="zip-code">Zip Code</label>
							<input id="zip-code" type="number" />
						</div>
					</fieldset>
					<div className="second-section">
						<label for="department">Department</label>
						<Select onChange={setSelectedOptionDep} options={department} />
					</div>
				</form>
				<button onClick={(e) => handleSubmit(e)}>Save</button>
			</fieldset>
			{error ? (
				<Modal
					toggle={toggle}
					onClose={() => setToggle(false)}
					backgroundColor={bgColor}
					border="red"
					title="Error"
					content="Error: Employee not Created!"
					width={50}
				/>
			) : (
				<Modal
					toggle={toggle}
					onClose={() => setToggle(false)}
					backgroundColor={bgColor}
					border="green"
					title="Validation"
					content="Employee Created!"
					width={50}
				/>
			)}
		</>
	)
}

export default Form
