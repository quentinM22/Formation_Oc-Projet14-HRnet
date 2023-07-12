import React from "react"

import "./Form.css"

const Form = () => {
	return (
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
					<input id="date-of-birth" type="text" />
				</div>

				<div>
					<label for="start-date">Start Date</label>
					<input id="start-date" type="text" />
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
						<select name="state" id="state"></select>
					</div>

					<div>
						<label for="zip-code">Zip Code</label>
						<input id="zip-code" type="number" />
					</div>
				</fieldset>
    <div className="second-section">
    <label for="department">Department</label>
				<select name="department" id="department">
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>
    </div>
			
			</form>
      <button>Save</button>
		</fieldset>
	)
}

export default Form
