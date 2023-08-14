import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import {Table} from '@quentinm22/table-cmp-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMockData } from '../../RTK/Slice/dataSlice'

const EmployeeList = () => {
	// Global State
	const {data} = useSelector((state)=> state.data)
	const {showMockData} = useSelector((state)=> state.data)
	const {newEmployee} = useSelector((state)=> state.data)

	const dispatch = useDispatch()
	//  Local State
	const [tableEmployee, setTableEmployee] = useState([])
	const [attributes, setAttributes] = useState([])
	useEffect(() => {
		let arrayAllEmployee = []
		let attributesFilter = ["firstName", "lastName"]
		showMockData && (data.map((data) => arrayAllEmployee.push(data)))
		newEmployee.length >= 1 && newEmployee.map((employee)=> arrayAllEmployee.push(employee))
		console.log(arrayAllEmployee);
		setTableEmployee(arrayAllEmployee)
		setAttributes(attributesFilter)
	}, [data, showMockData])

  return (
    <>
    <Header />
    <main className='table-container'>
      <div>
      <label>MockData</label>
	  {showMockData ? (<input type="checkbox" onChange={() => { dispatch(toggleMockData())}} checked />):(<input type="checkbox" onChange={() => { dispatch(toggleMockData())}} />)}
			
      </div>
			
    <Table
				title="Current Employees"
				arrayElement={tableEmployee}
				attributes={attributes}
				colorPrimary="#0a3d62"
				colorSecondary="#60a3bc"
			/>
    </main>
    </>
  )
}

export default EmployeeList