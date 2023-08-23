import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import {Table} from '@quentinm22/table-cmp-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMockData } from '../../RTK/Slice/dataSlice'

const EmployeeList = () => {
	useEffect(()=>{
		document.title = "HRnet - List"
	  })
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
		setTableEmployee(arrayAllEmployee)
		setAttributes(attributesFilter)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, showMockData])

  return (
    <>
    <Header />
    <main className='table-container'>
      <div>
      <label htmlFor='mockData'>MockData</label>
	  {showMockData ? (<input id="mockData" type="checkbox" onChange={() => { dispatch(toggleMockData())}}/>):(<input id="mockData" type="checkbox" onChange={() => { dispatch(toggleMockData())}} />)}
			
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