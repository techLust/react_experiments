import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment/moment'
import { CSVLink, CSVDownload } from 'react-csv'
import papa from 'papaparse'

const ExportToCSV = () => {
    const [csvData, setCsvData] = useState([]);

    const csvInfo = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ]


    const exportDataToCSV = () => {
        try {
            console.log('Exporting CSV...', csvData)
            const url = window.URL.createObjectURL(new Blob(csvInfo))
            console.log('URL', url)
            const link = document.createElement('a');
            link.href = url
            const fileName = `csv-data ${moment(new Date()).format('DD MM YY')}.csv`
            link.setAttribute('download', fileName)
            document.body.appendChild(link)
            link.click();
            link.remove();
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            console.log(data)
            setCsvData(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div>ExportToCSV</div>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={exportDataToCSV}
            >Export CSV</button><br />
            <CSVLink data={csvInfo}>Download CSV</CSVLink>
        </>
    )
}

export default ExportToCSV